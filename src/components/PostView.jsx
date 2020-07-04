import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import PostsContext from './PostsContext';
import moment from 'moment';


function PostView({ match, history }) {
    const { posts, deleteFromServer } = useContext(PostsContext);

    const post = posts.find(o => o.id == match.params.id);
    return (
        <div className="post_view">
            <span className="close_btn" onClick={() => {
                history.push('/');
            }}>&#10006;</span>
            <p className="post_date">Дата: {moment(post.created).format('DD.MM.YYYY HH:mm:ss')}</p>
            <p className="post_text">{post.content}</p>
            <div className="post_interface">
                <span className="del_btn" onClick={() => {
                    deleteFromServer(post.id);
                    history.push('/');
                }}>Удалить</span>
                <span className="redact_btn"><Link className="post_link" to={{
                pathname: `/posts/new`,
                post:  post
                }}>Изменить</Link></span>    
            </div>
            
        </div>
    );
}

export default PostView;