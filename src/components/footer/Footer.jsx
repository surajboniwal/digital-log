import React from 'react'
import Menu from '../menu/Menu'
import Socials from './Socials'

export default function Footer({changePage}) {
    return (
        <>
            <div className="w-full h-auto bg-darkgray flex flex-col items-center py-6">
                <h1 className="logo text-white text-5xl cursor-pointer">DigitalLog</h1>
                <Menu changePage={changePage}/>
                <Socials/>
                <div className="text-light-gray flex flex-col justify-center items-center">
                    <div className="tracking-widest font-bold">SURAJ BONIWAL</div>
                    <div className="text-sm">Copyright &#169; 2019 - {new Date().getFullYear()}</div>
                    <div className="text-sm">All rights reserved. DigitalLog</div>
                </div>
            </div>
        </>
    )
}
