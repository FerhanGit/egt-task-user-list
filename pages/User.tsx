/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'

interface Props {}

const User = (props: Props) => {
  return (
    <>
        <Navbar/>
        <div className="text-center">User</div>
    </>
  )
}

export default User