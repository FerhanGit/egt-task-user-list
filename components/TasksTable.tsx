/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Pagination from './Pagination'
import { Task as TaskType } from '../types/Task.tsx';
import { useUpdateTodoMutation } from '../features/userSlice.tsx';

type Props = {
    taskData: TaskType[]
}

const TasksTable = (props: Props) => {

    const data = props.taskData;
    const [updateTodo, { isLoading, isSuccess }] = useUpdateTodoMutation()

    const onTodoStatusChangeClicked = async (task:TaskType) => {
        if (task) {
            const updatedTodo = {...task, completed: !task.completed}
          await updateTodo(updatedTodo)
          //history.push(`/tasks/${postId}`)
        }
      }
  
  return (
    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="pb-4 bg-white dark:bg-gray-900">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            Completed
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Task id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data.map((todo:TaskType) => <tr key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" checked={todo.completed} onChange={() => onTodoStatusChangeClicked(todo)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {todo.id}
                        </th>
                        <td className="px-6 py-4">
                        {todo.userId}
                        </td>
                        <td className="px-6 py-4">
                        {todo.title}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        <Pagination />
    </div>
  )
}

export default TasksTable