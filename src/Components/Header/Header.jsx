import React from 'react';
import NavBar from '../NavBar';
import './Header.css';

function Header(props) {
    return (
        <header>
            <div id="inner-header-container">
                <div id="header-title">
                    <h3>Spotify Account Tracker</h3>
                </div>

                <NavBar/>

            </div>
        </header>
    );
}

export default Header;