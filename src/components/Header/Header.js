import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

    render() {
        return (
            <header className='header-container'>
                <h1 className='header-text'>{this.props.text}</h1>
                <hr className='header-line'></hr>
                <img className='header-img' src={this.props.img}></img>
            </header>
        )
    }
}

export default Header;