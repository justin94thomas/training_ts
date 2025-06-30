import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Comment {
  id: number;
  uname: string;
  description: string;
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  comments: Comment[];
}

interface BlogState {
  posts: BlogPost[];
}

const initialState: BlogState = {
  posts: [
    {
      id: 1,
      title: "My First Blog",
      description: "Welcome to my first blog. This blog tells you about the latest trends in technology.",
      comments: [
        {
          id: 11,
          uname: "commenter1",
          description: "Very thoughtful"
        },
        {
          id: 12,
          uname: "commenter2",
          description: "Excellent posts"
        }
      ]
    },
    {
      id: 2,
      title: "My Second Blog",
      description: "Welcome to my Second blog. With no comments",
      comments: []
    }
  ]
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Omit<BlogPost, 'id' | 'comments'>>) => {
      const newPost: BlogPost = {
        id: state.posts.length + 1,
        comments: [],
        ...action.payload
      };
      state.posts.push(newPost);
    },
    addComment: (state, action: PayloadAction<{ postId: number; uname: string; description: string }>) => {
      const post = state.posts.find(p => p.id === action.payload.postId);
      if (post) {
        const newComment: Comment = {
          id: post.comments.length + 1,
          uname: action.payload.uname,
          description: action.payload.description
        };
        post.comments.push(newComment);
      }
    }
  }
});

export const { addPost, addComment } = blogSlice.actions;
export default blogSlice.reducer;
