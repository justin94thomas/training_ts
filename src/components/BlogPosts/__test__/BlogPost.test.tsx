import React from 'react';
import { act, render, fireEvent, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import BlogPosts from '../index';
import BlogLists from '../BlogLists';
import CreateBlog from '../CreateBlog';
import BlogComments from '../BlogComments';
import { addPost } from '../blogSlice';


const mockStore = configureStore([]);
let store: any;

jest.mock('../blogSlice', () => ({
  addPost: jest.fn(),
}));


describe('BlogPosts Component', () => {
    it('renders blog post heading', () => {
        const store = mockStore({ blog: { posts: [] } });

        render(
            <Provider store={store}>
                <BlogPosts />
            </Provider>
        );

        expect(screen.getByTestId('blog-post')).toBeInTheDocument();
    });
});

describe('BlogLists Component', () => {
    const mockPosts = [
        {
            id: 1,
            title: 'Sample Post',
            description: 'This is a sample post',
            comments: [{ id: 1, uname: 'User1', description: 'Nice post!' }],
        },
    ];

    it('renders blog post and toggles comments', () => {
        const store = mockStore({});
        store.dispatch = jest.fn();

        render(<Provider store={store}>
            <BlogLists posts={mockPosts} />
        </Provider>
        );

        expect(screen.getByText('Sample Post')).toBeInTheDocument();
        fireEvent.click(screen.getByText(/View Comments/i));
        expect(screen.getByText('@User1')).toBeInTheDocument();
    });
});

describe('BlogComments Component', () => {
    const comments = [
        { id: 1, uname: 'Alice', description: 'Great post!' },
        { id: 2, uname: 'Bob', description: 'Thanks for sharing.' },
    ];

    it('renders all comments', () => {
        render(<BlogComments comments={comments} postId={1} />);
        expect(screen.getByText('@Alice')).toBeInTheDocument();
        expect(screen.getByText('@Bob')).toBeInTheDocument();
    });
});

describe('CreateBlog Component', () => {
    const store = mockStore({});
    store.dispatch = jest.fn();
    it('render create blog component', () => {
        render(<Provider store={store}><CreateBlog /></Provider>);
        expect(screen.getByTestId('create-new')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
        expect(screen.getByText('Post Blog')).toBeInTheDocument();
    })

    it('submits form with valid input', async () => {
        const store = mockStore({});
        store.dispatch = jest.fn();

        await act(async () => {
            render(<CreateBlog />);

            fireEvent.change(screen.getByPlaceholderText('Title'), {
                target: { value: 'Test Blog Title' }
            });
            fireEvent.change(screen.getByPlaceholderText('Description'), {
                target: { value: 'Test Blog Description' }
            });
            fireEvent.click(screen.getByText('Post Blog'));
        });
        expect(addPost).toHaveBeenCalledWith({
            title: 'Test Blog Title',
            description: 'Test Blog Description',
        });
        expect(store.dispatch).toHaveBeenCalled();
    });


    it('shows validation errors when fields are empty', () => {
        const store = mockStore({});
        render(<CreateBlog />);

        fireEvent.click(screen.getByText('Post Blog'));

        expect(screen.getByText('Title is Required')).toBeInTheDocument();
        expect(screen.getByText('Description Required')).toBeInTheDocument();
    });
})
