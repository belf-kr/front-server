import React from "react";

import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

import { getSearchCourses } from "../../libs/course";
import SearchLayout from "../../layouts/SearchLayout";
import SearchCourseList from "../../domain/Course/SearchCourseList";
import SearchTitle from "../../domain/Search/SearchTitle";

const SearchPage: NextPage = ({ courseList, keyword }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <SearchLayout>
      <SearchTitle keyword={keyword} />
      <SearchCourseList courseList={courseList}></SearchCourseList>
    </SearchLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const keyword = (query?.q as string) ?? "";
  const resCourseList = await getSearchCourses(keyword);
  return { props: { courseList: resCourseList, keyword: keyword } };
};

export default SearchPage;
