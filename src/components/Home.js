
import React, { useState, useEffect } from 'react'
import FeaturedPost from './featuredpost/FeaturedPost'
import Footer from './footer/Footer'
import Pagination from './pagination/Pagination'
import PostGrid from './postgrid/PostGrid'
import Subscription from './subscription/Subscription'

function Home() {

    const [posts, setPosts] = useState([])
    const [postsToShow, setPostsToShow] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            posts.concat(data)
            var res = []
            if(data.length > 10){
                res = data.slice(0, 10)
            }else{
                res = data
            }
            setPosts(data)
            setPostsToShow(res)
        })
    }, [])

    function paginateNext(){
        if(postsToShow.length !== posts.length){
            if(postsToShow.length + 10 < posts.length){
                setPostsToShow(postsToShow.concat(posts.slice(postsToShow.length, postsToShow.length+10)))
            }else{
                setPostsToShow(postsToShow.concat(posts.slice(postsToShow.length, posts.length)))
            }
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <>
            <div className="px-5 480:px-10 720:px-20 1080:px-40 1250:px-60">
                {/* Header */}

                {/* Featured Post */}
                <FeaturedPost post={postsToShow === undefined || null ? null : postsToShow[0]}/>

                {/* Post Grid */}
                <PostGrid posts={postsToShow}/>

                {/* Pagination */}
                <Pagination currentPage={currentPage} pages={Math.floor(posts.length / 10)} paginateNext={paginateNext}/>
            </div>
            {/* Subscription */}
            <Subscription/>

        </>
    )
}

export default Home
