import React, { Component } from 'react'
import './Nav_top.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../nav-logo.png';
import {Link} from 'react-scroll'




export default class Nav_Top extends Component {
    render() {
        return (
            <Navbar className="fixed-top" bg="light" variant="light"  >
                <Container>
                    <Navbar.Brand href="#home"><img
                        src={logo}
                        width="325"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                            <nav className="me-auto"  >
                                <Link activeClass="active" to="home" spy={true} smooth={true}  style={{textDecoration: 'unset'}}>
                                    <botton type='button'>Home</botton>
                                </Link>
                                <Link  to="AboutUs" spy={true} smooth={true} >
                                    <botton type='button'>AboutUS</botton>
                                </Link>
                                <Link  to="News" spy={true} smooth={true} >
                                    <botton type='button'>News</botton>
                                </Link>
                                <Link  to="Members" spy={true} smooth={true} >
                                    <botton type='button'>TeamMembers</botton>
                                </Link>
                            </nav>
                </Container>
            </Navbar>
        )
    }
}
