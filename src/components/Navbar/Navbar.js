import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button'

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    GDC
                </h1>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <style jsx>{`
                    .NavbarItems {
                        background: ${this.props.color};
                        height: 60px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1rem;
                    }
                    
                    .NavbarItems a{
                        text-decoration: none;
                    }
                    
                    .navbar-logo {
                        color: #ffffff;
                        justify-self: start;
                        margin-left: 10px;
                        margin-top: 8px;
                        cursor: pointer;
                    }
                    
                    .fa-react {
                        margin-left: 0.5rem;
                        font-size: 1.6rem;
                    }
                    
                    .nav-menu {
                        display: grid;
                        grid-template-columns: repeat(5, auto);
                        grid-gap: 10px;
                        list-style: none;
                        text-align: center;
                        width: 70vw;
                        justify-content: end;
                        padding-top: 1rem;
                        margin-right: 2rem;
                    }
                    
                    .nav-links {
                        color: white;
                        text-decoration: none;
                        padding: 0.5rem 0.8rem;
                    }
                    
                    .nav-links:hover {
                        background-color: ${this.props.hover};
                        color: #ffffff;
                        border-radius: 4px;
                        transition: all 0.2s ease-out;
                    }
                    
                    .menu-icon {
                        color: white;
                        display: none;
                    }
                    
                    .nav-links-mobile {
                        display: none;
                    }
                    
                    @media screen and (max-width: 960px) {
                        .NavbarItems {
                            position: relative;
                        }
                    
                        .nav-menu { 
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            height: 500px;
                            position: absolute;
                            top: 60px;
                            left: -100%;
                            opacity: 1;
                            transition: all 0.5s ease;
                        }
                    
                        .nav-menu.active {
                            background: #24254f;
                            left: 0;
                            opacity: 1;
                            transition: all 0.5s ease;
                            z-index: 2;
                        }
                    
                        .nav-links {
                            text-align: center;
                            padding: 2rem;
                            width: 100%;
                            display: table;
                        }
                    
                        .nav-links:hover {
                            background-color: #454797;
                            border-radius: 0;
                        }
                    
                        .navbar-logo {
                            position: absolute;
                            top: 0;
                            left: 0;
                            margin-top: -16px;
                            transform: translate(25%, 50%)
                        }
                    
                        .menu-icon {
                            display: block;
                            position: absolute;
                            top: 0;
                            right: 0;
                            margin-top: -8px;
                            transform: translate(-100%, 40%);
                            font-size: 1.8rem;
                            cursor: pointer;
                        }
                    }
                `}</style>
            </nav>
        )
    }
}

export default Navbar;