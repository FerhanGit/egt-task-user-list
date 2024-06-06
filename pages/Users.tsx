/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetAllUsersQuery } from '../features/userSlice.tsx'
import { User as UserType } from '../types/User.tsx'
import SingleUser from '../components/User'

interface Props {}

const Users = (props: Props) => {

    const { data, isLoading, isSuccess, isError, error} = useGetAllUsersQuery();
   
    let content;
    if (isLoading) {
        content =  <p>Loading...</p>;
    } else if (isSuccess) {
        if (data) {
            content = <div id="accordion-collapse" data-accordion="collapse">{data.map((user:UserType) =><SingleUser key={user.id} userData={user} />)}</div>
        } else {
            content = <div className="text-center text-4xl">No Data available</div>
        }

    } else if (isError) {
        content = `<p>${error}</p>`;
    }

  return (
    <>
        <Navbar/>
        {content}
    </>
  )
}

export default Users