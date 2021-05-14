import React from "react";
import Link from "next/link";
import RepresentativeLayout from "../components/layouts/RepresentativeLayout";

function IndexPage(): JSX.Element {
  return (
    <RepresentativeLayout title="Today" MainTitle={() => <a>test</a>}>
      <>
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
