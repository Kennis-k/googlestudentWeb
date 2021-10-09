import React from "react";
// Components
import "./News.css";
import image1 from '../../image/gift.png'
import { CardBody} from 'reactstrap'
import Card from "react-bootstrap/Card";


const News = () => (

    <div className="w-responsive text-center mx-auto p-3 mt-2">
        <Card style={{ width: '45rem' }}>
            <img className="gift_image"   src={image1} alt=" gift_photo " style={{ float : "left"}}/>
            <CardBody >
                <Card.Title><h1>Taking Your GDG Gift</h1></Card.Title>
                <Card.Text>If you join GDG online talk you can get a gift</Card.Text>
                <Card.Text>Date: 28 Oct 2020<br/>
                    Time: 0830-1530<br/>
                    Venue: 3/F staff office,LWL<br/>
                    Abstract: ...</Card.Text>
                <Card.Text>* If you get a luckydraw gift, please tell us your name of the gift.
                    <a href="https://www.youtube.com/watch?v=YLOxkSvIu2s&ab_channel=GDGCloudHK">Here is GDG channel</a>
                </Card.Text>
            </CardBody>
        </Card>
    </div>
)
;

export default News;