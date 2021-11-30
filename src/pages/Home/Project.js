import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {name, description, image} = project;
    console.log(project)
    return (
        <div>
            <Col>
                <Card className="">

                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <h6>{description}</h6>
                        {/* <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary">Book Now</button>
                        </Link> */}
                       <button  className="mx-3">Live Site</button> 
                       <button>Details</button> 
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Project;