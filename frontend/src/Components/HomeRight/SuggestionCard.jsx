import React from 'react'

const SuggestionCard = () => {
    return (
        <div className='flex justify-between items-center'
        >
            <div className='flex items-center'>
                <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2025/09/12/16/49/dog-9830833_640.jpg" alt="" />
                <div>
                    <p className='text-sm font-semibold'>username</p>
                    <p className='text-sm font-semibold opacity-70'>Follows you</p>
                </div>
            </div>
            <p className='text-blue-700 text-sm font-semibold'>Follow</p>
        </div>
    )
}

export default SuggestionCard