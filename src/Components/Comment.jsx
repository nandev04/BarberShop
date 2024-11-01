import React from 'react';
import './styles/Comment.css';

const Comment = ({ name, comment }) => {
	return (
		<div className="container-comment">
			<h3 className="name">{name}</h3>
			<p className="comment">{comment}</p>
		</div>
	);
};

export default Comment;
