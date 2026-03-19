import React from 'react'
import { useNavigate } from 'react-router-dom'

const StoryCircle = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/story");
    }
    return (
        <div>
            <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
                <img className='w-16 h-16 rounded-full' src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg" alt=""></img>
                <p>Username</p>
            </div>
        </div>
    )
}

export default StoryCircle