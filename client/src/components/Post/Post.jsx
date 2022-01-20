import React from 'react';
import likeIcon from '../../assets/images/likes.svg'
import epochToDynamic from '../../utils/utils';
import './Post.scss'

function Post({ userPost }) {
	const date = Date.parse(userPost.date_posted)
	console.log(date)
	const dynamicDate = epochToDynamic(date)

	return (
		
		<div className='post__card'>
			<div className="post__image-name-date">
				<img src={userPost.profile_pic} alt='profile pic' className='post__profile-image' />
				<div className="post__name-company">
					<p className="post__name">{userPost.name}</p>
					<p className="post__company">{userPost.company}</p>
				</div>
				<p className="post__date">{dynamicDate}</p>
			</div>
			<div className="post__text-wrapper">
				<p className="post__text">{userPost.post_content}</p>
			</div>
			<div className="post__likes-wrapper">
				<img className='post__like-icon' src={likeIcon} alt="like icon" />
				<p className="post__likes">{userPost.likes}</p>
			</div>
		</div>
		);
}

export default Post;
