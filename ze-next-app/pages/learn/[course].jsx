import { useRouter } from "next/router";
import React from "react";

function Course() {
  const router = useRouter();
  const course = router.query.course;

  return <div>Here is the page where you can learn about {course}</div>;
}

export default Course;
