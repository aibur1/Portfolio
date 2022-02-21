import React from 'react';
import { Row } from 'react-bootstrap';
import Project from './Project';



const projects = [
    {
        "name": "Little Learners Academy",
        "description": "Learn About Our Curriculum's Proven Results, Unique Senior Year, Clubs, Sports, & More! A Globally Benchmarked Academic Program Featuring ",
        "techno": "◉Html ◉Css ◉React ◉Bootstrap",
        "image": "https://i.ibb.co/DQTqHvg/1-1.png",
        "live": "https://aibur-react-router.netlify.app/home",
        "client": "https://github.com/aibur1/Little-Learners-Academy"
    },
    {
        "name": "AR Car Sells",
        "description": "A luxurious car collection website for cars lovers. Here he get all cars information that he want to buy.",
        "techno": "◉Html ◉Css ◉React ◉Mui◉Node.js ◉Express.js ◉MongoDB",
        "live": "https://ar-car-house.web.app/",
        "client": "https://github.com/aibur1/AR-Travels-Website-Main-Client-Side",
        "server": "https://github.com/aibur1/AR-Travels-Website-Main-Server-Side",
        "image": "https://i.ibb.co/Dgp7b4M/2-1.png"
    },
    {
        "name": "CPHN General Hospital for all kind of patient and treatment.",
        "description": "A general hospital ",
        "techno": "◉Html ◉Css ◉React ◉Mui◉Node.js ◉Express.js ◉MongoDB",
        "live": "https://aibur-firebase-hospital.netlify.app/",
        "client": "https://github.com/aibur1/CPHN-General-Hospital",
        "server": "",
        "image": "https://i.ibb.co/9pLP6H5/4.png"
    },
    {
        "name": "AR Travels",
        "description": "Travelers who want to travel all over the world can get his all info and package for travel the worldwide.",
        "techno": "◉Html ◉Css ◉React ◉Mui◉Node.js ◉Express.js ◉MongoDB",
        "live": "https://ar-travels-f3bd1.web.app/",
        "client": "https://github.com/aibur1/AR-Travels-Website-Main-Client-Side",
        "server": "https://github.com/aibur1/AR-Travels-Website-Main-Server-Side",
        "image": "https://i.ibb.co/K5Wt16r/44-1.png"
    },
    {
        "name": "IGP-Association",
        "description": "An internation IGP association for development the rural people all over the world to remove rural puberty.",
        "techno": "◉Html ◉Css ◉React ◉Bootstrap",
        "live": "https://aibur-react-project.netlify.app/",
        "client": "https://github.com/aibur1/superhero-website",
        "image": "https://i.ibb.co/7QtMnpY/5-1.png"
    }
]


const Projects = () => {
    return (
        <div className=''>
            <h3 className='heading py-5'>RECENT PROJECTS</h3>
            <Row xs={1} md={3} className="g-4 ">
                {
                    projects.map(project => <Project
                        project={project}
                    ></Project>)

                }
            </Row>

        </div>
    );
};

export default Projects;