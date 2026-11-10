import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { isCommentLikedByUser, timeDifference } from '../../Config/Logic';
import { useDispatch } from 'react-redux';
import { likeCommentAction, unlikeCommentAction } from '../../Redux/Comment/Action';
import { useEffect } from 'react';

const CommentCard = ({ comment }) => {
    const [isCommentLiked, setIsCommentLiked] = React.useState(false);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const data = {
        commentId: comment.id,
        jwt: token
    }
    const { user } = useSelector((store) => store);

    const handleLikeComment = () => {
        setIsCommentLiked(true);
        dispatch(likeCommentAction(data));
    }
    const handleUnlikeComment = () => {
        setIsCommentLiked(false);
        dispatch(unlikeCommentAction(data));
    }

    useEffect(() => {
        setIsCommentLiked(isCommentLikedByUser(comment, user.reqUser.id))
    }, [user.reqUser])

    return (
        <div>
            <div className='flex item-center justify-between py-5'>
                <div className='flex item-center'>
                    <div>
                        <img className='w-9 h-9 rounded-full' src={comment.user?.profileImage || "https://cdn.pixabay.com/photo/2025/02/06/13/31/winter-9387569_640.jpg"} alt="" />
                    </div>
                    <div className='ml-3'>
                        <p>
                            <span className='font-semibold'>{comment.user?.username}</span>
                            <span className='ml-2'>{comment.content}</span>
                        </p>
                        <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                            <span>{timeDifference(comment.createdAt)}</span>
                            {comment.likedByUsers?.length > 0 && <span>{comment.likedByUsers?.length} likes</span>}
                        </div>

                    </div>
                </div>

                {isCommentLiked ? <AiFillHeart onClick={handleUnlikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600'></AiFillHeart> : <AiOutlineHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer'></AiOutlineHeart>}
            </div>
        </div>
    )
}

export default CommentCard