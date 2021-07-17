import React from 'react';
import { evaluate } from 'mathjs';

const SettingsDisplay = ({ value, maxPrecision }) => {
  
    return (
        <div className="calculator-display">
            <div className="auto-scaling-text" style={{ transform: scaleDown }}>
                {formattedValue}
            </div>
        </div>
    );
}

export default CalculatorDisplay;