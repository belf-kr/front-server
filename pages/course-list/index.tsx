import AddCourseButton from "../../components/AddCourseButton";
import AllBelfCount from "../../components/AllBelfCount";
import AllLikeCount from "../../components/AllLikeCount";
import CourseList from "../../components/CourseList";
import NotificationButton from "../../components/NotificationButton";
import PageTitle from "../../components/PageTitle";

import CourseListLayout from "../../layouts/CourseListLayout";
import CourseListSection from "../../layouts/CourseListLayout/CourseListSection";
import InfoSection from "../../layouts/CourseListLayout/InfoSection";
import RepresentativeLayout from "../../layouts/RepresentativeLayout";
import ContentsSection from "../../layouts/RepresentativeLayout/ContentsSection";
import HeaderSection from "../../layouts/RepresentativeLayout/HeaderSection";

function CourseListPage(): JSX.Element {
  const pageTitle = "Course";
  return (
    <RepresentativeLayout title={pageTitle} pageType={pageTitle}>
      <HeaderSection>
        <PageTitle titleText={pageTitle} />
        <NotificationButton />
      </HeaderSection>
      <ContentsSection>
        <CourseListLayout>
          <InfoSection>
            <AllLikeCount />
            <AllBelfCount />
            <div />
            <AddCourseButton />
          </InfoSection>
          <CourseListSection>
            <CourseList />
          </CourseListSection>
        </CourseListLayout>
      </ContentsSection>
    </RepresentativeLayout>
  );
}

export default CourseListPage;
