import React from "react";
import Link from "next/link";
import Display from "../components/Display";
import H2Style from "../styles/H2Style";

function AboutPage(): JSX.Element {
  return (
    <>
      <H2Style>About</H2Style>
      <Display />
      <Link href="/">
        <a>Go home</a>
      </Link>
    </>
  );
}

export default AboutPage;
