import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const CommentCard = () => {
    const [isCommentLiked, setIsCommentLiked] = React.useState(false);
    const handleLikedComment = () => {
        setIsCommentLiked(!isCommentLiked);
    }
    return (
        <div>
            <div className='flex item-center justify-between py-5'>
                <div className='flex item-center'>
                    <div>
                        <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2025/02/06/13/31/winter-9387569_640.jpg" alt="" />
                    </div>
                    <div className='ml-3'>
                        <p>
                            <span className='font-semibold'>username</span>
                            <span className='ml-2'>Nice post!</span>
                        </p>
                        <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                            <span>1 min ago</span>
                            <span>69 likes</span>
                        </div>

                    </div>
                </div>

                {isCommentLiked ? <AiFillHeart onClick={handleLikedComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600'></AiFillHeart> : <AiOutlineHeart onClick={handleLikedComment} className='text-xs hover:opacity-50 cursor-pointer'></AiOutlineHeart>}
            </div>
        </div>
    )
}

export default CommentCard