/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'

interface Props {}

const Post = (props: Props) => {
  return (
    <>
        <Navbar/>
        <div className="text-center text-4xl">Post</div>
    </>
  )
}

export default Post