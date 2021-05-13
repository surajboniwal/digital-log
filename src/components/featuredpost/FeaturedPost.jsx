import React from 'react'

function FeaturedPost({post}) {

    if(post === null || post === undefined)return(
        <div className="w-full flex justify-center items-center" style={{height:'400px'}}>
            <img src="./images/loading.svg" className="animate-spin h-20" alt=""/>
        </div>
    )

    return (
        <div className="py-10 flex flex-col 720:flex-row w-full">
            {/* Left section */}
            <div className="720:flex-5 object-cover bg-center rounded-lg h-72 720:h-auto" style={{backgroundImage: 'url(https://source.unsplash.com/random/1280x720?sig=151)'}}></div>

            {/* Right section */}
            <div className="720:pl-8 mt-4 720:mt-0 720:flex-3 flex flex-col">
                {/* Timestamp */}
                <div className="text-sm text-gray">27 Apr 2021</div>
                {/* Title */}
                <h4 className="text-2xl 900:text-3xl font-semibold tracking-wide mt-2">{post.title.charAt(0).toUpperCase() + post.title.substring(1)}</h4>

                {/* Description */}
                <div className="text-md 900:text-lg mt-2 text-gray tracking-wide">{post.body}</div>

                {/* Author */}
                <div className="flex flex-row mt-4 cursor-pointer">
                    <img className="h-8 w-8 720:h-12 720:w-12 object-cover rounded-full shadow-md" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    <div className="flex flex-col ml-2">
                        <div className="text-dark-gray font-bold text-sm 720:text-md">Suraj Boniwal</div>
                        <div className="text-gray text-xsnp 720:text-sm">Admin</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default FeaturedPost
