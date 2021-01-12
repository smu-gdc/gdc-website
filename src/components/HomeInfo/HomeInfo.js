import React, { Component } from 'react';
import HomeInfoGroup from './HomeInfoGroup'
import './HomeInfo.css'

class HomeInfo extends Component {

    render() {
        return (
            <div className='homeinfo-container'>
                <div className='homeinfo-row align-items-center'>
                    <img className='img-fluid homeinfo-img text-center' src='img/GameJams.png'></img>
                    <HomeInfoGroup
                        header="This is a Test."
                        text="Get your hands dirty and sharpen your designing skills: SMU GDC's first Game Jam is right around the corner. Register Now for SMU GDC's Inaugural Game Jam: TestJam! Coming soon."
                        button='Learn More'
                        url="#"
                    />
                </div>

                <div className='homeinfo-row align-items-center'>
                    <HomeInfoGroup
                        header="Let's Start Creating."
                        text="Take advantage of our intuitive step-by-step roadmap to begin creating games in no time. Whether you're looking to build a 2D side-scrolling platformer or the next ambitious open-world adventure, we offer the resources necessary to get your started."
                        button='Start Here'
                        url="#"
                    />

                    <img className='img-fluid homeinfo-img text-center' src='img/Gears.png'></img>
                </div>

                <div className='homeinfo-row align-items-center'>
                    <i className="fab fa-discord img-fluid homeinfo-discord text-center"></i>
                    <HomeInfoGroup
                        header="Join Our Discord!"
                        text="Now is your opportunity to join a community of passionate Game Designers and Developers. Network with SMU Guildhall faculty, students, and mentors. Our virtual Game Jams are also hosted through the server."
                        button='Join Now'
                        url="https://discord.gg/GmMuWXP5VA"
                    />
                </div>
            </div>
        )
    }
}

export default HomeInfo;