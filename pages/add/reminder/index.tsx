import React, { useEffect, useState } from "react";

import Input from "../../../components/Input";
import PageTitle from "../../../components/PageTitle";
import AddButton from "../../../components/AddButton";
import CourseSelection from "../../../components/CourseSelection";
import DetailSelection from "../../../components/DetailSelection";

import AddLayout from "../../../layouts/AddLayout";
import RepresentativeLayout from "../../../layouts/RepresentativeLayout";
import ContentsSection from "../../../layouts/RepresentativeLayout/ContentsSection";
import HeaderSection from "../../../layouts/RepresentativeLayout/HeaderSection";
import InputSection from "../../../layouts/AddLayout/InputSection";
import ButtonSection from "../../../layouts/AddLayout/ButtonSection";

import useOnChange from "../../../hooks/useOnChange";
import useOnCourseChange from "../../../hooks/useOnCourseChange";

import Reminder from "../../../libs/type/Reminder";
import postNewReminder from "../../../libs/axios/postNewReminder";

function AddReminderPage(): JSX.Element {
  const pageTitle = "New Reminder";
  const pageType = "Add";

  const [title, titleOnChange] = useOnChange();
  const [memo, memoOnChange] = useOnChange();
  const [courseId, courseOnChange] = useOnCourseChange();

  const [reminderData, setReminderData] = useState<Reminder>();

  useEffect(() => {
    setReminderData({
      courseId: courseId,
      title: title,
      explanation: memo,
      recurringCycleDate: 1,
      passedDay: 1,
    });
  }, [courseId, title, memo]);

  return (
    <RepresentativeLayout title={pageTitle} pageType={pageType}>
      <HeaderSection>
        <PageTitle titleText={pageTitle} />
      </HeaderSection>
      <ContentsSection isNavNone={true}>
        <AddLayout>
          <InputSection>
            <Input placeholder={"Title"} onChange={(e) => titleOnChange(e)} />
          </InputSection>
          <InputSection>
            <Input placeholder={"Memo"} isMultiLine={true} onChange={(e) => memoOnChange(e)} />
          </InputSection>
          <InputSection>
            <CourseSelection courseOnChange={courseOnChange} />
          </InputSection>
          <InputSection>
            <DetailSelection />
          </InputSection>
          <ButtonSection>
            <AddButton
              text={"Create"}
              bgColor={"#19CC19"}
              onClick={async () => {
                await postNewReminder(reminderData);
                window.history.back();
              }}
            />
            <AddButton text={"Cancel"} bgColor={"#FF4A4A"} onClick={() => window.history.back()} />
          </ButtonSection>
        </AddLayout>
      </ContentsSection>
    </RepresentativeLayout>
  );
}

export default AddReminderPage;
