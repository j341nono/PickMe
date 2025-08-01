import React from 'react';

type ExclusionControlProps = {
  candidates: { name: string; grade: string }[];
  excludedNames: string[];
  onToggle: (name: string) => void;
};

const ExclusionControl: React.FC<ExclusionControlProps> = ({ candidates, excludedNames, onToggle }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Select Name to Exclude</h4>
      {candidates.map(p => (
        <label key={p.name} style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="checkbox"
            checked={excludedNames.includes(p.name)}
            onChange={() => onToggle(p.name)}
          />
          {p.name}
        </label>
      ))}
    </div>
  );
};

export default ExclusionControl;
