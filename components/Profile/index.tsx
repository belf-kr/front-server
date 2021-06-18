import { useEffect, useState } from "react";

import getUserInfo from "../../libs/axios/getProfile";

import Component from "./Component";
import Loading from "./Loading";

function Profile(): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<Loading />);

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setComponent(<Component userProfile={res} />);
      })
      .catch(() => {
        setComponent(<>Error...</>);
      });
  }, []);

  return component;
}

export default Profile;
