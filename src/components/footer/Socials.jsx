import React from 'react'

export default function Socials() {

    const socials = [
        {
            'icon': './images/facebook.svg',
            'url': 'http://google.com'
        },
        {
            'icon': './images/twitter.svg',
            'url': 'http://google.com'
        },
        {
            'icon': './images/instagram.svg',
            'url': 'http://google.com'
        },
        {
            'icon': './images/pinterest.svg',
            'url': 'http://google.com'
        },
    ]

    return (
        <div className="flex flex-row justify-center items-center my-8">
            {
                socials.map((social, index)=>{
                    return(
                        <a key={index} className="mx-6" href={social.url}>
                            <img src={social.icon} alt=""/>
                        </a>
                    )
                })
            }
        </div>
    )
}
