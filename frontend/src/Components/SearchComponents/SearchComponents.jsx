import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import "./SearchComponents.css";
import SearchUserCard from './SearchUserCard';
import { searchUserAction } from '../../Redux/User/Action';

const SearchComponents = () => {
    const [isFocused, setIsFocused] = useState(false);
    const dispatch = useDispatch();
    const { searchUser } = useSelector((store) => store.user);

    const handleSearchFocus = () => {
        if (isFocused) return;

        setIsFocused(true);
        dispatch(searchUserAction({
            query: '',
            jwt: localStorage.getItem('token')
        }));
    };

    return (
        <div className='searchContainer'>
            <div className='searchContent'>
                <div className='searchInputContainer'>
                    <AiOutlineSearch className='searchInputIcon' aria-hidden='true' />
                    <input
                        className='searchInput'
                        onFocus={handleSearchFocus}
                        type='text'
                        placeholder='Search...'
                        aria-label='Search users'
                    />
                </div>

                {isFocused && (
                    <div className='searchResults'>
                        {Array.isArray(searchUser) && searchUser.length > 0 ? (
                            searchUser.map((foundUser) => (
                                <SearchUserCard key={foundUser.id} user={foundUser} />
                            ))
                        ) : searchUser ? (
                            <p className='searchEmptyState'>No users found.</p>
                        ) : (
                            <p className='searchEmptyState'>Loading users...</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchComponents