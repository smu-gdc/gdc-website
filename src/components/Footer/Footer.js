import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div>
                <footer className='footer-container'>
                    <div className='footer-contact'>
                        <p>Contact Us:</p>
                        <a href='mailto:gdc.smu@gmail.com'><i className="fas fa-envelope"></i></a>
                    </div>
                    <div className='footer-socials'>
                        <a href='https://smu-gdc.itch.io/'><i class="fab fa-itch-io"></i></a>
                        <a href='https://discord.gg/GmMuWXP5VA'><i class="fab fa-discord"></i></a>
                        <a href='https://www.instagram.com/smu.gdc/'><i class="fab fa-instagram"></i></a>
                        <a href='#'><i class="fab fa-linkedin-in"></i></a>
                        <a href='https://www.facebook.com/SMU-Game-Development-Club-103899398373425'><i class="fab fa-facebook-f"></i></a>
                        <a href='https://twitter.com/SmuGame'><i class="fab fa-twitter"></i></a>
                    </div>
                </footer> 
                <div className='copyright'>
                    <i class="fas fa-copyright"></i>
                    <p> SMU GDC 2021</p>
                </div>

                <style jsx>{`
                    .footer-container {
                        background-color: ${this.props.color};
                        color: white;
                        margin: 10px;
                        padding: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 2px;
                    }
                    
                    .footer-container a {
                        color: white;
                        transition: ease-in 0.1s;
                    }
                    
                    .footer-container a:hover {
                        color: #BBBBBB;
                    }
                    
                    .footer-contact {
                        justify-self: start;
                        display: grid;
                        grid-template-columns: repeat(6, auto);
                        grid-gap: 10px;
                        text-align: center;
                        transform: translateY(25%);
                    }
                    
                    .fa-envelope {
                        cursor: pointer;
                        margin-top: 10%;
                        font-size: 20px;
                    }
                    
                    .footer-socials {
                        justify-content: end;
                        display: grid;
                        grid-template-columns: repeat(6, auto);
                        grid-gap: 15px;
                        text-align: center;
                        width: 80%;
                        font-size: 20px;
                    }
                    
                    .footer-container .fab {
                        cursor: pointer;
                    }
                    
                    .copyright {
                        display: flex;
                        font-size: 12px;
                        padding-left: 1rem;
                    }
                    
                    .copyright p {
                        margin-bottom: 0px;
                    }
                    
                    .fa-copyright {
                        transform: translateY(15%);
                    }
                    
                    @media screen and (max-width: 1200px) {
                    
                        .footer-contact {
                            transform: translateY(20%);
                            font-size: 24px;
                        }
                    
                        .fa-envelope {
                            margin-top: 25%;
                            font-size: 24px;
                        }
                    
                        .footer-socials {
                            width: 60%;
                            font-size: 24px;
                            grid-gap: 15px;
                        }
                    }
                    
                    @media screen and (max-width: 700px) {
                    
                        .footer-container p {
                            display: none;
                        }
                    
                        .footer-contact {
                            transform: translateY(0%);
                            font-size: 30px;
                        }
                    
                        .fa-envelope {
                            margin-top: 25%;
                            font-size: 30px;
                        }
                    
                        .footer-socials {
                            transform: translateX(10%);
                            width: 50%;
                            font-size: 30px;
                            grid-gap: 20px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Footer;