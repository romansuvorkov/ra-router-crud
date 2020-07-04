import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import Post from './Post';
import { useContext } from 'react';
import PostsContext from './PostsContext';

const PostsList = () => {
    const { posts } = useContext(PostsContext);
        return (
            <div className="posts_list">
                {posts.map(o =>
                    <Post data={o} key={o.id} />
                )}
            </div>
        )
}

export default PostsList;