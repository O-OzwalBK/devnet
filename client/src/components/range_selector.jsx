import React, { useState } from "react";

const RangeSlider = ({
  min,
  max,
  step,
  initialMin,
  initialMax,
  onRangeChange,
}) => {
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMinChange = (e) => {
    const newMinValue = parseInt(e.target.value, 10);
    if (newMinValue <= maxValue) {
      setMinValue(newMinValue);
      onRangeChange({ min: newMinValue, max: maxValue });
    }
  };

  const handleMaxChange = (e) => {
    const newMaxValue = parseInt(e.target.value, 10);
    if (newMaxValue >= minValue) {
      setMaxValue(newMaxValue);
      onRangeChange({ min: minValue, max: newMaxValue });
    }
  };

  const minPosition = ((minValue - min) / (max - min)) * 100;
  const maxPosition = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="relative w-full h-2 bg-gray-200 rounded-full">
      {/* Track */}
      <div
        className="absolute h-2 bg-blue-500 rounded-full"
        style={{
          left: `${minPosition}%`,
          width: `${maxPosition - minPosition}%`,
        }}
      ></div>
      {/* Min Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={handleMinChange}
        className="absolute top-0 w-full h-2 opacity-0"
        style={{ pointerEvents: "all", zIndex: 2 }}
      />
      {/* Max Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxChange}
        className="absolute top-0 w-full h-2 opacity-0"
        style={{ pointerEvents: "all", zIndex: 1 }}
      />
    </div>
  );
};

export default RangeSlider;
