import { React, useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsThreeDots, BsEmojiSmile } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart as AiOutLineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./PostCard.css"
import CommentModal from '../Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react'

const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }
    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }
    const handleSavePost = () => {
        setIsSaved(!isSaved);
    }
    const handleOpenCommentModal = () => {
        onOpen();
    }
    return (
        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12 rounded-full' src='https://images.bigbadtoystore.com/images/p/full/2021/10/49152b5e-6ad5-4fd1-b93a-0aac0880bacf.jpg' alt=''></img>

                        <div className='pl-2'>
                            <p className='font-semibold text-sm '>username</p>
                            <p className='font-thin text-sm'>location</p>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick}></BsThreeDots>
                        <div className='dropdown-content'>
                            {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <img className='w-full' src='https://cdn.pixabay.com/photo/2025/11/10/10/01/landscape-9947733_640.jpg' alt=''></img>
                </div>

                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-500' onClick={handlePostLike}></AiFillHeart> : <AiOutLineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}></AiOutLineHeart>}

                        <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'></FaRegComment>
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'></RiSendPlaneLine>
                    </div>
                    <div className='cursor-pointer'>
                        {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}></BsBookmarkFill> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}></BsBookmark>}

                    </div>
                </div>

                <div className='w-full py-2 px-5'>
                    <p>10 likes</p>
                    <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
                </div>
                <div className='border border-t-w-full'>
                    <div className='flex w-full items-center px-5 '>
                        <BsEmojiSmile className='emojiIcon'></BsEmojiSmile>
                        <input className='commentInput' type='text' placeholder='Add a comment ..'></input>
                    </div>
                </div>
            </div>

            <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved}></CommentModal>
        </div>
    )
}

export default PostCard