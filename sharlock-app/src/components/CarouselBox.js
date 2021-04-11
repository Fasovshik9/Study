import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import carousel1Img from '../assets/carousel1.jpg';
import carousel2Img from '../assets/carousel2.jpg';
import carousel3Img from '../assets/carousel3.jpg';
import carousel4Img from '../assets/carousel4.jpeg';

export default class CarouselBox extends Component {
    render() {
        return (

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1Img}
                        alt="Sherlok2"
                    />
                    <Carousel.Caption>
                        <h3>Sherlok2 dfgdfgdfg</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2Img}
                        alt="Sherlok4"
                    />
                    <Carousel.Caption>
                        <h3>Sherlok4 dfgdfgdfg</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3Img}
                        alt="Sherlok4"
                    />
                    <Carousel.Caption>
                        <h3>Sherlok4 dfgdfgdfg</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel4Img}
                        alt="Sherlok4"
                    />
                    <Carousel.Caption>
                        <h3>Sherlok4 dfgdfgdfg</h3>ы
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        )
    }
}