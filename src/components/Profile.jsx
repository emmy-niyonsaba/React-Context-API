import React, { useContext } from 'react'
import { AppContext } from '../App'

const Profile = () => {
  const { user } = useContext(AppContext)

  return (
    <div className="bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-slate-700 rounded-2xl p-10 backdrop-blur-md shadow-glass hover:shadow-glass-lg hover:-translate-y-1 transition-all duration-300 animate-slideInLeft">
      <div className="border-b border-slate-700 pb-5 mb-8 text-center">
        <h2 className="text-2xl font-bold text-indigo-400 mb-2">📋 Your Profile</h2>
        <p className="text-slate-400 text-sm">View your current profile information</p>
      </div>
      <div className="space-y-5">
        <div className="flex items-center px-4 py-4 bg-slate-800/50 rounded-2xl border-l-4 border-indigo-500 hover:bg-slate-800/80 hover:translate-x-1 transition-all duration-300">
          <span className="font-semibold text-indigo-300 min-w-[80px] mr-4">Name:</span>
          <span className={`text-lg font-medium ${user.name === 'Please set your name' ? 'text-slate-400 italic' : 'text-slate-100'}`}>
            {user.name}
          </span>
        </div>
        <div className="flex items-center px-4 py-4 bg-slate-800/50 rounded-2xl border-l-4 border-indigo-500 hover:bg-slate-800/80 hover:translate-x-1 transition-all duration-300">
          <span className="font-semibold text-indigo-300 min-w-[80px] mr-4">Age:</span>
          <span className={`text-lg font-medium ${user.age === 0 ? 'text-slate-400 italic' : 'text-slate-100'}`}>
            {user.age === 0 ? 'Not set' : user.age}
          </span>
        </div>
        <div className="flex items-center px-4 py-4 bg-slate-800/50 rounded-2xl border-l-4 border-indigo-500 hover:bg-slate-800/80 hover:translate-x-1 transition-all duration-300">
          <span className="font-semibold text-indigo-300 min-w-[80px] mr-4">Gender:</span>
          <span className={`text-lg font-medium ${user.gendar === 'Not set' ? 'text-slate-400 italic' : 'text-slate-100'}`}>
            {user.gendar}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Profile
