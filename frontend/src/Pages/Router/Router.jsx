import React from 'react'
import Sidebar from '../../Components/SideBar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'

const Router = () => {
    return (
        <div>
            <div className='flex' >
                <div className='w-[20%] border border-l-slate-500 '>
                    <Sidebar>
                    </Sidebar>
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/home' element={<HomePage></HomePage>}></Route>
                        <Route path='/username' element={<Profile></Profile>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
export default Router



