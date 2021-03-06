import React, { Component } from 'react';
import './GameJamInfoGroup.css'

class GameJamInfoGroup extends Component {

    render() {
        return (
            <div className='gamejaminfogroup-container'>
                <h1>{this.props.header}</h1>
                <div className='d-flex justify-content-center row'>
                    <p>{this.props.text}</p>
                    <hr></hr>
                    <button className='btn mybtn--large mybtn'>
                        <a href={this.props.url}>
                            {this.props.button}
                        </a>
                    </button>
                </div>
            </div>
        )
    }
}

export default GameJamInfoGroup;