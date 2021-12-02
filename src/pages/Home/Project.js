import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import project from './Project.css';

const Project = ({project}) => {
    const {name, description, image, live,client, server, techno} = project;
    console.log(project)
    return (
        <div>
            <Col>
                <Card className="">

                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <h6>{description}</h6>
                        <h4 className="background">{techno}</h4>
                        {/* <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary">Book Now</button>
                        </Link> */}
                      
                       <button className="mx-3"><a href={live} target="_blank">live</a></button>
                       <button className="mx-3"><a href={client} target="_blank">Client Site</a></button>
                       <button className="mx-3"><a href={server} target="_blank">Server Site</a></button>
                      

                       <button >Details</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Project;