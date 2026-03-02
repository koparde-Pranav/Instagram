import React from 'react'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center '>
            <div>
              <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2025/07/16/10/33/rice-9717641_640.jpg" alt="" />
            </div>
            <div className='ml-3'>
              <p>FullName</p>
              <p className='opacity-70'>username</p>
            </div>
          </div>
          <div>
            <p className='text-blue-700 font-semibold'>Switch</p>
          </div>
        </div>
        <div className='space-y-5 mt-10'>
          {[1, 1, 1, 1,].map((item) => <SuggestionCard></SuggestionCard>)}
        </div>
      </div>
    </div>
  )
}

export default HomeRight