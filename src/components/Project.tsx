import React from "react";
import CNN from '../assets/images/CNN.png'
import FoodClassifier from '../assets/images/FoodClassifier.png'
import HustleHub from '../assets/images/HustleHub.png'
import Onit from '../assets/images/Onit.png'
import '../assets/styles/Project.scss';

type ProjectItem = {
    title: string;
    description: string;
    image?: string;
    link?: string;
};

const projects: ProjectItem[] = [
    {
        title: "HustleHub",
        description: "Full-stack MERN app for organizing job applications, with real-time analytics, filtering, and role-based access. Built with React, Node.js, Express, and MongoDB, featuring Recharts visualizations, JWT authentication, and Mongoose validation.",
        image: HustleHub,
        link: "https://github.com/agron-gojcaj/HustleHub",
    },
    {
        title: "On-It",
        description: "Cybersecurity self-assessment tool for small businesses, with customizable audit checklists. Flask/SQL backend with a secure RESTful API and an HTML/CSS/JavaScript frontend.",
        image: Onit,
        link: "https://github.com/SKel1817/on-it",
    },
    {
        title: "Food Healthiness Classifier",
        description: "Led a team building a K-Nearest Neighbors model that labels food as healthy, unhealthy, or moderate, reaching 90.7% accuracy and a 90.6% F1-score. Compared multiple algorithms with Scikit-learn, Pandas, and NumPy.",
        image: FoodClassifier,
        link: "https://github.com/nsteiner/Healthy_Foods_Classifier",
    },
    {
        title: "Text Classification Model",
        description: "Deep learning CNN and Naive Bayes models that classify news articles into World News, Sports, Business, and Science/Tech. Built in Google Colab with TensorFlow, Keras, and scikit-learn.",
        image: CNN,
        link: "https://github.com/agron-gojcaj/TextClassificationModel",
    },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {projects.map((project) => (
                <div className="project" key={project.title}>
                    {project.image && (
                        project.link ? (
                            <a href={project.link} target="_blank" rel="noreferrer"><img src={project.image} className="zoom" alt={`${project.title} thumbnail`} width="100%"/></a>
                        ) : (
                            <img src={project.image} alt={`${project.title} thumbnail`} width="100%"/>
                        )
                    )}
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
                    ) : (
                        <h2>{project.title}</h2>
                    )}
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
