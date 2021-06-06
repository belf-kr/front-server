import React from "react";
import PageTitle from "../../../components/PageTitle";

import RepresentativeLayout from "../../../layouts/RepresentativeLayout";
import ContentsSection from "../../../layouts/RepresentativeLayout/ContentsSection";
import HeaderSection from "../../../layouts/RepresentativeLayout/HeaderSection";

function AddCoursePage(): JSX.Element {
  const pageTitle = "New Course";
  const pageType = "Add";
  return (
    <RepresentativeLayout title={pageTitle} pageType={pageType}>
      <HeaderSection>
        <PageTitle titleText={pageTitle} />
      </HeaderSection>
      <ContentsSection isNavNone={true}></ContentsSection>
    </RepresentativeLayout>
  );
}

export default AddCoursePage;
