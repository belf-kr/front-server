import React from "react";

import BackButton from "../../../components/BackButton";
import PostButton from "../../../components/PostButton";
import SubPageTitle from "../../../components/SubPageTitle";

import SubLayout from "../../../layouts/SubLayout";
import HeaderSection from "../../../layouts/SubLayout/HeaderSection";
import ContentsSection from "../../../layouts/SubLayout/ContentsSection";
import PostTitle from "../../../components/PostTitle";
import PostContents from "../../../components/PostContents";

// type props = {
//   id: string;
// };

function PostPage(): JSX.Element {
  const pageTitle = "MyPage";
  return (
    <SubLayout title={pageTitle}>
      <HeaderSection>
        <div>
          <BackButton />
        </div>
        <SubPageTitle titleText={"영어공부 하기"} />
        <div>
          <PostButton />
        </div>
      </HeaderSection>
      <ContentsSection>
        <PostTitle titleText={"문법 공부"} />
        <PostContents />
      </ContentsSection>
    </SubLayout>
  );
}

PostPage.getInitialProps = async (context) => {
  return context.query;
};

export default PostPage;
