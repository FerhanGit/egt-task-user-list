/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetAllUsersQuery, userApi } from '../features/userSlice.tsx'

interface Props {}

const User = (props: Props) => {

    const { data, isLoading, isSuccess, isError, error } = useGetAllUsersQuery();
    
    console.log(data);


    let content;
    if (isLoading) {
        content =  <p>Loading...</p>;
    } else if (isSuccess) {
        content = data.map((user:any) => <div key={user.id} className="text-center text-4xl">{user.name}</div>)
    } else if (isError) {
        content = <p>Error!</p>;
    }

  return (
    <>
        <Navbar/>
        {content}
    </>
  )
}

export default User