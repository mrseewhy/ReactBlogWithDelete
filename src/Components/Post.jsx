import React from 'react';

const Post = ({blog, deletePost, id}) => {
    return (
        <div className="post">
            <h3>{blog.heading}</h3>
            <p>{blog.body}</p>
            <p><button onClick={()=>{deletePost(id)}}>X</button></p>
        </div>
    );
}

export default Post;
