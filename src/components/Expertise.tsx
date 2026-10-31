import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsAI = [
    "LLM Agent Design",
    "MCP Servers",
    "Prompt Engineering",
    "GitHub Actions",
    "Tekton",
    "GCP Cloud Run",
    "SonarQube",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Scikit-learn",
];

const labelsFullStack = [
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "Kotlin",
    "Bash",
    "SQL",
    "React",
    "Node.js",
    "Express",
    "Spring Boot",
    "Flask",
    "Tailwind",
    "GraphQL",
    "MongoDB",
    "MySQL",
    "Postman",
    "Git",
    "GitHub",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Engineering</h3>
                    <p>I design and ship AI agents, reusable prompts and skills, and MCP server integrations that plug AI into real engineering workflows, from automated changelogs to code-quality remediation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {labelsAI.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I build web applications and backend services across the SDLC, from React and Node frontends to Spring Boot and Flask APIs, with CI/CD and testing built in.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {labelsFullStack.map((label, index) => (
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