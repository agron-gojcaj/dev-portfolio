import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Python",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "HTML5",
    "CSS3",
    "SCSS",
    "Flask",
    "SQL",
    "Postman",
    "Git",
    "Github",
    "Kotlin",
    "C",
];

const labelsSecond = [
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Google Colab",
    "Keras",
    "R",
    "NLTK",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have built a diverse array of web applications using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>I have experience building machine learning and deep learning models that aim to solve real-world problems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;