import React from 'react';
import Post from "./Post";

const Posts = ({blogposts, deletePost}) => {
    return (
        <div>
           { blogposts.map((blogpost,i) =>{
               return <Post key={i} id={i} blog={blogpost} deletePost={deletePost}/>
           })}
        </div>
    );
}

export default Posts;
