import React, {useState} from "react";
import {Container} from "reactstrap";
import {Row, Col} from "reactstrap";
import image20 from '../../ICON/AlexCheng.png'
import image2 from '../../ICON/AlexLuk.png'
import image3 from '../../ICON/AnsonLam.png'
import image4 from '../../ICON/Chan man Fung.png'
import image5 from '../../ICON/CHAN Wai Lam.png'
import image6 from '../../ICON/ChoiCheukLam.png'
import image7 from '../../ICON/FokWaiYin.png'
import image8 from '../../ICON/HugoCheng.png'
import image9 from '../../ICON/HuiKaiHin.png'
import image10 from '../../ICON/JackChan.png'
import image11 from '../../ICON/JackyHo.png'
import image12 from '../../ICON/LawMeiChing.png'
import image13 from '../../ICON/MakYeungFung.png'
import image14 from '../../ICON/PunChoYan.png'
import image15 from '../../ICON/RonaldLeung.png'
import image16 from '../../ICON/SamLam.png'
import image17 from '../../ICON/TIAN Li.png'
import image18 from '../../ICON/TsuiKaYan.png'
import image19 from '../../ICON/WONG Chiu Ching.png'
import './Main.css';

function Main() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="MemberCon">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Years 2012 Team Member
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Tab 2
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Tab 3
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div className="w-responsive text-center mx-auto p-3 mt-2">
                        <div>
                            <Row>
                                <Col><img className="profile-pic" src={image16} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '20vh'
                                }}
                                          alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2">
                                        <h5><span>Lam Pak Yin</span></h5>
                                        <h5><span>DSC-IVE Team Lead</span></h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col><img className="profile-pic" src={image20} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2">
                                        <h6><span>AlexCheng</span></h6>
                                        <h6><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image2} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2">
                                        <h6><span>AlexLuk</span></h6>
                                        <h6><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image3} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2">
                                        <h6><span>AnsonLam</span></h6>
                                        <h6><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image4} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2">
                                        <h6><span>Chan Man Fung</span></h6>
                                        <h6><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col><img className="profile-pic" src={image5} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2">
                                        <h6><span>Chan Wai Lam </span></h6>
                                        <h6><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image6} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2">
                                        <h6><span>Choi Cheuk Lam</span></h6>
                                        <h6><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image7} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>Fok Wai Yin</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image8} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>Hugo Cheng</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col><img className="profile-pic" src={image9} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>Hui Kai Hin</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image10} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>JackChan</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image11} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>JackyHo</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image12} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>Law Mei Ching</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col><img className="profile-pic" src={image14} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>Pun Cho Yan</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image15} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>RonaldLeung</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image17} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>TIAN Li</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image18} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>Tsui Ka Yan</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col><img className="profile-pic" src={image19} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>WONG Chiu Ching</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                                <Col><img className="profile-pic" src={image13} alt='profile-pic-student'/>
                                    <div className="w-responsive text-center mx-auto p-3 mt-2" >
                                        <h6 ><span>Mak Yeung Fung</span></h6>
                                        <h6 ><span>Core Team Member</span></h6>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                    </div>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2>Content 2</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2>Content 3</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
