/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetAllUsersQuery } from '../slice/apiSlice.tsx'
import { User as UserType } from '../types/User.tsx'
import SingleUser from '../components/User'
import { Collapse } from 'antd';

const Users = () => {

    const { data, isLoading, isSuccess, isError, error} = useGetAllUsersQuery();
   
    let content;
    if (isLoading) {
        content =  <p>Loading...</p>;
    } else if (isSuccess) {
        if (data) {
            const items = data.map((user:UserType) => {
                return {
                  key: user.id,
                  label: user.name,
                  children: <SingleUser key={user.id} userData={user} />,
                }
            });

            content = <Collapse items={items} accordion defaultActiveKey={['1']} />;
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