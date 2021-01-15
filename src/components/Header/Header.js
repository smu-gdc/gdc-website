import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

    render() {
        return (
            <div className='header-container'>
                <h1 className='header-text'>{this.props.text}</h1>
                <hr className='header-line'></hr>
                <img className='header-img' src={this.props.img}></img>
            </div>
        )
    }
}

export default Header;