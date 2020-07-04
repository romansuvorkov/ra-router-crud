import React, { useState, useContext } from 'react';
import PostsContext from './PostsContext';

function CreationForm({history, location}) {

    const { uploadToServer } = useContext(PostsContext);
    const { post } = location;
    let content = '';
    if (post) {
        content = post.content;
    }
    const [form, setForm] = useState(content);

    const handleChange = (event) => {
        const {value} = event.target;
        console.log(value);
        setForm(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        if (!post) {
          uploadToServer({content: form});
          history.push('/');
        } else {
          uploadToServer({id: post.id, content: form});
          history.push('/');
        }
    }

    return (
        <div className="input_wrapper">
        <span className="close_btn" onClick={() => {
            post ? history.goBack() : history.push('/');
        }}>&#10006;</span>
        <form className="creation_form" onSubmit={handleSubmit}>
            <textarea onChange={handleChange}>{content}</textarea>
            <button type="submit">Опубликовать</button>
        </form>
        </div>
    );

}

export default CreationForm;
