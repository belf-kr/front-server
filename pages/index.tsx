import React from "react";
import Link from "next/link";
import Input from "../components/Input";
import H2Style from "../styles/H2Style";

function IndexPage(): JSX.Element {
  return (
    <>
      <H2Style highlight>Home</H2Style>
      <Input />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  );
}

export default IndexPage;
