import React from 'react';
import './Post.css';

const Post = (props) => {
	return (
		<div className="Post">
			<h3>{props.post.title}</h3>
			<p>{props.post.body}</p>
		</div>
	);
};

export default Post;
