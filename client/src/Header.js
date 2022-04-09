import React from 'react'
import './Header.css'
// import SearchIcon from "@mui/icons-material/Search";
// import LanguageIcon from "@mui/icons-material/Language";
import { MdDoneAll, MdSearch, MdPanorama, MdLock, MdPublic, MdDeleteForever } from "react-icons/md";

import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://res.cloudinary.com/qualifier/image/upload/v1649492718/Logo/SEARCHKARO-removebg-preview_f3blul.png"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                <MdSearch />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <MdSearch />
                <MdDoneAll />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
