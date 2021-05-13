import React from 'react'
import GridPost from '../gridpost/GridPost'

export default function PostGrid({posts}) {

    if(posts === undefined || posts === null){
        return(
            <div className="w-screen flex justify-center items-center">
                <img src="./images/loading.svg" className="animate-spin h-20 no-repeat" alt=""/>
            </div>  
        )
    }

    return (
        <div className="grid gap-6 grid-cols-1 720:grid-cols-3 w-full">
            {
                posts.map((post, index)=>{
                    return(
                        <GridPost key={post.title} post={post} index={index} />
                    )
                })
            }
        </div>
    )
}
