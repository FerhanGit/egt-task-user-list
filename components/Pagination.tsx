/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '../app/store'
import { increment, decrement } from '../features/pageSlice'

type Props = {}

const Pagination = (props: Props) => {

  const page = useSelector((state: RootState) => state.page.value);
  const dispatch = useDispatch();
  
  console.log(page);
  return (
    <div>
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm my-5">
        <li>
          <button onClick={() => dispatch(decrement())} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
        </li>
        <li>
          <button onClick={() => dispatch(increment())} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Pagination