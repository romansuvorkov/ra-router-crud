import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Post(props) {
    const { data } = props;
    
    return (
        <div className="post">
            <Link className="post_link" to={`/posts/${data.id}`}>
                <p className="post_date">Дата: {moment(data.created).format('DD.MM.YYYY HH:mm:ss')}</p>
                <p className="post_text">{data.content}</p>
            </Link>
        </div>
    );
}

export default Post;