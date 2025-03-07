import React from "react";
import CNN from '../assets/images/CNN.png'
import FoodClassifier from '../assets/images/FoodClassifier.png'
import FoodJunkie from '../assets/images/FoodJunkie.png'
import Pong from '../assets/images/Pong.png'
import Triolingo from '../assets/images/Triolingo.png'
import Onit from '../assets/images/Onit.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/agron-gojcaj/TextClassificationModel" target="_blank" rel="noreferrer"><img src={CNN} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/agron-gojcaj/TextClassificationModel" target="_blank" rel="noreferrer"><h2>Text Classification Model</h2></a>
                <p>Implemented a deep learning Convolutional Neural Network and a Naive Bayes model to classify news articles into 4 categories— World News, Sports, Business, and Science/Tech. Implemented in Google Colab with Python, using Tensorflow, Keras, and scikit-learn libraries.</p>
            </div>
            <div className="project">
                <a href="https://github.com/SKel1817/on-it" target="_blank" rel="noreferrer"><img src={Onit} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SKel1817/on-it" target="_blank" rel="noreferrer"><h2>On-It</h2></a>
                <p>Built a web application that guides small businesses through the steps of a cybersecurity audit, making cybersecurity audits more accessible and cost-effective. HTML, CSS, Javascript were used to develop the frontend, while Flask and SQL were used for the backend.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nsteiner/Healthy_Foods_Classifier" target="_blank" rel="noreferrer"><img src={FoodClassifier} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nsteiner/Healthy_Foods_Classifier" target="_blank" rel="noreferrer"><h2>Food Healthiness Classifier</h2></a>
                <p>Researched, trained, and compared multiple machine learning models that classify whether a food item is healthy, unhealthy, or should be consumed in moderation. Created models in Google Colab with Python, using the scikit-learn library.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nsteiner/FoodJunkieRep" target="_blank" rel="noreferrer"><img src={FoodJunkie} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nsteiner/FoodJunkieRep" target="_blank" rel="noreferrer"><h2>Food Junkie</h2></a>
                <p>Developed a Java Android app that functions as a personal cookbook, in which users can create, delete, and save their own recipes on a SQLite database.</p>
            </div>
            <div className="project">
                <a href="https://github.com/agron-gojcaj/PongGame" target="_blank" rel="noreferrer"><img src={Pong} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/agron-gojcaj/PongGame" target="_blank" rel="noreferrer"><h2>Pong Game</h2></a>
                <p>Implemented a 2-player pong game simulation in Java using IntelliJ.</p>
            </div>
            <div className="project">
                <a href="https://github.com/agron-gojcaj/Triolingo" target="_blank" rel="noreferrer"><img src={Triolingo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/agron-gojcaj/Triolingo" target="_blank" rel="noreferrer"><h2>Triolingo</h2></a>
                <p>Organized and coordinated development of a language learning web app, where users can learn vocabulary in a new language through learning modules. Implemented the app using HTML, CSS, JavaScript, and the Google Translate API.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;