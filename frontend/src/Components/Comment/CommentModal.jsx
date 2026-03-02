import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import { BsBookmark, BsBookmarkFill, BsThreeDots, BsEmojiSmile } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart as AiOutLineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'  
import { RiSendPlaneLine } from 'react-icons/ri'
import CommentCard from './CommentCard'
import './CommentModal.css'

const CommentModal = ({ onClose, isOpen, isSaved, isPostLiked, handlePostLike, handleSavePost }) => {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[85vh]'>
                            <div className=' w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2025/07/16/10/33/rice-9717641_640.jpg" alt="" />
                            </div>
                            <div className='w-[55%] pl-10 relative'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex item-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/30/15/51/cat-8664948_640.jpg" alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>username</p>
                                        </div>
                                    </div>
                                    <BsThreeDots></BsThreeDots>
                                </div>
                                <hr />
                                <div className='comment'>
                                    {[1, 1, 1, 1].map(() => <CommentCard />)}
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
                                        <p>10 likes</p>
                                        <p className='opacity-50 text-sm'>1 day ago</p>
                                    </div>


                                    <div className='flex items-center w-full'>
                                        <BsEmojiSmile className='emojiIcon'></BsEmojiSmile>
                                        <input className='commentInputs' type='text' placeholder='Add a comment ..'></input>
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