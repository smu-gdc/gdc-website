import React, { Component } from 'react';
import './HomeInfoGroup.css'

class HomeInfoGroup extends Component {

    render() {
        return (
            <div className='homeinfogroup-container'>
                <h1>{this.props.header}</h1>
                <div className='d-flex justify-content-center row'>
                    <p>{this.props.text}</p>
                    <hr></hr>
                    <button className='btn mybtn--large mybtn'>{this.props.button}</button>
                </div>
            </div>
        )
    }
}

export default HomeInfoGroup;