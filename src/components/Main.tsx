import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQECBBfoRmUOXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710964655314?e=1744848000&v=beta&t=pqG37oE12BQrrFRGA_dmHCVYV5DLQaQ-D5vb9k8zEP0" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/agron-gojcaj" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/agron-gojcaj-8a336b226/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Agron Gojcaj</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/agron-gojcaj" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/agron-gojcaj-8a336b226/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;