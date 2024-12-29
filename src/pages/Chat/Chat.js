import React, { useState } from 'react'
import { RiSearchLine, RiSendPlaneFill, RiAttachment2, RiImage2Line, RiMicLine, RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri'

function Chat() {
  const [selectedChat, setSelectedChat] = useState(null)

  // Sample conversations data
  const conversations = [
    {
      id: 1,
      title: "ED Joe",
      lastMessage: "Could you explain more about the investment portfolio diversification?",
      time: "3m ago",
      unread: 2,
      type: "question"
    },
    {
      id: 2,
      title: "Trainer John",
      lastMessage: "Let's review your financial analysis report from last week...",
      time: "3m ago",
      unread: 0,
      type: "consultation"
    },
    {
      id: 3,
      title: "SFA Travis",
      lastMessage: "The market volatility metrics show interesting patterns...",
      time: "3m ago",
      unread: 2,
      type: "question"
    }
  ]

  // Sample chat messages for selected conversation
  const chatMessages = [
    {
      id: 1,
      text: "Hi John, I've completed the financial modeling exercise. Can you check if my DCF analysis looks correct?",
      sender: "user",
      time: "12:22 PM"
    },
    {
      id: 2,
      text: "Great work on the DCF model! Your cash flow projections look solid. Let's review the discount rate assumptions in our next session.",
      sender: "bot",
      time: "12:23 PM",
      chart: true
    }
  ]

  return (
    <div className="h-screen flex">
      {/* Left Sidebar - Conversations List */}
      <div className="w-80 border-r bg-white">
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">All Conversations</h1>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Conversations List */}
          <div className="space-y-2">
            {conversations.map(chat => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`p-3 rounded-lg cursor-pointer hover:bg-gray-50 
                  ${selectedChat?.id === chat.id ? 'bg-orange-50' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-gray-800 truncate">{chat.title}</h3>
                      <span className="text-xs text-gray-500 ml-2">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="ml-3 flex-shrink-0">
                      <span className="inline-block bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {chat.unread}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white border-b flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-gray-800">Trainer John</h2>
                <p className="text-sm text-gray-500">5 mins ago</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <RiSearchLine className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <RiImage2Line className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {chatMessages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-4 
                        ${message.sender === 'user' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-white text-gray-800'}`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.chart && (
                        <div className="mt-3 bg-white rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="text-sm font-medium text-gray-800">Freud Score Analytics</h4>
                            <span className="text-xs text-gray-500">Last 6 months</span>
                          </div>
                          
                          {/* Analytics Grid */}
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-center space-x-1">
                                <span className="text-lg font-bold text-gray-800">88</span>
                                <RiArrowUpLine className="text-green-500" />
                                <span className="text-xs text-green-500">+255%</span>
                              </div>
                              <p className="text-xs text-gray-500">Current Score</p>
                            </div>
                            
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-center space-x-1">
                                <span className="text-lg font-bold text-gray-800">25</span>
                                <span className="text-xs text-gray-500">pts</span>
                              </div>
                              <p className="text-xs text-gray-500">Base Score</p>
                            </div>
                            
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-center space-x-1">
                                <span className="text-lg font-bold text-gray-800">63</span>
                                <RiArrowUpLine className="text-green-500" />
                              </div>
                              <p className="text-xs text-gray-500">Points Gained</p>
                            </div>
                          </div>

                          {/* Score Progress */}
                          <div className="mb-4">
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                              <span>Progress</span>
                              <span>88%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full">
                              <div 
                                className="h-full bg-orange-400 rounded-full transition-all duration-500"
                                style={{ width: '88%' }}
                              ></div>
                            </div>
                          </div>

                          {/* Timeline Labels */}
                          <div className="flex justify-between mt-2 text-xs text-gray-500">
                            <span>Aug</span>
                            <span>Sep</span>
                            <span>Oct</span>
                            <span>Nov</span>
                            <span>Dec</span>
                            <span>Jan</span>
                          </div>

                          {/* Key Insights */}
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <h5 className="text-xs font-medium text-gray-700 mb-2">Key Insights</h5>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                <span className="text-gray-600">Significant improvement in analytical skills</span>
                              </div>
                              <div className="flex items-center space-x-2 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                <span className="text-gray-600">Consistent learning pattern detected</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <RiAttachment2 className="text-gray-600" />
                </button>
                <input
                  type="text"
                  placeholder="Send your message to Dr. Freud AI..."
                  className="flex-1 p-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <RiMicLine className="text-gray-600" />
                </button>
                <button className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
                  <RiSendPlaneFill />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  )
}

export default Chat
