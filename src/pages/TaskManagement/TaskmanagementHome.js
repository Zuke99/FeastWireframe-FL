import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { 
  RiAddLine, 
  RiMoreLine,
  RiCheckLine,
  RiTimeLine,
  RiAlertLine
} from 'react-icons/ri'

function TaskmanagementHome() {
  // Sample data structure for activities and their tasks
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "Financial Analysis Training",
      description: "Complete basic financial analysis training modules",
      tasks: [
        {
          id: 101,
          title: "Watch Introduction to Financial Statements",
          status: "todo",
          priority: "high",
          dueDate: "2024-01-25",
          type: "training",
          assignedBy: {
            name: "John Smith",
            role: "Financial Trainer",
            avatar: "https://ui-avatars.com/api/?name=John+Smith&background=0D8ABC&color=fff"
          }
        },
        {
          id: 102,
          title: "Complete Ratio Analysis Exercise",
          status: "in-progress",
          priority: "medium",
          dueDate: "2024-01-26",
          type: "exercise"
        },
        {
          id: 103,
          title: "Submit Financial Analysis Report",
          status: "completed",
          priority: "high",
          dueDate: "2024-01-27",
          type: "submission"
        }
      ]
    },
    {
      id: 2,
      title: "Market Research Project",
      description: "Research and analyze market trends",
      tasks: [
        {
          id: 201,
          title: "Collect Market Data",
          status: "todo",
          priority: "medium",
          dueDate: "2024-01-28",
          type: "research"
        },
        {
          id: 202,
          title: "Analyze Competitor Strategies",
          status: "in-progress",
          priority: "high",
          dueDate: "2024-01-29",
          type: "analysis"
        }
      ]
    }
  ])

  // Function to get tasks by status
  const getTasksByStatus = (status) => {
    return activities.flatMap(activity => 
      activity.tasks
        .filter(task => task.status === status)
        .map(task => ({ ...task, activityTitle: activity.title }))
    )
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    // If there's no destination or if the item was dropped in its original position
    if (!destination || 
        (destination.droppableId === source.droppableId && 
         destination.index === source.index)) {
      return
    }

    // Find the task that was dragged
    let draggedTask = null
    let sourceActivityIndex = -1
    let sourceTaskIndex = -1

    activities.forEach((activity, actIndex) => {
      activity.tasks.forEach((task, taskIndex) => {
        if (task.id.toString() === draggableId) {
          draggedTask = { ...task }
          sourceActivityIndex = actIndex
          sourceTaskIndex = taskIndex
        }
      })
    })

    if (!draggedTask) return

    // Create new activities array
    const newActivities = [...activities]

    // Remove task from source
    newActivities[sourceActivityIndex].tasks.splice(sourceTaskIndex, 1)

    // Update task status based on destination column
    draggedTask.status = destination.droppableId

    // Find appropriate activity to add task to (keeping same activity)
    newActivities[sourceActivityIndex].tasks.push(draggedTask)

    // Update state
    setActivities(newActivities)
  }

  const TaskCard = ({ task, index }) => (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white p-4 rounded-lg shadow-sm border border-gray-200 
            ${snapshot.isDragging ? 'shadow-lg' : 'hover:shadow-md'} 
            transition-shadow`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">{task.activityTitle}</p>
              <h3 className="text-sm font-medium text-gray-800">{task.title}</h3>
              <div className="mt-2 flex items-center space-x-2">
                <span className={`
                  px-2 py-1 rounded-full text-xs
                  ${task.priority === 'high' ? 'bg-red-100 text-red-600' : 
                    task.priority === 'medium' ? 'bg-orange-100 text-orange-600' : 
                    'bg-green-100 text-green-600'}
                `}>
                  {task.priority}
                </span>
                <span className="text-xs text-gray-500">{task.dueDate}</span>
              </div>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded">
              <RiMoreLine className="text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  )

  const Column = ({ title, status, icon: Icon, bgColor }) => (
    <div className="flex-1 min-w-[300px] bg-gray-50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon className={`${bgColor} text-lg`} />
          <h2 className="font-medium text-gray-700">{title}</h2>
          <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs">
            {getTasksByStatus(status).length}
          </span>
        </div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <RiAddLine className="text-gray-600" />
        </button>
      </div>

      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`space-y-3 min-h-[200px] transition-colors
              ${snapshot.isDraggingOver ? 'bg-gray-100' : ''}`}
          >
            {getTasksByStatus(status).map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )

  return (
    <div className="p-6 h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Task Board</h1>
          <p className="text-gray-500">Manage your tasks and activities</p>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center space-x-2">
          <RiAddLine />
          <span>New Task</span>
        </button>
      </div>

      {/* Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-6 h-full min-w-min">
            <Column 
              title="To Do" 
              status="todo" 
              icon={RiTimeLine}
              bgColor="text-blue-500"
            />
            <Column 
              title="In Progress" 
              status="in-progress" 
              icon={RiAlertLine}
              bgColor="text-orange-500"
            />
            <Column 
              title="Completed" 
              status="completed" 
              icon={RiCheckLine}
              bgColor="text-green-500"
            />
          </div>
        </div>
      </DragDropContext>
    </div>
  )
}

export default TaskmanagementHome
