import React, { useState } from 'react'
import { RiUserAddLine, RiFilter3Line, RiSearchLine, RiMoreLine, RiPhoneLine, RiMailLine, RiCalendarLine } from 'react-icons/ri'

function Prospects() {
  const [filterStatus, setFilterStatus] = useState('all')

  // Sample prospects data
  const prospects = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah.chen@example.com",
      phone: "+1 (555) 234-5678",
      status: "hot",
      investmentRange: "$100k - $250k",
      interests: ["Mutual Funds", "ETFs"],
      lastContact: "2024-01-20",
      nextFollowUp: "2024-01-25",
      notes: "Interested in sustainable investment options"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      email: "m.rodriguez@example.com",
      phone: "+1 (555) 876-5432",
      status: "warm",
      investmentRange: "$250k - $500k",
      interests: ["Stock Trading", "Options"],
      lastContact: "2024-01-18",
      nextFollowUp: "2024-01-26",
      notes: "Looking for aggressive growth strategies"
    },
    {
      id: 3,
      name: "Emma Thompson",
      email: "emma.t@example.com",
      phone: "+1 (555) 345-6789",
      status: "cold",
      investmentRange: "$50k - $100k",
      interests: ["Retirement Planning"],
      lastContact: "2024-01-15",
      nextFollowUp: "2024-01-28",
      notes: "Needs retirement portfolio review"
    }
  ]

  const statusColors = {
    hot: "bg-red-100 text-red-600",
    warm: "bg-orange-100 text-orange-600",
    cold: "bg-blue-100 text-blue-600"
  }

  return (
    <div className="p-6 h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Financial Prospects</h1>
          <p className="text-gray-500">Track and manage potential clients</p>
        </div>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 flex items-center space-x-2">
          <RiUserAddLine />
          <span>Add Prospect</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search prospects..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="flex items-center space-x-2">
            <RiFilter3Line className="text-gray-400" />
            <select 
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Prospects</option>
              <option value="hot">Hot Leads</option>
              <option value="warm">Warm Leads</option>
              <option value="cold">Cold Leads</option>
            </select>
          </div>
        </div>
      </div>

      {/* Prospects Table */}
      <div className="bg-white rounded-lg shadow-sm flex-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Contact</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Investment Range</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Interests</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Next Follow-up</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {prospects.map(prospect => (
                <tr key={prospect.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-medium text-gray-800">{prospect.name}</div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <RiMailLine className="mr-2" />
                        {prospect.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <RiPhoneLine className="mr-2" />
                        {prospect.phone}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm text-gray-600">{prospect.investmentRange}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {prospect.interests.map((interest, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${statusColors[prospect.status]}`}>
                      {prospect.status.charAt(0).toUpperCase() + prospect.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <RiCalendarLine className="mr-2" />
                      {prospect.nextFollowUp}
                    </div>
                  </td>
                  <td className="p-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <RiMoreLine className="text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Prospects
