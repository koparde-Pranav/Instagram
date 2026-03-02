import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './UserPostCard.css'

const UserPostCard = () => {
    return (
        <div className='p-2'>
            <div className='post w-60 h-60'>
                <img className='cursor-pointer' src='https://m.media-amazon.com/images/I/81TsETO4qXL._AC_UF1000,1000_QL80_.jpg' alt=''></img>
                <div className='overlay'>
                    <div className='overlay-text flex justify-between'>
                        <div >
                            <AiFillHeart></AiFillHeart>
                            <span>10</span>
                        </div>
                        <div>
                            <FaComment></FaComment>
                            <span>30</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPostCard