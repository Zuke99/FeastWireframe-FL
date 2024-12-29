import React, { useState } from 'react'
import { format, addDays, startOfWeek, isSameDay } from 'date-fns'

function CalendarHome() {
  const [currentDate] = useState(new Date())
  
  // Get current week's dates
  const today = new Date()
  const currentWeekStart = startOfWeek(today)
  
  // Updated events data with current week's dates
  const events = [
    {
      id: 1,
      title: "Call with John",
      start: "08:00",
      end: "09:00",
      date: addDays(currentWeekStart, 1), // Tuesday
      type: "call",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
      borderColor: "border-pink-200"
    },
    {
      id: 2,
      title: "Make final layout improvements",
      start: "08:30",
      end: "13:00",
      date: addDays(currentWeekStart, 2), // Wednesday
      type: "design",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      title: "Discussing the project feedback",
      start: "09:00",
      end: "10:00",
      date: addDays(currentWeekStart, 3), // Thursday
      type: "meeting",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      id: 4,
      title: "Design Onboarding",
      description: "Implement the first two steps of the onboard process",
      start: "08:30",
      end: "17:30",
      date: addDays(currentWeekStart, 4), // Friday
      type: "design",
      attendees: ["user1.jpg", "user2.jpg", "user3.jpg"],
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-200"
    }
  ]

  // Generate week days starting from current week
  const weekStart = startOfWeek(currentDate)
  const weekDays = Array.from({ length: 7 }).map((_, index) => addDays(weekStart, index))

  // Time slots from 8 AM to 5 PM
  const timeSlots = Array.from({ length: 10 }).map((_, index) => {
    const hour = index + 8
    return `${hour.toString().padStart(2, '0')}:00`
  })

  // Simplified helper function for events
  const getEventsForDay = (date) => {
    return events.filter(event => isSameDay(event.date, date))
  }

  // Updated event style calculation
  const getEventStyle = (event) => {
    const [startHour, startMinute] = event.start.split(':').map(Number)
    const [endHour, endMinute] = event.end.split(':').map(Number)

    const top = (startHour - 8) * 60 + startMinute
    const height = (endHour - startHour) * 60 + (endMinute - startMinute)

    return {
      position: 'absolute',
      top: `${top}px`,
      height: `${height}px`,
      left: '4px',
      right: '4px',
      zIndex: 10
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Calendar</h1>
          <p className="text-gray-500">Plan your schedule and meetings</p>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          + Add Event
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-lg shadow overflow-auto">
        {/* Week Header */}
        <div className="grid grid-cols-8 border-b">
          <div className="p-4 border-r"></div>
          {weekDays.map((day, index) => (
            <div 
              key={index}
              className={`p-4 text-center border-r last:border-r-0 ${
                isSameDay(day, currentDate) ? 'bg-orange-50' : ''
              }`}
            >
              <p className="text-sm text-gray-500">{format(day, 'EEE')}</p>
              <p className={`text-xl font-semibold ${
                isSameDay(day, currentDate) ? 'text-orange-500' : 'text-gray-800'
              }`}>
                {format(day, 'd')}
              </p>
            </div>
          ))}
        </div>

        {/* Time Grid */}
        <div className="grid grid-cols-8 relative min-w-[800px]">
          {/* Time Labels */}
          <div className="border-r sticky left-0 bg-white z-20">
            {timeSlots.map((time, index) => (
              <div key={index} className="h-[60px] border-b relative">
                <span className="absolute -top-3 left-2 text-sm text-gray-500">
                  {time}
                </span>
              </div>
            ))}
          </div>

          {/* Days Columns */}
          {weekDays.map((day, dayIndex) => (
            <div key={dayIndex} className="relative border-r last:border-r-0">
              {/* Time Grid Lines */}
              {timeSlots.map((_, index) => (
                <div key={index} className="h-[60px] border-b"></div>
              ))}

              {/* Events */}
              <div className="absolute inset-0">
                {getEventsForDay(day).map(event => (
                  <div
                    key={event.id}
                    style={getEventStyle(event)}
                    className={`p-2 rounded-lg ${event.bgColor} ${event.borderColor} border hover:shadow-lg transition-shadow cursor-pointer`}
                  >
                    <h3 className={`text-sm font-medium ${event.textColor} truncate`}>
                      {event.title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {event.start} - {event.end}
                    </p>
                    {event.attendees && (
                      <div className="flex -space-x-2 mt-2">
                        {event.attendees.map((attendee, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CalendarHome
