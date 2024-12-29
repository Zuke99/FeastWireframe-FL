import React from 'react'
import { 
  RiTaskLine, 
  RiVideoLine, 
  RiUserSearchLine, 
  RiTargetLine 
} from 'react-icons/ri'

function DashboardCard({ icon: Icon, title, count, subtext, trend }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        {/* Left: Icon and Title */}
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-lg bg-gray-100">
            {Icon && <Icon className="w-5 h-5 text-gray-600" />}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-xl font-bold text-gray-900 mt-0.5">{count}</p>
          </div>
        </div>

        {/* Right: Trend and Subtext */}
        <div className="text-right">
          <div className={`text-sm font-medium ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 && '+'}{trend}%
          </div>
          <p className="text-xs text-gray-500 mt-0.5">{subtext}</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard
