import React from 'react';

interface Comments {
    id: number,
    uname: string,
    description: string
}

interface BlogCommentProps {
    comments: Comments[],
    postId: number
}
const BlogComments: React.FC<BlogCommentProps> = ({comments, postId}) =>{
    
    return (<div className='blog-comments-main'>
        {comments.map(comment => (
            <div key={comment.id} className='comments-sec-main'>
                <h5>@{comment.uname}</h5>
                <p className='comments-sec-comment'>{comment.description}</p>
            </div>
        ))}
    </div>)
}

export default BlogComments;