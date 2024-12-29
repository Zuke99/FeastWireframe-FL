import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  RiDashboardLine, 
  RiTaskLine, 
  RiCalendarLine, 
  RiChat1Line,
  RiUserSearchLine,
  RiBookOpenLine,
  RiUserLine
} from 'react-icons/ri'

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', icon: RiDashboardLine, path: '/dashboard' },
    { title: 'Task Management', icon: RiTaskLine, path: '/tasks' },
    { title: 'Calendar', icon: RiCalendarLine, path: '/calendar' },
    { title: 'Chat', icon: RiChat1Line, path: '/chat' },
    { title: 'Prospects', icon: RiUserSearchLine, path: '/prospects' },
    { title: 'Training', icon: RiBookOpenLine, path: '/training' },
    { title: 'Profile', icon: RiUserLine, path: '/profile' },
    { title: 'Membership', icon: RiUserLine, path: '/membership' },
  ]

  return (
    <div className="h-screen w-64 bg-[#628A8C] text-white flex flex-col">
      {/* Logo Section */}
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white/80 rounded transform rotate-45"></div>
          </div>
          <span className="text-xl font-semibold">Feast</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  <item.icon className="text-xl" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center space-x-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
              alt="John Doe"
              className="w-full h-full object-cover bg-white/10"
            />
          </div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-white/70">Trainee</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
