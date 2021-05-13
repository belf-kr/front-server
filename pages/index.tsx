import React from "react";
import Link from "next/link";
import Input from "../components/Input";

function IndexPage(): JSX.Element {
  return (
    <>
      <h2>Home</h2>
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
