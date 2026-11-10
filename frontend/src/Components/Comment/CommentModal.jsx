import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import { BsBookmark, BsBookmarkFill, BsThreeDots, BsEmojiSmile } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart as AiOutLineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import CommentCard from './CommentCard'
import './CommentModal.css'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createCommentAction } from '../../Redux/Comment/Action'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { findPostByIdAction } from '../../Redux/Post/Action'
import { timeDifference } from '../../Config/Logic'

const CommentModal = ({ onClose, isOpen, isSaved, isPostLiked, handlePostLike, handleSavePost }) => {

    const [commentContent, setCommentContent] = React.useState('');
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const { postId } = useParams();
    const { comment, post } = useSelector((store) => store);
    const { user } = useSelector((store) => store);

    useEffect(() => {
        const data = { postId: postId, jwt: token }
        if (postId) {
            dispatch(findPostByIdAction(data))
        }
    }, [comment.createdComment, postId, comment.likeComment])

    return (
        console.log("post in CommentModal : ", post),
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[85vh]'>
                            <div className=' w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src={post.singlePost?.image} alt="" />
                            </div>
                            <div className='w-[55%] pl-10 relative'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex item-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src={user.reqUser.image} alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>{user.reqUser?.username}</p>
                                        </div>
                                    </div>
                                    <BsThreeDots></BsThreeDots>
                                </div>
                                <hr />
                                <div className='comment'>
                                    {post.singlePost?.comment?.map((comment) => (
                                        <CommentCard key={comment.id} comment={comment} />
                                    ))}
                                </div>

                                <div className='absolute bottom-0 w-[90%]'>
                                    <div className='flex justify-between items-center w-full py-4'>
                                        <div className='flex items-center space-x-2'>
                                            {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-500' onClick={handlePostLike}></AiFillHeart> : <AiOutLineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}></AiOutLineHeart>}

                                            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'></FaRegComment>
                                            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'></RiSendPlaneLine>
                                        </div>
                                        <div className='cursor-pointer'>
                                            {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}></BsBookmarkFill> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}></BsBookmark>}

                                        </div>
                                    </div>

                                    <div className='w-full py-2'>
                                        {post.singlePost?.likedByUsers.length > 0 && <p>{post.singlePost?.likedByUsers.length} likes</p>}
                                        <p className='opacity-50 text-sm'>{timeDifference(post.singlePost?.createdAt)}</p>
                                    </div>


                                    <div className='flex items-center w-full'>
                                        <BsEmojiSmile className='emojiIcon'></BsEmojiSmile>
                                        <input className='commentInputs' type='text' placeholder='Add a comment ..' value={commentContent} onChange={(e) => setCommentContent(e.target.value)} onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                const data = { postId: postId, data: { content: commentContent }, jwt: token }
                                                dispatch(createCommentAction(data))
                                                setCommentContent('');
                                            }
                                        }}></input>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal