import React from 'react';

function EducationItem({ institution, degree, field, startDate, endDate, incomplete }) {
  return (
    <div className="educationItem">
      <h3 className="degree">{degree} em {field}</h3>
      <p className="institution">{institution}</p>
      <p className="dates">{startDate} - {endDate}{incomplete && ' (incompleto)'}</p>
    </div>
  );
}

export default EducationItem;
