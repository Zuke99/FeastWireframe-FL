import React, { useState } from 'react'
import format from 'date-fns/format'
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import isToday from 'date-fns/isToday'

function CalendarCard() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [hoveredDate, setHoveredDate] = useState(null)

  // Sample events data
  const events = {
    '2024-01-21': { title: 'Team Meeting' },
    '2024-01-22': { title: 'Project Deadline' },
    '2024-01-23': { title: 'Training Session' },
    '2024-01-24': { title: 'Client Call' },
    '2024-01-25': { title: 'Review' },
    '2024-01-26': { title: 'Presentation' }
  }

  // Add upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Meeting @6pm with trainer",
      date: "Today, 6:00 PM",
      type: "meeting"
    },
    {
      id: 2,
      title: "Training Session: React Basics",
      date: "Tomorrow, 2:00 PM",
      type: "training"
    },
    {
      id: 3,
      title: "Progress Review Call",
      date: "Jan 25, 11:00 AM",
      type: "call"
    }
  ]

  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Add padding days for the start of the month
  const startDay = monthStart.getDay()
  const paddingDays = Array(startDay).fill(null)

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white rounded-xl p-6 flex-1 w-full">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={previousMonth} className="p-2 hover:bg-orange-100 rounded-lg text-orange-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {format(currentDate, 'MMMM yyyy')}
          </h2>
          <button onClick={nextMonth} className="p-2 hover:bg-orange-100 rounded-lg text-orange-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Weekday headers */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-orange-400 py-2">
              {day}
            </div>
          ))}

          {/* Padding days */}
          {paddingDays.map((_, index) => (
            <div key={`padding-${index}`} className="h-10" />
          ))}

          {/* Calendar days */}
          {daysInMonth.map(day => {
            const dateStr = format(day, 'yyyy-MM-dd')
            const hasEvent = events[dateStr]
            const isCurrentDay = isToday(day)

            return (
              <div
                key={dateStr}
                className="relative h-10 flex items-center justify-center"
                onMouseEnter={() => hasEvent && setHoveredDate(dateStr)}
                onMouseLeave={() => setHoveredDate(null)}
              >
                <div
                  className={`
                    w-8 h-8 flex items-center justify-center rounded-full
                    ${isCurrentDay ? 'bg-orange-400 text-white' : ''}
                    ${hasEvent ? 'border-2 border-orange-400 text-gray-700' : 'text-gray-600'}
                    hover:bg-orange-100 cursor-pointer transition-colors
                  `}
                >
                  {format(day, 'd')}
                </div>

                {/* Event Tooltip */}
                {hoveredDate === dateStr && hasEvent && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                    <div className="bg-white px-3 py-1 rounded-lg shadow-lg border border-orange-200">
                      <p className="text-sm text-gray-700 whitespace-nowrap">
                        {events[dateStr].title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mt-6 bg-white rounded-xl p-6 w-full">
        <h3 className="text-lg font-semibold text-orange-400 mb-4 text-left">Upcoming Events</h3>
        <div className="space-y-3">
          {upcomingEvents.map(event => (
            <div 
              key={event.id}
              className="flex items-start space-x-3 p-2 hover:bg-orange-50 rounded-lg transition-colors border border-orange-200"
            >
              {/* Event Icon */}
              <div className="p-2 bg-orange-100 rounded-lg shrink-0">
                <svg 
                  className="w-4 h-4 text-orange-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>

              {/* Event Details */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-800 text-left truncate">
                  {event.title}
                </h4>
                <p className="text-xs text-orange-400 mt-0.5 text-left">
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CalendarCard
