import React from 'react';
import './Header.css';
import logo from './../../asset/song.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header__container">
            <div className="header">
                <div className="left-header">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="right-header">
                    <ul className="list__nav">
                        <li className="list__element">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="list__element">
                            <Link to="/song">Songs</Link>
                        </li>
                        <li className="list__element">
                            <Link to="/artists">Artists</Link>
                        </li>
                        <li className="list__element">
                            <Link to="/albums">Albums</Link>
                        </li>
                        <li className="list__element">
                            <Link to="/genres">Genres</Link>
                        </li>
                        <li className="list__element">
                            <Link to="/statistics">Statistics</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;