import React from 'react';

type GradeSelectorProps = {
  grades: string[];
  selectedGrade: string;
  onSelect: (grade: string) => void;
};

const GradeSelector: React.FC<GradeSelectorProps> = ({ grades, selectedGrade, onSelect }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      {grades.map(grade => (
        <button
          key={grade}
          onClick={() => onSelect(grade)}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: selectedGrade === grade ? '#9FA09B' : '#f0f0f0',
            border: '1px solid #ccc',
            cursor: 'pointer'
          }}
        >
          {grade}
        </button>
      ))}
    </div>
  );
};

export default GradeSelector;
