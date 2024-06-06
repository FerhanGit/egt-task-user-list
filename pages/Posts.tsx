/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetSingleUsersQuery, useGetPostsByUsersQuery } from '../features/userSlice.tsx'
import { Post  as PostType} from '../types/Post.tsx';
import { User as UserType } from '../types/User.tsx'
import PostsList from '../components/PostsList.tsx'
import SingleUser from '../components/User'

interface Props {}

const Posts = (props: Props) => {
    const { data: singleUser, isLoading: isLoadingSingleUser, isSuccess: isSuccessSingleUser, isError: isErrorSingleUser, error: errorSingleUser } = useGetSingleUsersQuery(2);
    const { data, isLoading, isSuccess, isError, error } = useGetPostsByUsersQuery(2);

    let content;
    if (isLoadingSingleUser) {
        content =  <p>Loading...</p>;
    } else if (isSuccessSingleUser) {
        content = <div id="accordion-collapse" data-accordion="collapse"><SingleUser userData={singleUser} /></div>
    } else if (isErrorSingleUser) {
        content = `<p>${errorSingleUser}</p>`;
    }


    let contentPosts;
    if (isLoading) {
        contentPosts =  <p>Loading...</p>;
    } else if (isSuccess) {
        if (data) {
            contentPosts = <PostsList postsData={data}/>
        } else {
            contentPosts = <div className="text-center text-4xl">No Data available</div>
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