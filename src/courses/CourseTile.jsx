const CourseTile = ({ course }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">{course.display_name}</h3>
        <p className="text-gray-700 mb-2">ID: {course.id}</p>
        <p className="text-gray-700 mb-2">Organization: {course.org}</p>
        <p className="text-gray-700">Language: {course.language}</p>
      </div>
    );
  }

  export default CourseTile;