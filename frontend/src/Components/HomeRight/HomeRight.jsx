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
        <div>
          <div className='flex justify-between items-center mt-10'>
            <p className='opacity-70'>Suggested For You</p>
            <p className='text-blue-700 font-semibold'>See All</p>
          </div>
          
        </div>
        <div className='space-y-5 mt-4'>
          {[0, 1, 2, 3].map((index) => <SuggestionCard key={index}></SuggestionCard>)}
        </div>
        <div className='mt-10 opacity-70 space-y-2'>
          <p>© 2026 Instagram from Meta</p>
        </div>
      </div>
    </div>
  )
}

export default HomeRight