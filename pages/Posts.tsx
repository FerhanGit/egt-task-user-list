/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetSingleUsersQuery, useGetPostsByUsersQuery, useGetAllPostsQuery } from '../features/userSlice.tsx'
import { Post  as PostType} from '../types/Post.tsx';
import { User as UserType } from '../types/User.tsx'
import PostsList from '../components/PostsList.tsx'
import SingleUser from '../components/User'
import { useParams } from 'react-router-dom';

interface Props {}

const Posts = (props: Props) => {

    let { userId } = useParams();
    const user = userId ? parseInt(userId) : 0;

    let content;
    if (userId) {
        const { data: singleUser, isLoading: isLoadingSingleUser, isSuccess: isSuccessSingleUser, isError: isErrorSingleUser, error: errorSingleUser } = useGetSingleUsersQuery(user);
    
        if (isLoadingSingleUser) {
            content =  <p>Loading...</p>;
        } else if (isSuccessSingleUser && singleUser) {
            content = <div id="accordion-collapse" data-accordion="collapse"><SingleUser userData={singleUser} /></div>
        } else if (isErrorSingleUser && errorSingleUser) {
            content = `<p>${errorSingleUser}</p>`;
        }
    }
   
    const { data, isLoading, isSuccess, isError, error } = userId ? useGetPostsByUsersQuery(user) : useGetAllPostsQuery();

    let contentPosts;
    if (isLoading) {
        contentPosts =  <p>Loading...</p>;
    } else if (isSuccess) {
        if (data) {
            contentPosts = <PostsList postsData={data}/>
        } else {
            contentPosts = <div className="text-center text-4xl">No Data available</div>
        }

    } else if (isError && error) {
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