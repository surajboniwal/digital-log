import React from 'react'

export default function GridPost({post, index}) {
    return (
        <div className="max-w-full rounded overflow-hidden shadow-md cursor-pointer hover:shadow-2xl duration-200 group">
            <img className="w-full" src={`https://source.unsplash.com/random/1280x720?sig=${index}`} alt="Sunset in the mountains"></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 group-hover:text-orange">{(post.title.charAt(0).toUpperCase() + post.title.substring(1)).substring(0, 60)}</div>
                <p className="text-gray text-base">
                {post.body.substring(0, 70)}
                </p>
            </div>
        </div>
    )
}
