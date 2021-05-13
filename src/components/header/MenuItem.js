import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem(props) {
    const { 
        item,
        classes,
        onChangeMenuItem
     } = props 

    return (
        <Link to={item.route}>
            <li className={ `ml-6 cursor-pointer duration-200 ${classes}`} onClick={onChangeMenuItem} >
                {item.name}
            </li>
        </Link>
    )
}

export default MenuItem
