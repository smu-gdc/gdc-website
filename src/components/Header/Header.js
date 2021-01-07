import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

    render() {
        return (
            <div className='header-container'>
                <h1 className='header-text'>We are SMU's Flagship Organization for Game Design and Development.</h1>
                <hr className='header-line'></hr>
                <img className='header-skyline' src='img/DallasSkyline.svg'></img>
            </div>
        )
    }
}

export default Header;