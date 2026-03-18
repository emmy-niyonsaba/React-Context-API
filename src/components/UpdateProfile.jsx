import React, { useContext } from 'react'
import { AppContext } from '../App'

const UpdateProfile = () => {
  const { setUser, user } = useContext(AppContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const [name, age, gendar] = e.target.elements
    setUser({
      ...user,
      name: name.value || 'No name provided',
      age: Number(age.value) || 0,
      gendar: gendar.value
    })
    e.target.reset()
  }

  return (
    <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-slate-700 rounded-2xl p-10 backdrop-blur-md shadow-glass hover:shadow-glass-lg hover:-translate-y-1 transition-all duration-300 animate-slideInRight">
      <div className="border-b border-slate-700 pb-5 mb-8 text-center">
        <h2 className="text-2xl font-bold text-cyan-400 mb-2">✏️ Update Profile</h2>
        <p className="text-slate-400 text-sm">Update your profile information below</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="animate-fadeInUp animation-delay-100">
          <label htmlFor="name" className="block mb-2 font-semibold text-slate-100 text-sm">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border-2 border-slate-700 rounded-xl bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-slate-800/80 focus:ring-0 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400 hover:bg-slate-800/70 transition-all duration-300"
            required
          />
        </div>

        <div className="animate-fadeInUp animation-delay-200">
          <label htmlFor="age" className="block mb-2 font-semibold text-slate-100 text-sm">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            min="0"
            max="150"
            className="w-full px-4 py-3 border-2 border-slate-700 rounded-xl bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-slate-800/80 focus:ring-0 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400 hover:bg-slate-800/70 transition-all duration-300"
            required
          />
        </div>

        <div className="animate-fadeInUp animation-delay-300">
          <label htmlFor="gendar" className="block mb-2 font-semibold text-slate-100 text-sm">Gender</label>
          <select 
            name="gendar" 
            id="gendar" 
            className="w-full px-4 py-3 border-2 border-slate-700 rounded-xl bg-slate-800/50 text-slate-100 cursor-pointer focus:outline-none focus:border-indigo-500 focus:bg-slate-800/80 focus:ring-0 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400 hover:bg-slate-800/70 transition-all duration-300 appearance-none bg-no-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23818cf8' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 12px center',
              paddingRight: '40px'
            }}
            required
          >
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white border border-indigo-500 rounded-xl font-semibold uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 active:translate-y-0 active:shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          💾 Update Profile
        </button>
      </form>
    </div>
  )
}

export default UpdateProfile
