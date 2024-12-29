import React from 'react'
import Card from '../../components/Task/Card'
import DashboardCard from '../../components/DashboardCard'
import ProgressBar from '../../components/Task/ProgressBar'
import CalendarCard from '../../components/Calendar/CalendarCard'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { 
  RiTimeLine,
  RiGroupLine,
  RiCheckboxCircleLine,
  RiBarChartBoxLine,
  RiTaskLine, 
  RiVideoLine, 
  RiSearch2Line,
  RiFireLine
} from 'react-icons/ri'

function DashboardHome() {
  const dashboardCards = [
    {
      icon: RiTaskLine,
      title: "Tasks",
      count: "24",
      subtext: "Tasks this week",
      trend: 12
    },
    {
      icon: RiVideoLine,
      title: "Lecture Videos",
      count: "8",
      subtext: "Videos this week",
      trend: -5
    },
    {
      icon: RiSearch2Line,
      title: "Prospects",
      count: "16",
      subtext: "New prospects",
      trend: 8
    },
    {
      icon: RiFireLine,
      title: "Daily Goal",
      count: "85%",
      subtext: "Completion rate",
      trend: 15
    }
  ]

  const taskCards = [
    {
      icon: RiTimeLine,
      count: "25",
      label: "Total Tasks",
      bgColor: "bg-purple-400"
    },
    {
      icon: RiGroupLine,
      count: "15",
      label: "Completed",
      bgColor: "bg-orange-400"
    },
    {
      icon: RiCheckboxCircleLine,
      count: "10",
      label: "Pending",
      bgColor: "bg-red-400"
    },
    //in progress
    {
      icon: RiBarChartBoxLine,
      count: "5",
      label: "In Progress",
      bgColor: "bg-green-400"
    }
  ]

  return (
    <div className="p-6 h-screen">
      <div className="flex flex-col h-full gap-6">
        {/* Main Content Area */}
        <div className="flex-none">
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dashboardCards.map((card, index) => (
              <DashboardCard
                key={index}
                icon={card.icon}
                title={card.title}
                count={card.count}
                subtext={card.subtext}
                trend={card.trend}
              />
            ))}
          </div>
        </div>

        {/* Main Content Section with Calendar, Video, and Sidebar */}
        <div className="flex gap-4 flex-1 min-h-0">
          {/* Calendar Section */}
          <div className="w-1/4 min-w-[250px] border-2 border-gray-200 rounded-lg p-4 overflow-auto">
            <CalendarCard />
          </div>

          {/* Video Player Section */}
          <div className="flex-1 border-2 border-gray-200 rounded-lg p-4 overflow-auto">
            <VideoPlayer />
          </div>

          {/* Right Sidebar */}
          <div className="w-1/5 min-w-[200px] border-2 border-gray-200 rounded-lg p-4 flex flex-col overflow-hidden">
            {/* Progress Circle */}
            <div className="flex-none mb-6 flex justify-center">
              <ProgressBar percentage={75} title="Training Progress" />
            </div>
            
            {/* Task Cards */}
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="space-y-4">
                {taskCards.map((card, index) => (
                  <Card
                    key={index}
                    icon={card.icon}
                    count={card.count}
                    label={card.label}
                    bgColor={card.bgColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
