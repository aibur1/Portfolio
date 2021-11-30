import React from 'react';
import { Row } from 'react-bootstrap';
import Project from './Project';



const projects = [
    {
        "name": "Little Learners Academy",
        "description": "Learn About Our Curriculum's Proven Results, Unique Senior Year, Clubs, Sports, & More! A Globally Benchmarked Academic Program Featuring Liberal Arts & Advanced STEM Offerings. Global-Readiness. Advanced STEM Offerings. Content-Rich Curriculum. Expert Teachers. Senior Project Program. Engaging Extracurriculars. College Preparation. 1474 Average SAT Score.",
        "image": "https://i.ibb.co/DQTqHvg/1-1.png"
    },
    {
        "name": "AR Car Sells",
        "description": "Learn About Our Curriculum's Proven Results, Unique Senior Year, Clubs, Sports, & More! A Globally Benchmarked Academic Program Featuring Liberal Arts & Advanced STEM Offerings. Global-Readiness. Advanced STEM Offerings. Content-Rich Curriculum. Expert Teachers. Senior Project Program. Engaging Extracurriculars. College Preparation. 1474 Average SAT Score.",
        "image": "https://i.ibb.co/Dgp7b4M/2-1.png"
    },
    {
        "name": "CPHN General Hospital",
        "description": "Learn About Our Curriculum's Proven Results, Unique Senior Year, Clubs, Sports, & More! A Globally Benchmarked Academic Program Featuring Liberal Arts & Advanced STEM Offerings. Global-Readiness. Advanced STEM Offerings. Content-Rich Curriculum. Expert Teachers. Senior Project Program.",
        "image": "https://i.ibb.co/9pLP6H5/4.png"
    },
    {
        "name": "AR Travels",
        "description": "Learn About Our Curriculum's Proven Results, Unique Senior Year, Clubs, Sports, & More! A Globally Benchmarked Academic Program Featuring Liberal Arts & Advanced STEM Offerings. Global-Readiness. Advanced STEM Offerings. Content-Rich Curriculum.",
        "image": "https://i.ibb.co/K5Wt16r/44-1.png"
    },
    {
        "name": "IGP-Association",
        "description": "Learn About Our Curriculum's Proven Results, Unique Senior Year, Clubs, Sports, & More! A Globally Benchmarked Academic Program Featuring Liberal Arts & Advanced STEM Offerings. Global-Readiness. Advanced STEM Offerings. Content-Rich Curriculum. Expert Teachers. Senior Project Program. Engaging Extracurriculars. College Preparation. 1474 Average SAT Score.",
        "image": "https://i.ibb.co/7QtMnpY/5-1.png"
    }
]


const Projects = () => {
    return (
        <div>

            <Row xs={1} md={3} className="g-4">
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