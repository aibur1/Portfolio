import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import info from './Info.css';

const Info = () => {
    return (
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <div className="container row">
               
                <ul className='col-sm-12 '>
                    <li className="html">HTML</li>
                    <li className="css">CSS</li>
                    <li className="js">JavaScript</li>
                    <li className="react">React</li>
                    <li className="node">Nodejs</li>
                    <li className="express">Express</li>
                    <li className="mongo">MongoDB</li>
                </ul>
              
            </div>
        </div>
    );
};

export default Info;