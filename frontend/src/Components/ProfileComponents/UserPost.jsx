import React from 'react'
import { RiVideoAddLine } from 'react-icons/ri'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { useState } from 'react'
import UserPostCard from './UserPostCard'

const UserPost = () => {
    const [activeTab, setActiveTab] = useState();
    const tabs = [
        {
            tab: "Posts",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeTab: ""
        },
        {
            tab: "Reels",
            icon: <RiVideoAddLine></RiVideoAddLine>
        },
        {
            tab: "Saved",
            icon: <BiBookmark></BiBookmark>
        },
        {
            tab: "Tagged",
            icon: <AiOutlineUser></AiOutlineUser>
        }
    ]

    return (
        <div>
            <div className='flex space-x-14 border-t relative'>
                {tabs.map((item) => <div onClick={() => setActiveTab(item.tab)} className={`${activeTab === item.tab ? 'border-t border-black' : 'opacity-60'} flex items-center cursor-pointer py-2 text-sm`}>
                    <p>{item.icon}</p>
                    <p className='ml-1'>{item.tab}</p>
                </div>)}
            </div>
            <div className='flex flex-wrap'>
                {[1].map((item) => <UserPostCard></UserPostCard>)}
            </div>
        </div>
    )
}

export default UserPost