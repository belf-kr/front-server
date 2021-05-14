import React from "react";
import RepresentativeLayout from "../components/layouts/RepresentativeLayout";
import TodayLayout from "../components/layouts/TodayLayout";

function IndexPage(): JSX.Element {
  return (
    <RepresentativeLayout title="Today" pageType="today">
      <TodayLayout />
    </RepresentativeLayout>
  );
}

export default IndexPage;
