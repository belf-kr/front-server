import React from "react";
import type { NextPage } from "next";

import DetailLayout from "../../layouts/DetailLayout";
import SettingMaster from "../../domain/Setting/SettingMaster";

const UserSettingPage: NextPage = () => {
  return (
    <DetailLayout>
      <SettingMaster />
    </DetailLayout>
  );
};

export default UserSettingPage;
