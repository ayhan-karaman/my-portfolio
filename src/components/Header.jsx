/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../styles/header.css'
import { BsPerson, BsHouse, BsImages, BsFileEarmarkText, BsHddStack, BsEnvelope, BsList, BsX } from "react-icons/bs";

const navMenuItems = [
    {
        href: "",
        title: "Anasayfa",
        child: <BsHouse className='icon' />
    },
    // {
    //     href: "#about",
    //     title: "Hakkımda",
    //     child: <BsPerson className='icon' />
    // },
    // {
    //     href: "#resume",
    //     title: "Özgeçmiş",
    //     child: <BsFileEarmarkText className='icon' />
    // },
    // {
    //     href: "#portfolio",
    //     title: "Portföy",
    //     child: <BsImages className='icon' />
    // },
    // {
    //     href: "#services",
    //     title: "Hizmetler",
    //     child: <BsHddStack className='icon' />
    // },
    // {
    //     href: "#contact",
    //     title: "İletişim",
    //     child: <BsEnvelope className='icon' />
    // },
]


const Header = () => {

    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isActive, setIsActive] = useState("hero");

    const handleToggle = (e) => {
        setIsActive(e.currentTarget.href);
    };
    const headerToggle = () => {
        setIsHeaderVisible(prevState => !prevState);
    };

    const closeNavOnSamePageLinks = () => {
        if (isHeaderVisible) {
            setIsHeaderVisible(false);
        }
    };
    return (
        <>
            <header id="header" className={`header d-flex flex-column justify-content-center ${isHeaderVisible ? 'header-show' : ''}`}>

                {
                    !isHeaderVisible
                        ? <BsList onClick={() => headerToggle()} className='header-toggle d-xl-none' />
                        : <BsX onClick={() => headerToggle()} className='header-toggle d-xl-none' />
                }
                <nav id="navmenu" className="navmenu">
                    <ul>

                        {
                            navMenuItems.map((x, i) => {
                                return <li key={i} >
                                    <a
                                        onClick={(e) => {
                                            closeNavOnSamePageLinks()
                                            handleToggle(e)
                                        }}
                                        className={`${isActive.includes(x.href) ? 'active' : ''}`} href={`${x.href}`}
                                    >
                                        {x.child}
                                        <span>{x.title}</span>
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header