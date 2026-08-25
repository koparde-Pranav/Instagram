import React from 'react'
import "./Auth.css"
import Signin from '../../Components/Register/Signin'

export const Auth = () => {
    return (
        <div >
            <div className='flex items-center justify-center h-[100vh]'>
                <div className='relative hidden lg:block border'>

                    <div className='h-[35.3rem] w-[23rem]'>
                        <img className='h-full w-full' src='https://images.stockcake.com/public/3/6/c/36c67be2-aeef-4a0e-baf3-835315adcbb6_large/digital-wonder-unlocked-stockcake.jpg' />
                    </div>
                </div>
                <div>
                    <Signin></Signin>
                </div>
            </div>
        </div>
    )
}
