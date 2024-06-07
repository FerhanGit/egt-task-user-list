/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar.tsx'
import { useGetSingleUsersQuery, useGetPostsByUsersQuery, useGetAllPostsQuery } from '../features/userSlice.tsx'
import { Post, Post  as PostType} from '../types/Post.tsx';
import { User as UserType } from '../types/User.tsx'
import SinglePost from '../components/Post.tsx'
import SingleUser from '../components/User.tsx'
import { useParams } from 'react-router-dom';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

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