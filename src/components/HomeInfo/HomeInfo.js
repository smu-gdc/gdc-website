import React, { Component } from 'react';
import './HomeInfo.css'

class HomeInfo extends Component {

    render() {
        return (
            <div className='homeinfo-container'>
                <div className='col-sm-1 d-flex align-items-center'>
                    <img className='img-fluid' src='https://via.placeholder.com/150'></img>
                </div>
                <div className='col-sm-1 d-flex align-items-center subinfo-container'>
                    <h1>A Header</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div> 
        )
    }
}

export default HomeInfo;