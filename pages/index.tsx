import React from "react";
import Link from "next/link";
import Input from "../components/Input";
import H2Style from "../styles/H2Style";
import RepresentativeLayout from "../components/layouts/RepresentativeLayout";

function IndexPage(): JSX.Element {
  return (
    <RepresentativeLayout title="Today" MainTitle={() => <a>test</a>}>
      <>
        <H2Style highlight>Home</H2Style>
        <Input />
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </>
    </RepresentativeLayout>
  );
}

export default IndexPage;
