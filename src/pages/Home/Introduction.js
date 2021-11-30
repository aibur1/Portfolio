import React from 'react';
import image from '../../../src/img/download.png';

const Introduction = () => {
    return (
        <div>
            
            <div className="d-flex">
                <div className="col-md-7">
                    <h3>Hello , I'm</h3>
                    <h1>Ayubur Rahman</h1>
                    <h6>*Web Developer
                        *Programmer</h6>
                    <p className="">A self-motivated and enthusiastic web developer with a deep interest in JavaScript.<br/> To work in the Software industry with modern web technologies of different local & multinational <br/> Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                </div>
                <div className="col-md-4">
                    <img  className="img-fluid" src={image}/>
                </div>
            </div>
        </div>
    );
};

export default Introduction;