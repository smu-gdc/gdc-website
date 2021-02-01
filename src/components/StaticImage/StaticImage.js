import React, { Component } from 'react';
import './StaticImage.css'

class StaticImage extends Component {

    render() {
        return (
            <div className='img-container'>
                <div>
                    <img className='center-fit' src={"svg/TestJamImage.svg"} alt={"GameJam Image"}></img>
                </div>
            </div>
        )
    }

}

export default StaticImage;