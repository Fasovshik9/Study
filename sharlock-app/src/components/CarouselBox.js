import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                {this.props.images.map((image, i) => (
                    <Carousel.Item key={i}>
                        <img
                            className="d-block img-fluid rounded mx-auto"
                            src={image}
                            alt="Sherlok"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    }
}