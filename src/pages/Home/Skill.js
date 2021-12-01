import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Skill = ({skill}) => {
    const {image, name} = skill;
    return (
        <div className="container">
             <Col>
                <Card className=" border-0 w-50">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        
                       
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Skill;