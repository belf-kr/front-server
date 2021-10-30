import React from "react";

import { NextPage } from "next";

import CreateLayout from "../../layouts/CreateLayout";

import CreateCourse from "../../domain/Course/CreateCourse";

const NewCoursePage: NextPage = () => {
  return (
    <CreateLayout>
      <CreateCourse />
    </CreateLayout>
  );
};

export default NewCoursePage;
