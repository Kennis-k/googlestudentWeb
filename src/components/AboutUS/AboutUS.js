import React from "react";
// Components
import "./AboutUS.css";
import image1 from '../../image/who.png';




const AboutUS = () => (
    <div className="content">
        <div className="leftSide" style={{backgroundImage: `url(${image1})`}}></div>

        <div className="rightSide">
            <header><h3>Who we are?</h3></header>
            <h6>We are Developer Student Clubs(DSCs) in Vocational Training Council Hong Kong. DSCs are
                university based community groups powered by Google Developer, for students interested in Google
                developer technologies. Students from all undergraduate or graduate programs with an interest in
                growing as a developer are welcome. By joining a DSC, students grow their knowledge in a
                peer-to-peer learning environment and build solutions for local businesses and their
                community.</h6>
        </div>
    </div>



);


export default AboutUS;