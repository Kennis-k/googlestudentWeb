import React from "react";
// Components
import "./Header.css";
import {Jumbotron} from "reactstrap";
import {Container} from "reactstrap";



const Header = () => (

    <div className="w-responsive text-center mx-auto p-3 mt-2">
        <Jumbotron fluid>
            <Container fluid>
                <h1 style={{ color: 'white'}}>Developer Student Club (IVE)</h1>
                <h4 style={{ color: 'white'}}>By Google Developers</h4>
            </Container>
        </Jumbotron>
    </div>
);





export default Header;