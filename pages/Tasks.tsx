/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetTodosQuery } from '../slice/apiSlice.tsx'
import TasksTable from '../components/TasksTable.tsx'
import { useSelector } from "react-redux"
import { RootState } from '../app/store'

const Tasks = () => {

    const page = useSelector((state: RootState) => state.page.value);

    const { data, isLoading, isSuccess, isError, error} = useGetTodosQuery(page);
    
    let content;
    if (isLoading) {
        content =  <p>Loading...</p>;
    } else if (isSuccess && data) {
        content = <TasksTable taskData={data} />
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

export default Tasks