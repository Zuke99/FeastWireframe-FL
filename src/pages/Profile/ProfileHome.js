import React from 'react'
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiCalendarLine, RiUserLine } from 'react-icons/ri'

function ProfileHome() {
  // Sample user data
  const user = {
    name: "John Smith",
    role: "Financial Analyst Trainee",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    gender: "Male",
    dateJoined: "January 2024",
    photo: "https://ui-avatars.com/api/?name=John+Smith&size=200&background=628A8C&color=fff"
  }

  const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
      <div className="p-2 bg-[#628A8C]/10 rounded-lg">
        <Icon className="text-[#628A8C] text-xl" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-800 font-medium">{value}</p>
      </div>
    </div>
  )

  return (
    <div className="h-screen p-6 overflow-auto bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
          <p className="text-gray-500">Manage your personal information</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Profile Header */}
          <div className="p-6 bg-gradient-to-r from-[#628A8C] to-[#82A7A9] text-white">
            <div className="flex items-center space-x-6">
              {/* Profile Photo */}
              <div className="relative">
                <img 
                  src={user.photo}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
                <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-lg">
                  <RiUserLine className="text-[#628A8C]" />
                </button>
              </div>
              
              {/* Basic Info */}
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-white/80">{user.role}</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem 
                icon={RiMailLine}
                label="Email Address"
                value={user.email}
              />
              <InfoItem 
                icon={RiPhoneLine}
                label="Phone Number"
                value={user.phone}
              />
              <InfoItem 
                icon={RiMapPinLine}
                label="Location"
                value={user.location}
              />
              <InfoItem 
                icon={RiUserLine}
                label="Gender"
                value={user.gender}
              />
              <InfoItem 
                icon={RiCalendarLine}
                label="Joined"
                value={user.dateJoined}
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex space-x-3">
              <button className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors">
                Edit Profile
              </button>
              <button className="px-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-50 transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHome
