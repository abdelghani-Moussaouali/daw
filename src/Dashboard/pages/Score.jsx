import React, { useState } from 'react';

const Score = () => {
  // State to store the patient percentage score
  const [percentageScore, setPercentageScore] = useState(0);
  return (
    <div>
     
      <p>{percentageScore}%</p>
    
    </div>
  );
};

export default Score;