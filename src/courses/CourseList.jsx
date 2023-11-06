import { counter } from "@fortawesome/fontawesome-svg-core";
import CourseTile from "./CourseTile";

const CourseList = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
        <CourseTile key={index} course={course} />
      ))}
    </div>
  );
}

export default CourseList;