import { React, useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsThreeDots, BsEmojiSmile } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart as AiOutLineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./PostCard.css"
import CommentModal from '../Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { likePostAction, unlikePostAction, savePostAction, unsavePostAction } from '../../Redux/Post/Action';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isPostLikedByUser, isPostSavedByUser } from '../../Config/Logic';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const dropdownItems = [
        "Report",
        "Not interested",
        "About this account",
        "Go to post",
        "Share to...",
        "Copy link",
        "Embed",
    ];
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const data = { jwt: token, postId: post.id }
    const { user } = useSelector((store) => store);
    const navigate = useNavigate();

    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }
    const handlePostLike = () => {
        setIsPostLiked(true);
        dispatch(likePostAction(data));
    }
    const handlePostUnlike = () => {
        setIsPostLiked(false);
        dispatch(unlikePostAction(data));
    }
    const handleSavePost = () => {
        setIsSaved(true);
        dispatch(savePostAction(data));
    }
    const handleUnsavePost = () => {
        setIsSaved(false);
        dispatch(unsavePostAction(data));
    }
    const handleOpenCommentModal = () => {
        navigate(`/comment/${post.id}`);
        onOpen();
    }

    useEffect(() => {
        setIsPostLiked(isPostLikedByUser(post, user.reqUser.id));
        setIsSaved(isPostSavedByUser(user.reqUser, post.id));
    }, [post.likedByUsers, user.reqUser])

    return (
        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12 rounded-full' src={post.user.userImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPkqRyA7fZJ_m0ayr-M10p4p50J6f2HudK5B14xe-pw&s'} alt=''></img>

                        <div className='pl-2'>
                            <p className='font-semibold text-sm '>{post.user.username}</p>
                            <p className='font-thin text-sm'>{post.location}</p>
                        </div>
                    </div>
                    <div className= '-mr-[155px]'>
                        <p className='text-blue-700 font-semibold'>Follow</p>
                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick}></BsThreeDots>
                        <div className='dropdown-content'>
                            {showDropDown && dropdownItems.map((item) => (
                                <button
                                    key={item}
                                    type='button'
                                    className={`dropdown-item ${item === "Report" ? "text-red-600" : ""}`}
                                    onClick={() => setShowDropDown(false)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <img className='w-full' src={post.image} alt=''></img>
                </div>

                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-500' onClick={handlePostUnlike}></AiFillHeart> : <AiOutLineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}></AiOutLineHeart>}

                        <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'></FaRegComment>
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'></RiSendPlaneLine>
                    </div>
                    <div className='cursor-pointer'>
                        {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleUnsavePost}></BsBookmarkFill> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}></BsBookmark>}

                    </div>
                </div>

                <div className='w-full py-2 px-5'>
                    {post?.likedByUsers?.length > 0 && <p>{post?.likedByUsers?.length} likes</p>}
                    {post?.comment?.length > 0 && <p className='opacity-50 py-2 cursor-pointer'>view all {post.comment.length} comments</p>}
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