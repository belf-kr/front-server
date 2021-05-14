import React from "react";
import Link from "next/link";
import RepresentativeLayout from "../components/layouts/RepresentativeLayout";

function AboutPage(): JSX.Element {
  return (
    <RepresentativeLayout title="Today" MainTitle={() => <a>test</a>}>
      <>
        <p>
          <Link href="/">
            <a>today</a>
          </Link>
        </p>
      </>
    </RepresentativeLayout>
  );
}

export default AboutPage;
