import RepresentativeLayout from "../layouts/RepresentativeLayout";
import TodayLayout from "../layouts/TodayLayout";

function IndexPage(): JSX.Element {
  return (
    <RepresentativeLayout title="Today" pageType="today">
      <TodayLayout />
    </RepresentativeLayout>
  );
}

export default IndexPage;
