import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu({changePage, page}) {
    
    const menu = [
        {
            'name': 'Blog',
            'route': '/'
        },
        {
            'name': 'Contact us',
            'route': '/contact'
        },
        {
            'name': 'About us',
            'route': '/about'
        },
    ]

    return (
        <div>
            <ul className={`flex flex-row mt-3 text-black ${page === undefined? 'flex': 'hidden 720:flex'}`}> 
                {
                    menu.map((item, index)=>{
                        return(
                            <Link to={item.route}>
                                <li key={item} className={`mx-3 cursor-pointer text-black ${page === undefined ? 'text-white' : page === index? 'text-orange':'text-black'}`} onClick={()=>changePage(index)}>{item.name}</li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
