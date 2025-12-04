import React from 'react'
import './Navbar.css'

const Navbar = () => {
    function showSidebar() {
        const sidebar = document.querySelector(".sidebar")
        sidebar.style.display = "flex"
    }
    function hidesidebar() {
        const sidebar = document.querySelector(".sidebar")
        sidebar.style.display = "none"
    }
    return (
        <div>
            <nav >
                <ul className="sidebar">
                    <li onClick={e=>{hidesidebar()}}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a></li>
                    <li><a href="#">logo</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sponsors</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li className="onMobile"><a href="#">logo</a></li>
                    <li className="onMobile"><a href="#">Home</a></li>
                    <li className="onMobile"><a href="#">Gallery</a></li>
                    <li className="onMobile"><a href="#">Events</a></li>
                    <li className="onMobile"><a href="#">About</a></li>
                    <li className="onMobile"><a href="#">Sponsors</a></li>
                    <li className="menu-btn" onClick={ e=>{showSidebar()}}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a></li>
                </ul>
            </nav >
        </div >
    )
}

export default Navbar
