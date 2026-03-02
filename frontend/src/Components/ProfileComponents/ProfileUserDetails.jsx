import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'

const ProfileUserDetails = () => {
    return (
        <div className='py-10 w-full'>
            <div className='flex items-center'>
                <div className='w-[15%]'>
                    <img className='w-32 h-32 rounded-full' src='https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg' alt=''></img>
                </div>
                <div className='space-y-5 '>
                    <div className='flex space-x-10 items-center'>
                        <p>Username</p>
                        <button>Edit Profile</button>
                        <TbCircleDashed></TbCircleDashed>
                    </div>
                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>Post</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>5</span>
                            <span>Followers</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>7</span>
                            <span>Following</span>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold'>Full Name</p>
                        <p className='font-thin textsm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserDetails
