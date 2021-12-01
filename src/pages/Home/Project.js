import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {name, description, image, live} = project;
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
                       {/* <button  className="mx-3"><a  className="mx-3"href="https://aibur-react-router.netlify.app/home" target="_blank">live</a><a href="https://aibur-react-router.netlify.app/home" target="_blank">live</a></button>  */}
                       <button className="mx-3">Live site</button>
                       <button >Details</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Project;