import React from "react";

import Input from "../../../components/Input";
import PageTitle from "../../../components/PageTitle";
import AddButton from "../../../components/AddButton";

import AddLayout from "../../../layouts/AddLayout";
import RepresentativeLayout from "../../../layouts/RepresentativeLayout";
import ContentsSection from "../../../layouts/RepresentativeLayout/ContentsSection";
import HeaderSection from "../../../layouts/RepresentativeLayout/HeaderSection";
import InputSection from "../../../layouts/AddLayout/InputSection";
import ButtonSection from "../../../layouts/AddLayout/ButtonSection";

function AddReminderPage(): JSX.Element {
  const pageTitle = "New Reminder";
  const pageType = "Add";
  return (
    <RepresentativeLayout title={pageTitle} pageType={pageType}>
      <HeaderSection>
        <PageTitle titleText={pageTitle} />
      </HeaderSection>
      <ContentsSection isNavNone={true}>
        <AddLayout>
          <InputSection>
            <Input placeholder={"Title"} />
          </InputSection>
          <InputSection>
            <Input placeholder={"Memo"} isMultiLine={true} />
          </InputSection>
          <ButtonSection>
            <AddButton text={"Create"} bgColor={"#19CC19"} />
            <AddButton text={"Cancel"} bgColor={"#FF4A4A"} onClick={() => window.history.back()} />
          </ButtonSection>
        </AddLayout>
      </ContentsSection>
    </RepresentativeLayout>
  );
}

export default AddReminderPage;
