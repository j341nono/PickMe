import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { Zap } from 'lucide-react';

type RouletteAreaProps = {
  candidates: { name: string; grade: string }[];
  onResult: (winner: string) => void;
};

const RouletteArea: React.FC<RouletteAreaProps> = ({ candidates, onResult }) => {
  const data = candidates.map(p => ({ option: p.name }));
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (data.length > 0 && !mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  
  const handleStopSpinning = () => {
    setMustSpin(false);
    if (data.length > 0) {
      onResult(data[prizeNumber].option);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      {data.length > 0 ? (
        <>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            spinDuration={0.5}
            onStopSpinning={handleStopSpinning}
            backgroundColors={['#3e3e3e', '#df3428']}
            textColors={['#ffffff']}
            outerBorderColor={"#D69E2E"} 
            outerBorderWidth={8}
            innerBorderColor={"#B7791F"}
            innerBorderWidth={30}
            radiusLineColor={"#C3A060"}
            radiusLineWidth={6} 
          />
          <button onClick={handleSpinClick} disabled={mustSpin} style={{ marginTop: '20px' }}>
            <Zap />
            {mustSpin ? 'SPINNING...' : 'SPIN!'}
          </button>
        </>
      ) : (
        <p>There are no suitable candidates</p>
      )}
    </div>
  );
};

export default RouletteArea;