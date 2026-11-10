import React, { useEffect, useState } from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { menu } from './SidebarConfig'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import CreatePostModal from '../../Components/Post/CreatePostModal';

const Sidebar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [activeTab, setActiveTab] = useState("Home");
    const { user } = useSelector((store) => store);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/home") {
            setActiveTab("Home");
        } else if (location.pathname === "/search") {
            setActiveTab("Search");
        } else if (user.reqUser?.username && location.pathname === `/${user.reqUser.username}`) {
            setActiveTab("Profile");
        }
    }, [location.pathname, user.reqUser?.username]);

    const handleTabClick = (title) => {
        setActiveTab(title);
        if (title === "Profile") {
            if (user.reqUser?.username) {
                navigate(`/${user.reqUser.username}`)
            }
        } else if (title === "Home") {
            navigate('/home')
        } else if (title === "Search") {
            navigate('/search')
        } else if (title === "Create") {
            onOpen();
        }
    }

    return (
        <div className='sticky top-0 h-[100vh] flex'>
            <div className='flex flex-col justify-between h-full px-10'>
                {<div>
                    <div className='mt-10'>
                        {menu.map((item) => (
                            <div key={item.title} onClick={() => handleTabClick(item.title)} className='flex items-center cursor-pointer mb-5 text-lg'>
                                {activeTab === item.title ? item.activeicon : item.icon}
                                <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`}>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>}
                <div className='flex items-center cursor-pointer pb-10 '>
                    <IoReorderThreeOutline className='text-2xl'></IoReorderThreeOutline>
                    <p className='ml-5'>More</p>
                </div>
            </div>
            <CreatePostModal onClose={onClose} isOpen={isOpen} ></CreatePostModal>
        </div>
    )
}

export default Sidebar
