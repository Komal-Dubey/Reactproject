import React from 'react'
import useTodoStore from '../../store/todoStore';
import { Pencil, Trash } from 'lucide-react';

const TodoTable = ({handleEdit}) => { // here we get onedit and in prameter we can pass one argument
    const getAllTodos = useTodoStore((state) => state.todoItems);

    return (
        <div className="p-4">
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='text-start'>#</th>
                        <th className='text-start'>Todo</th>
                        <th className='text-start'>Priority</th>
                        <th className='text-start'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {getAllTodos.map((todo, i) => (
                        <tr key={todo.id} className=''>
                            <td>
                                <input
                                    type="checkbox"
                                />
                            </td>
                            <td>
                                <h2 className="text-lg font-semibold">{todo.text}</h2>
                            </td>
                            <td>
                               {todo.priority}
                            </td>
                            <td>
                                 <button onClick={() => handleEdit(todo)}><Pencil /></button>
                                 <button><Trash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default TodoTable