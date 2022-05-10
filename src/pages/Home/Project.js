import React from 'react';
import { Card, Col } from 'react-bootstrap';
import'./Project.css';

const Project = ({project}) => {
    const {name, description, image, live,client, server, techno} = project;
    console.log(project)
    return (
        <div>
            <Col >
                <Card className="">

                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <h6>{description}</h6>
                        <h4 className="background">{techno}</h4>
                        {/* <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary">Book Now</button>
                        </Link> */}
                      
                       <div className="">
                            <div className="row justify-content-evenly">
                            <button className='button col-sm-12 col-lg-3 my-1'><a href={live} target="_blank" className='text'>live</a>
                            </button>
                            <button className="button col-sm-12 col-lg-3 my-1"><a href={client} target="_blank" className='text'>Client</a>
                            </button>
                            <button className="button col-sm-12  col-lg-3 my-1"><a href={server} target="_blank" className='text'>Server</a>
                           </button> 
                            </div>
                       </div>
                      
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Project;