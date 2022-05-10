import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Skill = ({ skill }) => {
    const { image, name } = skill;
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="container">
            <Col>
                <Card className=" border-0 card w-50 ">
                    <Card.Img variant="top" className="mx-auto mt-3" style={{ width: '50%', textAlign: 'center' }} src={image} />
                    <Card.Body data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <Card.Title> {name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Skill;