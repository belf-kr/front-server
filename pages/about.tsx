import React from "react";
import Link from "next/link";
import Display from "../components/Display";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <h2>About</h2>
      <Display />
      <Link href="/">
        <a>Go home</a>
      </Link>
    </>
  );
}
