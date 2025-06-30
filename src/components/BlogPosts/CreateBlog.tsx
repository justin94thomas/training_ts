import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { addPost } from './blogSlice';
import './styles.css';


const CreateBlog: React.FC = () => {
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            id: '',
            title: '',
            description: '',
            comments: []
        },
        validate: values => {
            const errors: { title?: string; description?: string } = {};
            if (!values.title) {
                errors.title = 'Title is Required';
            }
            if (!values.description) {
                errors.description = 'Description Required';
            }
            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            dispatch(addPost({ title: values.title, description: values.description }));
            resetForm();
        },
    });

    return (<div className='create-blog-main'>
        <h3 data-testid="create-new">Create new blog</h3>

        <form onSubmit={formik.handleSubmit} className='create-blog-form'>
            <div>
                <input
                    type="text"
                    name="title"
                    className='form-title'
                    placeholder="Title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.errors.title && <div className="error">{formik.errors.title}</div>}
            </div>
            <div>
                <textarea
                    name="description"
                    className='form-desc'
                    placeholder="Description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                {formik.errors.description && <div className="error">{formik.errors.description}</div>}
            </div>

            <button className="comment-btn" type="submit">Post Blog</button>
        </form>

    </div>)
}

export default CreateBlog;