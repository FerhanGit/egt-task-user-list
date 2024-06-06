/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetTodosQuery } from '../features/userSlice.tsx'
import { Task as TaskType } from '../types/Task.tsx';
import TasksTable from '../components/TasksTable.tsx'

interface Props {}

const Tasks = (props: Props) => {

    const [page, setPage] = useState(1);

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