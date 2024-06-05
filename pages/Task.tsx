/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'

interface Props {}

const Task = (props: Props) => {
  return (
    <>
        <Navbar/>
        <div className="text-center text-4xl">Task</div>
    </>
  )
}

export default Task