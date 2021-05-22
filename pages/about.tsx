import Link from "next/link";

import RepresentativeLayout from "../layouts/RepresentativeLayout";

function AboutPage(): JSX.Element {
  return (
    <RepresentativeLayout title="About" pageType="course">
      <p>
        <Link href="/">
          <a>today</a>
        </Link>
      </p>
    </RepresentativeLayout>
  );
}

export default AboutPage;
