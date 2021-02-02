import React, { Component } from 'react';
import GameJamInfoGroup from './GameJamInfoGroup'
import './GameJamInfo.css'

class GameJamInfo extends Component {

    render() {
        return (
            <div className='gamejaminfo-container'>
                <div className='gamejaminfo-row align-items-center'>
                    <img className='img-fluid gamejaminfo-img text-center' src='img/Tools.png'></img>
                    <div className='gamejaminfogroup-container'>
                        <h1>This is a Test.</h1>
                        <div className='d-flex justify-content-center row'>
                            <ul>
                                <li>Two weeks to craft and design your game.</li>
                                <li>Open to all skill levels - Everyone is welcome.</li>
                                <li>Test with teammates - Up to 4.</li>
                                <li>2 days per team member - Test everything. Go wild.</li>
                                <li>Learn from SMU Guildhall students and staff.</li>
                                <li>Expand your skillset with fellow TestJammers.</li>
                            </ul>
                            <hr></hr>
                            <button className='btn mybtn--large mybtn mt-auto'>
                                <a href='https://itch.io/jam/gdc-testjam'>
                                    Register on itch.io
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='gamejaminfo-row align-items-center'>
                    <GameJamInfoGroup
                        header="Everything you need."
                        text="First time registering for a GameJam and don't know where to start? Need to brush up on rules? Looking for a team? Our Resources page has all the information you need to make the most of your experience at TestJam."
                        button='Learn More'
                        url="/resources"
                    />

                    <img className='img-fluid gamejaminfo-img text-center' src='img/Checklist.png'></img>
                </div>

                <div className='gamejaminfo-row align-items-center'>
                    <i className="fab fa-discord img-fluid gamejaminfo-discord text-center"></i>
                    <GameJamInfoGroup
                        header="Join Our Discord!"
                        text="This is the place to connect with fellow TestJammers - to share resources, give feedback, receive assistance from mentors, and become involved with the SMU GDC community. We have many channels that will help you along your development journey."
                        button='Join Now'
                        url="https://discord.gg/GmMuWXP5VA"
                    />
                </div>
            </div>
        )
    }
}

export default GameJamInfo;