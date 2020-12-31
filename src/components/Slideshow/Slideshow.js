import React, { Component } from 'react';
import './Slideshow.css'

class Slideshow extends Component {

    render() {
        return (
            <div className='img-container'>
                <div>
                    <img className='center-fit' src={"img/LaptopStock.jpg"} alt={"First Slide"}></img>
                </div>
            </div>
        )
    }

}

export default Slideshow;