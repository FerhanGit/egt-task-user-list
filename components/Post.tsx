/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Post as PostType} from '../types/Post'
import PostEdit from './PostEdit'

interface Props {
    postData: PostType
}

const Post = (props: Props) => {

  return (
    <>
        <div className="m-2 p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <PostEdit postData={props.postData} />
        </div>
    </>
  )
}

export default Post
