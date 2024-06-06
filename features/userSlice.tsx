/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from '../types/User.tsx'
import type { Post } from '../types/Post.tsx'
import type { Task } from '../types/Task.tsx'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getAllUsers: builder.query<User[], void>({
            query: () => '/users'
        }),
        getSingleUsers: builder.query<User, number>({
            query: (user) => `/users/${user}`
        }),
        getPostsByUsers: builder.query<Post[], number>({
            query: (user) => `/posts?userId=${user}`
        }),  
        getTodos: builder.query<Task[], number>({
            query: (page) => `/todos?_page=${page}&_limit=20`
        }),       
    }),
});

export const { useGetAllUsersQuery, useGetSingleUsersQuery, useGetPostsByUsersQuery, useGetTodosQuery} = userApi; 