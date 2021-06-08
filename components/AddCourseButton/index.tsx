import React from "react";
import Link from "next/link";

import { default as S } from "./style";

function AddCourseButton(): JSX.Element {
  return (
    <Link href="/add/course">
      <S.Button>New Course</S.Button>
    </Link>
  );
}

export default AddCourseButton;
