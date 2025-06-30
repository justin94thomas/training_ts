import React, { useState } from 'react';
import BlogComments from './BlogComments';
import { useDispatch } from 'react-redux';
import { addComment } from './blogSlice';
import './styles.css';

interface Comments {
    id: number;
    uname: string;
    description: string;
}

interface BlogPost {
    id: number;
    title: string;
    description: string;
    comments: Comments[];
}

interface BlogListProps {
    posts: BlogPost[];
}

const BlogLists: React.FC<BlogListProps> = ({ posts }) => {
    const [showComments, setShowComments] = useState<{ [key: number]: boolean }>({});
    const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
    const dispatch = useDispatch();

    const handleComments = (postId: number) => {
        setShowComments(prev => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    const handleInputChange = (postId: number, value: string) => {
        setCommentInputs(prev => ({
            ...prev,
            [postId]: value,
        }));
    };

    const handleAddComment = (postId: number) => {
        const commentText = commentInputs[postId]?.trim();
        if (commentText) {
            dispatch(addComment({ postId, uname: 'Guest', description: commentText }));
            setCommentInputs(prev => ({ ...prev, [postId]: '' }));
        }
    };

    return (
        <div className="blog-lists-main">
            {posts && posts.map(post => (
                <div key={post.id} className="blog-post">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p
                        className="show-comments"
                        onClick={() => handleComments(post.id)}
                    >
                        {`View Comments (${post.comments.length})`}
                    </p>

                    {showComments[post.id] && (
                        <>
                            <BlogComments comments={post.comments} postId={post.id} />
                            <div className="add-comment">
                                <textarea
                                    name='comment'
                                    className='add-comment-input'
                                    placeholder="Write a comment..."
                                    value={commentInputs[post.id] || ''}
                                    onChange={e => handleInputChange(post.id, e.target.value)}
                                />
                                <button className='comment-btn' onClick={() => handleAddComment(post.id)}>Add Comment</button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BlogLists;
