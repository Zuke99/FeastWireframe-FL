import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import DashboardHome from './pages/Dashboard/DashboardHome';
import Sidebar from './components/Sidebar';
import TaskmanagementHome from './pages/TaskManagement/TaskmanagementHome';
import CalendarHome from './pages/Calendar/CalendarHome';
import Chat from './pages/Chat/Chat';
import TrainingHome from './pages/Training/TrainingHome';
import ProfileHome from './pages/Profile/ProfileHome';
import Prospects from './pages/Prospects/Prospects';
import MembershipHome from './pages/Membership/MembershipHome';

function App() {
  const [currentRole, setCurrentRole] = useState('trainee') // Default role
  const location = useLocation()

  const roles = [
    { id: 'trainee', label: 'Trainee' },
    { id: 'trainer', label: 'Trainer' },
    { id: 'ed', label: 'ED' }
  ]

  // Check if current route is login
  const isLoginPage = location.pathname === '/'

  return (
    <div className="App">
      {!isLoginPage ? (
        // Show sidebar and role switcher for all pages except login
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            {/* Role Switcher */}
            <div className="bg-white border-b p-4 sticky top-0 z-50">
              <div className="max-w-xs mx-auto">
                <div className="flex bg-gray-100 p-1 rounded-lg">
                  {roles.map(role => (
                    <button
                      key={role.id}
                      onClick={() => setCurrentRole(role.id)}
                      className={`
                        flex-1 px-4 py-2 text-sm font-medium rounded-md
                        transition-colors duration-200
                        ${currentRole === role.id 
                          ? 'bg-orange-400 text-white' 
                          : 'text-gray-500 hover:text-gray-700'
                        }
                      `}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Conditional Rendering based on Role */}
            {currentRole === 'trainee' ? (
              <Routes>
                <Route path='/dashboard' element={<DashboardHome />} />
                <Route path='/tasks' element={<TaskmanagementHome />} />
                <Route path='/calendar' element={<CalendarHome />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/training' element={<TrainingHome />} />
                <Route path='/profile' element={<ProfileHome />} />
                <Route path='/prospects' element={<Prospects />} />
                <Route path='/membership' element={<MembershipHome />} />
              </Routes>
            ) : currentRole === 'trainer' ? (
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">Trainer Dashboard</h1>
                <p className="text-gray-500">Trainer view coming soon...</p>
              </div>
            ) : (
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">ED Dashboard</h1>
                <p className="text-gray-500">ED view coming soon...</p>
              </div>
            )}
          </main>
        </div>
      ) : (
        // Show only login page without sidebar and role switcher
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
