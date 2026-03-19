import React from 'react'
import "./SearchComponents.css";
import SearchUserCard from './SearchUserCard';

const SearchComponents = () => {
    return (
        <div className='searchContainer'>
            <div className='px-3 pb-5'>
                <h1 className='text-xl pb-5'>search</h1>
                <input className='searchInput' type="text" placeholder="Search..." />
            </div>

            <hr /> 
            <div className='px-3 pt-5'>
                {[1,1,1,1,1,1].map((item,index) => <SearchUserCard/>)}
            </div>

        </div>
    )
}

export default SearchComponents