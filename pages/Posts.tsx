/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetSingleUsersQuery, useGetPostsByUsersQuery } from '../features/userSlice.tsx'
import { Post  as PostType} from '../types/Post.tsx';


interface Props {}

const Posts = (props: Props) => {
    const { data: singleUser, isLoading: isLoadingSingleUser, isSuccess: isSuccessSingleUser, isError: isErrorSingleUser, error: errorSingleUser } = useGetSingleUsersQuery(2);
    const { data, isLoading, isSuccess, isError, error } = useGetPostsByUsersQuery(2);

    let content;
    if (isLoadingSingleUser) {
        content =  <p>Loading...</p>;
    } else if (isSuccessSingleUser) {
        content = <div className="text-center text-4xl">{singleUser.name}</div>
    } else if (isErrorSingleUser) {
        content = `<p>${errorSingleUser}</p>`;
    }


    let contentPosts;
    if (isLoading) {
        contentPosts =  <p>Loading...</p>;
    } else if (isSuccess) {
        if (data) {
            contentPosts = data.map((post:PostType) => <div key={post.id} className="text-center text-4xl">{post.title}</div>)
        } else {
            contentPosts = <div className="text-center text-4xl">{data.title}</div>
        }
    } else if (isErrorSingleUser) {
        contentPosts = `<p>${error}</p>`;
    }

  return (
    <>
        <Navbar/>
        {content}
        {contentPosts}
    </>
  )
}

export default Posts