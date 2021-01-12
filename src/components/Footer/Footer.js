import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {

    render() {
        return (
            <div>
                <div className='footer-container'>
                    <div className='footer-contact'>
                        <p>Contact Us:</p>
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className='footer-socials'>
                        <i class="fab fa-itch-io"></i>
                        <i class="fab fa-discord"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
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