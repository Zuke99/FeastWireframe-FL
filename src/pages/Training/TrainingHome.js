import React from 'react'
import { RiPlayCircleLine, RiTimeLine, RiFileList2Line, RiBarChartLine } from 'react-icons/ri'

function TrainingHome() {
  // Sample user progress data
  const userProgress = {
    completionRate: 68,
    hoursWatched: 45,
    assignmentsCompleted: 23,
    totalCourses: 5
  }

  // Sample enrolled courses
  const myCourses = [
    {
      id: 1,
      title: "Financial Analysis Fundamentals",
      instructor: "John Smith",
      progress: 75,
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      lastAccessed: "2 days ago",
      totalHours: 12.5,
      completedHours: 9.3
    },
    {
      id: 2,
      title: "Investment Portfolio Management",
      instructor: "Sarah Johnson",
      progress: 45,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      lastAccessed: "1 week ago",
      totalHours: 15,
      completedHours: 6.8
    },
    {
      id: 3,
      title: "Risk Management Essentials",
      instructor: "Mike Wilson",
      progress: 90,
      thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80",
      lastAccessed: "3 days ago",
      totalHours: 8,
      completedHours: 7.2
    }
  ]

  // Sample recommended courses
  const recommendedCourses = [
    {
      id: 4,
      title: "Advanced Market Analysis",
      instructor: "David Brown",
      rating: 4.8,
      students: 1234,
      thumbnail: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80",
      price: "$89.99"
    },
    {
      id: 5,
      title: "Derivatives Trading Basics",
      instructor: "Emma Davis",
      rating: 4.6,
      students: 856,
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80",
      price: "$94.99"
    }
  ]

  return (
    <div className="h-screen flex flex-col p-6 overflow-hidden">
      {/* Header Stats - Fixed Height */}
      <div className="flex-none">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <RiBarChartLine className="text-orange-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Completion Rate</p>
                <p className="text-xl font-bold text-gray-800">{userProgress.completionRate}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <RiTimeLine className="text-blue-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Hours Watched</p>
                <p className="text-xl font-bold text-gray-800">{userProgress.hoursWatched}h</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <RiFileList2Line className="text-green-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Assignments Done</p>
                <p className="text-xl font-bold text-gray-800">{userProgress.assignmentsCompleted}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <RiPlayCircleLine className="text-purple-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Courses</p>
                <p className="text-xl font-bold text-gray-800">{userProgress.totalCourses}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pr-2">
        {/* My Courses Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-gray-50 py-4 z-10">
            <h2 className="text-2xl font-bold text-gray-800">My Courses</h2>
            <button className="text-orange-500 hover:text-orange-600">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2">
                      <RiPlayCircleLine />
                      <span>Continue Learning</span>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{course.instructor}</p>
                  <div className="mb-2">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-orange-500 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{course.progress}% complete</span>
                    <span>{course.completedHours}/{course.totalHours}hrs</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-gray-50 py-4 z-10">
            <h2 className="text-2xl font-bold text-gray-800">Recommended Courses</h2>
            <button className="text-orange-500 hover:text-orange-600">Browse All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
                  <div className="flex items-center space-x-1 mb-2">
                    <span className="text-sm font-bold text-gray-800">{course.rating}</span>
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(course.rating))}
                    </div>
                    <span className="text-sm text-gray-500">({course.students})</span>
                  </div>
                  <p className="font-bold text-gray-800">{course.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingHome
