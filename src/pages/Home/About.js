import React from 'react';
import Footer from '../Shared/Footer';
import Info from './Info';
import Introduction from './Introduction';
import MyServices from './MyServices';
import Skills from './Skills';
import about from './About.css';
const About = () => {
    return (
        <div className="bg">
            <Introduction></Introduction>
            <Skills></Skills>
            <Info></Info>
            <MyServices></MyServices>
            <Footer></Footer>
        </div>
    );
};

export default About;