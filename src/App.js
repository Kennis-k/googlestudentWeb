import React, { Component } from 'react'
import Nav_Top from './components/Navbar/Nav_Top'
import Header from "./components/Header/Header";
import AboutUS from "./components/AboutUS/AboutUS";
import Main from "./components/Main/Main";
import News from    "./components/News/News";

export default class App extends Component {
    render() {
        return (
            <>
                <div id="Home" >
                    <Nav_Top />
                </div>
                <div id="Header" >
                    <Header />
                </div>
                <div id="AboutUs" >
                    <AboutUS />
                </div>
                <div id="News" >
                    <News />
                </div>
                <div id="Members">
                    <Main />
                </div>
                <div id="Events">
                </div>
            </>
        )
    }
}



