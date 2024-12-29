import React from 'react'

function Card({ icon: Icon, count, label, bgColor = 'bg-purple-500' }) {
  return (
    <div className={`${bgColor} rounded-xl p-4 text-white`}>
      <div className="flex items-center space-x-3">
        {/* Icon */}
        <div className="p-2 rounded-lg bg-white/10">
          {Icon && <Icon className="w-6 h-6 text-white" />}
        </div>

        {/* Content */}
        <div>
          {/* Heading - Big Text */}
          <h2 className="text-2xl font-bold">
            {count}
          </h2>
          
          {/* Description - Small Text */}
          <p className="text-sm opacity-80">
            {label}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
