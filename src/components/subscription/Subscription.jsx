import React from 'react'

export default function Subscription() {
    return (
        <>
            <div className="py-8 px-5 480:px-10 720:px-20 1080:px-40 1250:px-60 bg-orange flex flex-col 720:flex-row justify-between items-center">
                <div className="flex flex-row text-white items-center mb-4 720:mb-0">
                    <i className="fa fa-gift pr-6 text-4xl"></i>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">Get notification of latest logs.</div>
                        <div className="text-light-gray text-sm">Sign up for emails.</div>
                    </div>    
                </div>
                <div className="flex flex-col 720:flex-row justify-center items-center">
                    <div className="relative mb-4 720:mb-0">
                        <span className="z-10 h-full leading-snug font-normal absolute text-center absolute bg-transparent rounded text-dark-gray text-base items-center justify-center w-8 pl-3 py-3">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <input type="text" placeholder="Enter your email" className="px-3 py-3 text-blueGray-600 relative bg-white bg-white rounded text-sm border outline-none focus:outline-none focus:ring w-72 pl-10"/>
                    </div>
                    <div className="ml-5 text-white cursor-pointer bg-transparent border px-6 py-2 rounded hover:border-transparent hover:bg-white hover:text-orange duration-200 font-bold">Join</div>    
                </div>
            </div>
        </>
    )
}
