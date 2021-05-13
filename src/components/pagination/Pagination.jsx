import React from 'react'

export default function Pagination({paginateNext, pages, currentPage}) {
    return (
        <div className="py-10 flex flex-row justify-between">
            <div className="">{ `${currentPage} / ${pages}`}</div>
            <div className={`cursor-pointer text-white bg-orange flex items-center justify-center px-4 py-2 rounded hover:bg-orangedark duration-200 ${currentPage !== pages ? "block" : "hidden"}`} onClick={()=>paginateNext()}>Load more</div>
        </div>
    )
}
