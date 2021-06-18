import React from "react";

import BackButton from "../../../components/BackButton";
import PostButton from "../../../components/PostButton";
import SubPageTitle from "../../../components/SubPageTitle";

import SubLayout from "../../../layouts/SubLayout";
import HeaderSection from "../../../layouts/SubLayout/HeaderSection";
import ContentsSection from "../../../layouts/SubLayout/ContentsSection";
import PostTitle from "../../../components/PostTitle";
import PostContents from "../../../components/PostContents";

type props = {
  id: string;
  courseTitle: string;
  todoTitle: string;
};

function PostPage({ courseTitle, todoTitle }: props): JSX.Element {
  const pageTitle = "MyPage";
  return (
    <SubLayout title={pageTitle}>
      <HeaderSection>
        <div>
          <BackButton />
        </div>
        <SubPageTitle titleText={courseTitle} />
        <div>
          <PostButton />
        </div>
      </HeaderSection>
      <ContentsSection>
        <PostTitle titleText={todoTitle} />
        <PostContents />
      </ContentsSection>
    </SubLayout>
  );
}

PostPage.getInitialProps = async (context) => {
  return context.query;
};

export default PostPage;
