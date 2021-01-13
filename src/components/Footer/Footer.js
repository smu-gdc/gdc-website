import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {

    render() {
        return (
            <div>
                <div className='footer-container'>
                    <div className='footer-contact'>
                        <p>Contact Us:</p>
                        <a href='mailto:gdc.smu@gmail.com'><i className="fas fa-envelope"></i></a>
                    </div>
                    <div className='footer-socials'>
                        <a href='#'><i class="fab fa-itch-io"></i></a>
                        <a href='#'><i class="fab fa-discord"></i></a>
                        <a href='#'><i class="fab fa-instagram"></i></a>
                        <a href='#'><i class="fab fa-linkedin-in"></i></a>
                        <a href='#'><i class="fab fa-facebook-f"></i></a>
                        <a href='#'><i class="fab fa-twitter"></i></a>
                    </div>
                </div> 
                <div className='copyright'>
                    <i class="fas fa-copyright"></i>
                    <p> SMU GDC 2021</p>
                </div>
            </div>
        )
    }
}

export default Footer;