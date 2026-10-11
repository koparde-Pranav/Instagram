import React from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import HomeRight from '../../Components/HomeRight/HomeRight'
import PostCard from '../../Components/Post/PostCard'
import CreatePostModal from '../../Components/Post/CreatePostModal'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { findUserPostAction } from '../../Redux/Post/Action'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userIds, setUserIds] = useState([]);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user, post } = useSelector(store => store);

  useEffect(() => {
    const newIds = user.reqUser?.following?.map((user) => user.id) ?? [];
    setUserIds([user.reqUser?.id, ...newIds]);
  }, [user.reqUser])

  useEffect(() => {
    const data = {
      jwt: token,
      userIds: [userIds].join(',')
    }
    dispatch(findUserPostAction(data))
  }, [userIds, post.createdPost, post.deletedPost])


  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[44%] px-10 '>
          <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full '>
            {[0, 1, 2].map((index) => <StoryCircle key={index}></StoryCircle>)}
          </div>
          <div className='space-y-10 w-full mt-10'>
            {post.usersPost.length > 0 && post.usersPost.map((item) => (<PostCard key={item.id} post={item}></PostCard>))}
          </div>
        </div>
        <div className='w-[27%] '>
          <HomeRight></HomeRight>
        </div>
      </div>
    </div>
  )
}

export default HomePage