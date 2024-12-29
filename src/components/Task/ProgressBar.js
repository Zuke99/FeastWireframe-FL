import React from 'react'

function ProgressBar({ percentage, title }) {
  const radius = 60;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-[160px] h-[160px]">
      {/* SVG Circle Progress */}
      <svg className="w-full h-full transform -rotate-90">
        {/* Background Circle */}
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="80"
          cy="80"
        />
        {/* Progress Circle */}
        <circle
          className="text-orange-500"
          strokeWidth="8"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="80"
          cy="80"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.5s ease'
          }}
        />
      </svg>

      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-2xl font-bold text-gray-800">{percentage}%</div>
        <div className="text-sm text-gray-500 mt-1">{title}</div>
      </div>
    </div>
  )
}

export default ProgressBar
