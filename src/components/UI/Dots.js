import React from 'react';

export default function Dots({
  width = '100%',
  height = 100,
  color = '#A85C4A',
  dashArray = '2, 12',
  strokeWidth = 2,
  className = '',
  style = {},
  position = 'bottom',
  curve = false,
}) {
  const positioning =
    position === 'absolute'
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }
      : {
          display: 'block',
        };

  return (
    <svg
      viewBox="0 0 1000 100"
      width={width}
      height={height}
      preserveAspectRatio="none"
      className={className}
      style={{ ...positioning, ...style }}
    >
      {curve === false ? (
  <line
    x1="0"
    y1="50"
    x2="1000"
    y2="50"
    stroke={color}
    strokeDasharray={dashArray}
    strokeWidth={strokeWidth}
  />
) : (
  <path
    d="M0,50 Q 125,0 250,50 T 500,50 T 750,50 T 1000,50"
    fill="none"
    stroke={color}
    strokeDasharray={dashArray}
    strokeWidth={strokeWidth}
  />
)}
    </svg>
  );
}