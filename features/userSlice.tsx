/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getAllUsers: builder.query<any, void>({
            query: () => 'users'
        }),
    }),
});

export const { useGetAllUsersQuery } = userApi; 