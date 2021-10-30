import React from "react";

import type { NextPage } from "next";

import UserLayout from "../layouts/UserLayout";
import UserContentsLayout from "../layouts/UserContentsLayout";

import UserProfile from "../domain/UserPage/UserProfile";

const Home: NextPage = () => {
  return (
    <UserLayout>
      <UserProfile />
      <UserContentsLayout></UserContentsLayout>
    </UserLayout>
  );
};

export default Home;
