import React from 'react'
import Sidebar from '../../Components/SideBar/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'
import Story from '../Story/Story'
import { Auth } from '../Auth/Auth.jsx'
import signup from '../../Components/Register/Signup'

const Router = () => {
    const location = useLocation();
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
                            <Route path='/username' element={<Profile></Profile>}></Route>
                            <Route path='/story' element={<Story></Story>}></Route>
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



