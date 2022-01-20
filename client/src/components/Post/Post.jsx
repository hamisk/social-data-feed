import React from 'react';
import likeIcon from '../../assets/images/likes.svg'
import './Post.scss'

function Post({ userPost }) {

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const dateArray = userPost.date_posted.split("/")
	const DDMMMYYYY = `${dateArray[0]} ${months[Number(dateArray[1])-1]} ${dateArray[2]}`

	return (
		
		<div className='post__card'>
			<div className="post__image-name-date">
				<div className="post__image-name">
					<img src={userPost.profile_pic} alt='profile pic' className='post__profile-image' />
					<div className="post__name-company">
						<p className="post__name">{userPost.name}</p>
						<p className="post__company">{userPost.company}</p>
					</div>
				</div>
				<p className="post__date">{DDMMMYYYY}</p>
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
