import React from 'react';

function ListCourses({ courses }) {
  return (
    <div className="courses">
      <h2>Meus Cursos</h2>
      <ul className="listCourses">
        {Array.isArray(courses) && courses.map((course) => (
          <li key={course.id}>
            <span>{course.platform}:</span> {course.name} - {course.hours} horas, concluído em {course.completionDate}.
            <br></br><a href={course.courseLink} target="_blank" rel="noopener noreferrer">Acessar certificado</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListCourses;
