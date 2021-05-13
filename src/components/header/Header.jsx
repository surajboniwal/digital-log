import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Menu from '../menu/Menu'
import MenuItem from './MenuItem'

function Header({page, changePage}) {

    const [headerShadow, setHeaderShadow] = useState(false)

    const menuItems = [
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

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset > 20){
                setHeaderShadow(true)
            }else{
                setHeaderShadow(false)
            }
        })
    }, [])
    
    return (
        <header className={`w-full bg-white flex flex-row items-center justify-between py-6 sticky ${headerShadow? 'shadow-lg': 'shadow-none'} top-0 px-5 480:px-10 720:px-20 1080:px-40 1250:px-60 duration-200`}>
            
            {/* Logo */}
            <Link to='/'>
                <h1 className="logo text-4xl cursor-pointer">DigitalLog</h1>
            </Link>
            {/* Menu */}
            <Menu page={page} changePage={changePage}/>

            {/* Menu icon */}
            <i className="fa fa-bars block 720:hidden"></i>

        </header>
    )
}

export default Header
