import React from 'react'
import Sidebar from '../../Components/SideBar/Sidebar'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'
import Story from '../Story/Story'
import { Auth } from '../Auth/Auth.jsx'
import EditAccountDetail from '../../Components/EditAccount/EditAccountDetail'
import SearchComponents from '../../Components/SearchComponents/SearchComponents'

const Router = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return <Navigate to='/login' replace />
    }

    return (
        <div>
            {(location.pathname !== '/login' && location.pathname !== '/signup') && (
                <div className='flex' >
                    <div className='w-[20%] border border-l-slate-500 '>
                        <Sidebar>
                        </Sidebar>
                    </div>
                    <div className='w-full'>
                        <Routes>
                            <Route path='/home' element={<HomePage></HomePage>}></Route>
                            <Route path='/search' element={<SearchComponents></SearchComponents>}></Route>
                            <Route path='/:username' element={<Profile></Profile>}></Route>
                            <Route path='/story' element={<Story></Story>}></Route>
                            <Route path='/comment/:postId' element={<HomePage></HomePage>}></Route>
                            <Route path='/account/edit/' element={<EditAccountDetail></EditAccountDetail>}></Route>
                        </Routes>
                    </div>
                </div>)}
            {((location.pathname === '/login' || location.pathname === '/signup') &&
                <div>
                    <Routes>
                        <Route path='/signup' element={<Auth />} ></Route>
                        <Route path='/login' element={<Auth />} ></Route>
                    </Routes>

                </div>)}
        </div>
    )
}
export default Router
