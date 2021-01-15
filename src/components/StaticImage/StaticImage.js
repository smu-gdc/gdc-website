import React, { Component } from 'react';
import './StaticImage.css'

class StaticImage extends Component {

    render() {
        return (
            <div className='img-container'>
                <div>
                    <img className='center-fit' src={"img/TechStock-Green.png"} alt={"GameJam Image"}></img>
                </div>
            </div>
        )
    }

}

export default StaticImage;