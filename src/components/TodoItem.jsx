import React, { useContext, useState } from 'react'
import { TodoContext } from '../App'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

const TodoItem = ({ todo }) => {
  const { toggleTodo, editingId, setEditingId } = useContext(TodoContext)
  const [showEdit, setShowEdit] = useState(false)

  return (
    <div className={`bg-slate-800/50 border-l-4 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1 hover:shadow-md animate-slideInUp ${todo.completed ? 'opacity-70 border-emerald-500' : 'border-indigo-500'}`}>
      {editingId === todo.id && showEdit ? (
        <EditTodo todo={todo} onClose={() => setShowEdit(false)} />
      ) : (
        <>
          <div className="flex gap-3 items-start flex-1 w-full sm:w-auto">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-5 h-5 mt-1 cursor-pointer accent-emerald-500 rounded"
            />
            <div className="flex-1">
              <h4 className={`font-semibold text-base ${todo.completed ? 'line-through text-slate-400' : 'text-slate-100'}`}>
                {todo.title}
              </h4>
              {todo.description && (
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">{todo.description}</p>
              )}
              <span className="text-slate-500 text-xs inline-block mt-2">📅 {todo.createdAt}</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap justify-start sm:justify-end w-full sm:w-auto">
            <button
              className="px-3 py-1.5 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-600 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap"
              onClick={() => {
                setEditingId(todo.id)
                setShowEdit(true)
              }}
              title="Edit this task"
            >
              ✏️ Edit
            </button>
            <DeleteTodo todoId={todo.id} />
          </div>
        </>
      )}
    </div>
  )
}

export default TodoItem
