import React, { useContext, useState } from 'react'
import { TodoContext } from '../App'

const CreateTodo = () => {
  const { addTodo } = useContext(TodoContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      addTodo(title, description)
      setTitle('')
      setDescription('')
    }
  }

  return (
    <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-slate-700 rounded-2xl p-10 backdrop-blur-md shadow-glass hover:shadow-glass-lg hover:-translate-y-1 transition-all duration-300 animate-slideInLeft">
      <div className="border-b border-slate-700 pb-5 mb-8 text-center">
        <h3 className="text-2xl font-bold text-emerald-400 mb-2">➕ Create New Task</h3>
        <p className="text-slate-400 text-sm">Add a new item to your todo list</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="animate-fadeInUp animation-delay-100">
          <label htmlFor="todo-title" className="block mb-2 font-semibold text-slate-100 text-sm">
            Task Title <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="todo-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full px-4 py-3 border-2 border-slate-700 rounded-xl bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-slate-800/80 focus:ring-0 focus:shadow-lg focus:shadow-emerald-500/20 hover:border-emerald-400 hover:bg-slate-800/70 transition-all duration-300"
            required
          />
        </div>

        <div className="animate-fadeInUp animation-delay-200">
          <label htmlFor="todo-description" className="block mb-2 font-semibold text-slate-100 text-sm">
            Description
          </label>
          <textarea
            id="todo-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            rows="4"
            className="w-full px-4 py-3 border-2 border-slate-700 rounded-xl bg-slate-800/50 text-slate-100 placeholder-slate-500 resize-vertical focus:outline-none focus:border-emerald-500 focus:bg-slate-800/80 focus:ring-0 focus:shadow-lg focus:shadow-emerald-500/20 hover:border-emerald-400 hover:bg-slate-800/70 transition-all duration-300"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white border border-emerald-500 rounded-xl font-semibold uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/40 active:translate-y-0 active:shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none animate-fadeInUp animation-delay-300"
        >
          ✅ Add Task
        </button>
      </form>
    </div>
  )
}

export default CreateTodo
