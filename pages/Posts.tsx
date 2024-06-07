/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetSingleUsersQuery, useGetPostsByUsersQuery, useGetAllPostsQuery } from '../slice/apiSlice.tsx'
import { Post  as PostType} from '../types/Post.tsx';
import SinglePost from '../components/Post.tsx'
import SingleUser from '../components/User.tsx'
import { useParams } from 'react-router-dom';
import { Collapse } from 'antd';

const Posts = () => {

    let { userId } = useParams();
    const user = userId ? parseInt(userId) : 0;

    let content;
    if (userId) {
        const { data: singleUser, isLoading: isLoadingSingleUser, isSuccess: isSuccessSingleUser, isError: isErrorSingleUser, error: errorSingleUser } = useGetSingleUsersQuery(user);
    
        if (isLoadingSingleUser) {
            content =  <p>Loading...</p>;
        } else if (isSuccessSingleUser && singleUser) {
            content = <div id="accordion-collapse" data-accordion="collapse"><SingleUser onPostsPage={true} userData={singleUser} /></div>
        } else if (isErrorSingleUser && errorSingleUser) {
            content = `<p>${errorSingleUser}</p>`;
        }
    }
   
    const { data, isLoading, isSuccess, isError, error } = userId ? useGetPostsByUsersQuery(user) : useGetAllPostsQuery();

    if (isLoading) {
        return (
            <>
                <Navbar/>
                {content}
                <p>Loading...</p>
            </>
        )
    } 
    
    if (isError && error) {
        const errorMsg = `<p>${error}</p>`;
        return (
            <>
                <Navbar/>
                {content}
                {errorMsg}
            </>
        )
    }
    
    let contentPosts;
    if (isSuccess) {
        if (data) {
            const items = data.map((post:PostType) => {
                return {
                  key: post.id,
                  label: post.title,
                  children: <SinglePost key={post.id} postData={post} />,
                }
            });

            contentPosts = <Collapse items={items} accordion />;

        } else {
            contentPosts = <div className="text-center text-4xl">No Data available</div>
        }
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