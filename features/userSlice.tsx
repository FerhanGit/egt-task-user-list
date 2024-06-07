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
        updateUser: builder.mutation<User, Partial<User>>({
            query(data) {
               
              const { id, ...body } = data;
              return {
                url: `users/${id}`,
                method: 'PUT',
                body,
              }
            },
        }),
        getAllPosts: builder.query<Post[], void>({
            query: () => `/posts`
        }),  
        getPostsByUsers: builder.query<Post[], number>({
            query: (user) => `/posts?userId=${user}`
        }),  
        getTodos: builder.query<Task[], number>({
            query: (page) => `/todos?_page=${page}&_limit=10`
        }),    
        deletePost: builder.mutation<{ success: boolean; id: number }, number>({
            query(id) {
              return {
                url: `posts/${id}`,
                method: 'DELETE',
              }
            },
        }),   
        updatePost: builder.mutation<Post, Partial<Post>>({
            query(data) {
               
              const { id, ...body } = data;
              return {
                url: `posts/${id}`,
                method: 'PUT',
                body,
              }
            },
        }),
        updateTodo: builder.mutation<Task, Partial<Task>>({
        query(data) {
            const { id, ...body } = data;
            return {
                url: `todos/${id}`,
                method: 'PUT',
                body,
            }
        },
        }),
    }),
});

export const { 
    useGetAllUsersQuery, 
    useGetSingleUsersQuery, 
    useGetAllPostsQuery, 
    useGetPostsByUsersQuery, 
    useGetTodosQuery, 
    useDeletePostMutation, 
    useUpdatePostMutation,
    useUpdateTodoMutation,
    useUpdateUserMutation
} = userApi; 