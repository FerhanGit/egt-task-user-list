/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { User as UserType} from '../types/User'
import { Link } from 'react-router-dom'

interface Props {
    userData: UserType
}

const User = (props: Props) => {

  return (
    <>
        <div className="m-2 p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Name: {props.userData.name}</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Email: {props.userData.email}</p>
            <Link to={`/post/user/${props.userData.id}`} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See Posts</Link>     
        </div>
    </>
  )
}

export default User