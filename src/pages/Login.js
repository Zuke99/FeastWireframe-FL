import React from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2A3B3F] via-[#415C61] to-[#628A8C]">
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Logo section with text */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-white/80 rounded transform rotate-45"></div>
          </div>
          <h1 className="text-white text-3xl font-semibold tracking-wide">Feast Login</h1>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-200 text-sm">EMAIL</label>
            <input 
              type="email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="person@feast.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-200 text-sm">PASSWORD</label>
            <div className="relative">
              <input 
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="••••••••"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>

        {/* Sign up link */}
        <div className="text-center">
          <span className="text-gray-400 text-sm">Not a member? </span>
          <a href="#" className="text-white text-sm hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Login
