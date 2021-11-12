import React from "react";

import type { NextPage } from "next";
import UserLayout from "../layouts/UserLayout";

const Home: NextPage = () => {
  return (
    <UserLayout>
      <h1>홈 화면</h1>
    </UserLayout>
  );
};

export default Home;
