import NavigationBar from "../components/NavigationBar";
import NotificationButton from "../components/NotificationButton";
import PageTitle from "../components/PageTitle";
import PlantingGlass from "../components/PlantingGlass";
import TodayTodoList from "../components/TodayTodoList";

import RepresentativeLayout from "../layouts/RepresentativeLayout";
import ContentsSection from "../layouts/RepresentativeLayout/ContentsSection";
import HeaderSection from "../layouts/RepresentativeLayout/HeaderSection";
import TodayLayout from "../layouts/TodayLayout";
import PlantingGlassSection from "../layouts/TodayLayout/PlantingGlassSection";
import TodoListSection from "../layouts/TodayLayout/TodoListSection";

function IndexPage(): JSX.Element {
  const pageTitle = "Today";
  return (
    <RepresentativeLayout title={pageTitle} pageType={pageTitle}>
      <HeaderSection>
        <PageTitle titleText={pageTitle} />
        <NotificationButton />
      </HeaderSection>
      <ContentsSection>
        <TodayLayout>
          <PlantingGlassSection>
            <PlantingGlass />
          </PlantingGlassSection>
          <TodoListSection>
            <TodayTodoList />
          </TodoListSection>
        </TodayLayout>
      </ContentsSection>
      <NavigationBar />
    </RepresentativeLayout>
  );
}

export default IndexPage;
