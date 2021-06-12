import React from "react";
import AllBelfCount from "../../components/AllBelfCount";
import AllLikeCount from "../../components/AllLikeCount";

import NotificationButton from "../../components/NotificationButton";
import PageTitle from "../../components/PageTitle";
import Profile from "../../components/Profile";

import MyPageLayout from "../../layouts/MyPageLayout";
import BelfAndLikeSection from "../../layouts/MyPageLayout/BelfAndLikeSection";
import InfoSection from "../../layouts/MyPageLayout/InfoSection";
import RepresentativeLayout from "../../layouts/RepresentativeLayout";
import ContentsSection from "../../layouts/RepresentativeLayout/ContentsSection";
import HeaderSection from "../../layouts/RepresentativeLayout/HeaderSection";

type props = {
  id: string;
};

function MyPage({ id }: props): JSX.Element {
  const pageTitle = "MyPage";
  return (
    <RepresentativeLayout title={pageTitle} pageType={pageTitle}>
      <HeaderSection>
        <PageTitle titleText={id} />
        <NotificationButton />
      </HeaderSection>
      <ContentsSection>
        <MyPageLayout>
          <InfoSection>
            <Profile />
          </InfoSection>
          <BelfAndLikeSection>
            <AllLikeCount />
            <AllBelfCount />
          </BelfAndLikeSection>
        </MyPageLayout>
      </ContentsSection>
    </RepresentativeLayout>
  );
}

MyPage.getInitialProps = async (context) => {
  return context.query;
};

export default MyPage;
