import React, { useContext, useState } from 'react'
import { TodoContext } from '../App'

const DeleteTodo = ({ todoId }) => {
  const { deleteTodo } = useContext(TodoContext)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleDelete = () => {
    deleteTodo(todoId)
    setShowConfirm(false)
  }

  if (showConfirm) {
    return (
      <div className="bg-red-500/10 border border-red-600 rounded-lg px-3 py-2 flex items-center gap-2 animate-fadeIn flex-wrap justify-between">
        <span className="text-red-400 font-semibold text-sm">Sure?</span>
        <div className="flex gap-1">
          <button 
            className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button 
            className="px-2 py-1 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded text-xs font-semibold cursor-pointer transition-all duration-300"
            onClick={() => setShowConfirm(false)}
          >
            No
          </button>
        </div>
      </div>
    )
  }

  return (
    <button
      className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-600 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap"
      onClick={() => setShowConfirm(true)}
      title="Delete this task"
    >
      🗑️ Delete
    </button>
  )
}

export default DeleteTodo
