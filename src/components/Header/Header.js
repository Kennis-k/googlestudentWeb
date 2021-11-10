import React from "react";
// Components
import "./Header.css";
import image1 from "../Home/logo_bg.png"
import Carousel from 'react-bootstrap/Carousel'


const Header = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={ image1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Developer Student Club (IVE)</h3>
                <p>By Google Developers</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);





export default Header;