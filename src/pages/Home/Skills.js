import React from 'react';
import { Row } from 'react-bootstrap';
import Skill from './Skill';
import img from '../../img/skill images/single.png';
import skill from './Skills.css';


const skills = [
  {
    "id": 1,
    "image": "https://i.ibb.co/cg1wn0g/download-1.png",
    "name": "HTML"
  },
  {
    "id": 2,
    "image": "https://i.ibb.co/TvMbQs0/2.png",
    "name": "CSS"
  },
  {
    "id": 3,
    "image": "https://i.ibb.co/mHBKX5M/3.png",
    "name": "JavaScript"
  },
  {
    "id": 4,
    "image": "https://i.ibb.co/DY04g1V/4.png",
    "name": "Bootstrap"
  },
  {
    "id": 5,
    "image": "https://i.ibb.co/XjkRHfp/6.png",
    "name": "React"
  },
  {
    "id": 6,
    "image": "https://i.ibb.co/NKkzG8z/7.png",
    "name": "Node.js"
  },
  {
    "id": 7,
    "image": "https://i.ibb.co/PGFSTT6/8.png",
    "name": "Express"
  },
  {
    "id": 8,
    "image": "https://i.ibb.co/xXJs6Wv/9.png",
    "name": "MondoDb"
  },
  {
    "id": 9,
    "image": "https://i.ibb.co/cNGMKbP/10.png",
    "name": "Firebase"
  },
  {
    "id": 10,
    "image": "https://i.ibb.co/1v6bjW2/11.png",
    "name": "Netlify"
  },
  {
    "id": 11,
    "image": "https://i.ibb.co/pPP7n7v/12.png",
    "name": "Github"
  },
  {
    "id": 12,
    "image": "https://i.ibb.co/wrS7N0t/13.png",
    "name": "Heroku"
  },

]

const Skills = () => {
  return (
    <div className="container">
      <h3 className="py-5 heading">My Skills</h3>
      <div className=" row">
        <div className=" col-sm-12 col-md-7">
          <Row  md={3} className=" g-4">
            {
              skills.map(skill => <Skill
                key={skill.id}
                skill={skill}
              ></Skill>)
            }
          </Row>
        </div>
        <div data-aos="zoom-in-left" className="col-md-4">
          <img className="img-fluid skill" src={img}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;



// https://i.ibb.co/19rs4LH/15.png
