import React from "react";

import CourseList from "../../components/CourseList";
import Input from "../../components/Input";
import NotificationButton from "../../components/NotificationButton";
import PageTitle from "../../components/PageTitle";

import InputSection from "../../layouts/AddLayout/InputSection";
import OtherLayout from "../../layouts/OtherLayout";
import CourseListSection from "../../layouts/OtherLayout/CourseListSection";
import InfoSection from "../../layouts/OtherLayout/InfoSection";
import RepresentativeLayout from "../../layouts/RepresentativeLayout";
import ContentsSection from "../../layouts/RepresentativeLayout/ContentsSection";
import HeaderSection from "../../layouts/RepresentativeLayout/HeaderSection";

function OtherPage(): JSX.Element {
  const pageTitle = "Other";
  return (
    <RepresentativeLayout title={pageTitle} pageType={pageTitle}>
      <HeaderSection>
        <PageTitle titleText={pageTitle} />
        <NotificationButton />
      </HeaderSection>
      <ContentsSection>
        <OtherLayout>
          <InfoSection>
            <InputSection marginTop={"10px"}>
              <Input placeholder={"Search"} borderRadius={"50px"} />
            </InputSection>
          </InfoSection>
          <CourseListSection>
            <CourseList />
          </CourseListSection>
        </OtherLayout>
      </ContentsSection>
    </RepresentativeLayout>
  );
}

export default OtherPage;
