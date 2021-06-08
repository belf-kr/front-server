import React from "react";
import ColorGrid from "../../../components/ColorGrid";
import Input from "../../../components/Input";

import PageTitle from "../../../components/PageTitle";

import AddLayout from "../../../layouts/AddLayout";
import ColorsSection from "../../../layouts/AddLayout/ColorsSection";
import RepresentativeLayout from "../../../layouts/RepresentativeLayout";
import ContentsSection from "../../../layouts/RepresentativeLayout/ContentsSection";
import HeaderSection from "../../../layouts/RepresentativeLayout/HeaderSection";
import InputSection from "../../../layouts/AddLayout/InputSection";
import TagInput from "../../../components/TagInput";

function AddCoursePage(): JSX.Element {
  const pageTitle = "New Course";
  const pageType = "Add";
  return (
    <RepresentativeLayout title={pageTitle} pageType={pageType}>
      <HeaderSection>
        <PageTitle titleText={pageTitle} />
      </HeaderSection>
      <ContentsSection isNavNone={true}>
        <AddLayout>
          <ColorsSection>
            <ColorGrid />
          </ColorsSection>
          <InputSection>
            <Input placeholder={"Title"} />
          </InputSection>
          <InputSection>
            <Input placeholder={"Memo"} isMultiLine={true} />
          </InputSection>
          <InputSection>
            <TagInput placeholder={"Tag"} />
          </InputSection>
        </AddLayout>
      </ContentsSection>
    </RepresentativeLayout>
  );
}

export default AddCoursePage;
