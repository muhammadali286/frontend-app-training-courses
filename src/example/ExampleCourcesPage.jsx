import { Container } from '@edx/paragon';
import { useEffect, useState } from 'react';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

import CourseList from '../courses/CourseList';


const ExampleCourcesPage = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getAuthenticatedHttpClient().get(`${getConfig().LMS_BASE_URL}/training/courses/`)
      .then(res => {
        setCourses(res.data.results);
      })
      .catch(err => ({ error: (err && err.response && err.response.data) || 'Network Error' }));
  }, []);

  return (
    <main>
      <Container className="py-5">
        <h1 className="my-4 text-2xl font-bold">Course List</h1>
        <CourseList courses={courses} />
      </Container>
    </main>
  );
};

export default ExampleCourcesPage;
