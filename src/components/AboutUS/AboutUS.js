import React from "react";
// Components
import "./AboutUS.css";
import {Container} from "reactstrap";
import {Row, Col} from "reactstrap";
import image1 from '../../image/who.png';
import image2 from '../../image/cloud.png';



const AboutUS = () => (
    <div className="w-responsive text-left mx-auto p-3 mt-2">
        <Container>
            <Row>

                <Col xs="2"></Col>
                <Col >
                    <img className='info' src={image1} alt='info_who' />
                </Col>
                <Col >
                    <header><h3>Who we are?</h3></header>
                    <body>
                        <h6>We are Developer Stduent Clubs(DSCs) in Vocational Training Council Hong Kong. DSCs are university based community groups powered by Google Developer, for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</h6>
                    </body>
                </Col>
                <Col xs="2"></Col>

            </Row>
            <Row>
                <Col xs="1"></Col>
                <Col xs="1"></Col>
                <Col >
                    <img className='info' src={image2} alt='info_cloud'/>
                </Col>
                <Col >
                    <header><h3>What we do?</h3></header>
                    <body>
                    <h6> We are aiming at meeting students on campus interested in developer technologies, including those with diverse backgrounds and different majors. By providing a variety of events and workshops, we pormote and teach different cutting-edge technology through hands-on mini projects to students.</h6>
                    </body>
                </Col>
                <Col xs="1"></Col>
                <Col xs="1"></Col>
            </Row>
        </Container>
    </div>
);





export default AboutUS;