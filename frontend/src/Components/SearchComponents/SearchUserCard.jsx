import React from 'react'

const SearchUserCard = ({ user }) => {
    return (
        <div className='py-2 cursor-pointer'>
            <div className='flex items-center'>
                <img
                    className='w-10 h-10 rounded-full object-cover'
                    src={user.image || 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg'}
                    alt={`${user.username}'s profile`}
                />
                <div className='ml-3'>
                    <p>{user.name || user.username}</p>
                    <p className='opacity-70'>{user.username}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchUserCard