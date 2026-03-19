import React from 'react'

const SearchUserCard = () => {
    return (
        <div className='py-2 cursor-pointer'>
            <div className='flex items-center'>
                <img className='w-10 h-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOYVnE2GNeSWVIAKq7eupYrdAyxH-0DPiDQ&s' alt=''></img>
                <div className='ml-3'>
                    <p>Fill name</p>
                    <p className='opacity-70'>username</p>
                </div>
            </div>
        </div>
    )
}

export default SearchUserCard