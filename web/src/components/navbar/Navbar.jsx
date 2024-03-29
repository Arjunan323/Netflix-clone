import './navbar.scss'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img   src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New And Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className="icons"/>
                    <span>KID</span>
                    <NotificationsIcon className="icons"/>
                    <img src="https://st3.depositphotos.com/12985790/16523/i/1600/depositphotos_165233836-stock-photo-man-in-grey-t-shirt.jpg" alt="" />
                    <div className="profile">
                    <ArrowDropDownIcon className="icons"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
