import React, { useContext, useState } from 'react'
import { TodoContext } from '../App'

const EditTodo = ({ todo, onClose }) => {
  const { updateTodo } = useContext(TodoContext)
  const [title, setTitle] = useState(todo.title)
  const [description, setDescription] = useState(todo.description)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      updateTodo(todo.id, {
        title,
        description
      })
      onClose()
    }
  }

  const handleCancel = () => {
    setTitle(todo.title)
    setDescription(todo.description)
    onClose()
  }

  return (
    <div className="bg-slate-800/30 border-2 border-indigo-500 rounded-xl p-4 w-full animate-fadeIn">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor={`edit-title-${todo.id}`} className="block mb-1 font-semibold text-indigo-400 text-sm">
            Task Title
          </label>
          <input
            type="text"
            id={`edit-title-${todo.id}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-slate-700 rounded-lg bg-slate-800/60 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:ring-0 focus:shadow-md focus:shadow-indigo-500/20"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor={`edit-desc-${todo.id}`} className="block mb-1 font-semibold text-indigo-400 text-sm">
            Description
          </label>
          <textarea
            id={`edit-desc-${todo.id}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="w-full px-3 py-2 border border-slate-700 rounded-lg bg-slate-800/60 text-slate-100 text-sm resize-vertical focus:outline-none focus:border-indigo-500 focus:ring-0 focus:shadow-md focus:shadow-indigo-500/20"
          ></textarea>
        </div>

        <div className="flex gap-2">
          <button 
            type="submit" 
            className="flex-1 px-3 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/30"
          >
            💾 Save
          </button>
          <button 
            type="button" 
            onClick={handleCancel} 
            className="flex-1 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-600 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300"
          >
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditTodo

