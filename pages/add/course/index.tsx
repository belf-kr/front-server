import React, { useEffect, useState } from "react";

import ColorGrid from "../../../components/ColorGrid";
import Input from "../../../components/Input";
import PageTitle from "../../../components/PageTitle";
import TagInput from "../../../components/TagInput";
import AddButton from "../../../components/AddButton";

import AddLayout from "../../../layouts/AddLayout";
import ColorsSection from "../../../layouts/AddLayout/ColorsSection";
import RepresentativeLayout from "../../../layouts/RepresentativeLayout";
import ContentsSection from "../../../layouts/RepresentativeLayout/ContentsSection";
import HeaderSection from "../../../layouts/RepresentativeLayout/HeaderSection";
import InputSection from "../../../layouts/AddLayout/InputSection";
import ButtonSection from "../../../layouts/AddLayout/ButtonSection";

import useOnChange from "../../../hooks/useOnChange";
import useColorChange from "../../../hooks/useColorChange";
import useTagChange from "../../../hooks/useTagChange";

import { CourseItem } from "../../../libs/type/CourseItem";

import setNewCourse from "../../../libs/axios/setNewCourse";

function AddCoursePage(): JSX.Element {
  const pageTitle = "New Course";
  const pageType = "Add";

  const [title, titleOnChange] = useOnChange();
  const [memo, memoOnChange] = useOnChange();
  const [color, colorOnChange] = useColorChange();
  const [tags, tagsOnChange] = useTagChange();

  const [courseData, setCourseData] = useState<CourseItem>();

  useEffect(() => {
    setCourseData({
      title: title,
      explanation: memo,
      color: color,
      tags: tags,
    });
  }, [title, memo, color, tags]);

  return (
    <RepresentativeLayout title={pageTitle} pageType={pageType}>
      <HeaderSection>
        <PageTitle titleText={pageTitle} />
      </HeaderSection>
      <ContentsSection isNavNone={true}>
        <AddLayout>
          <ColorsSection>
            <ColorGrid colorOnChange={(v) => colorOnChange(v)} />
          </ColorsSection>
          <InputSection>
            <Input placeholder={"Title"} onChange={(e) => titleOnChange(e)} />
          </InputSection>
          <InputSection>
            <Input placeholder={"Memo"} isMultiLine={true} onChange={(e) => memoOnChange(e)} />
          </InputSection>
          <InputSection>
            <TagInput placeholder={"Tag"} tagsOnChange={tagsOnChange} />
          </InputSection>
          <ButtonSection>
            <AddButton
              text={"Create"}
              bgColor={"#19CC19"}
              onClick={() => {
                setNewCourse(courseData);
                location.href = "/course-list";
              }}
            />
            <AddButton text={"Cancel"} bgColor={"#FF4A4A"} onClick={() => window.history.back()} />
          </ButtonSection>
        </AddLayout>
      </ContentsSection>
    </RepresentativeLayout>
  );
}

export default AddCoursePage;
