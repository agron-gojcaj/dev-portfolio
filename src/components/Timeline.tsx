import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const jobs = [
  {
    date: "Nov 2025 - Present",
    title: "AI Software Engineer",
    company: "Ford Motor Company",
    location: "Dearborn, Michigan",
    bullets: [
      "Drove AI adoption across engineering teams through workshops (80+ attendees), office hours, team embeddings, and product demos.",
      "Built and distributed a library of AI agents, prompts, and skills through a monorepo catalog with one-click installation, reducing rework rate by 30%.",
      "Built an AI-powered changelog generator with Java and GitHub Actions, integrated across 25+ repositories and saving 500 developer hours per year.",
      "Developed an AI-driven SonarQube issue resolution app (TypeScript, GCP Cloud Run, SonarQube + GitHub MCP servers), adopted by 4+ teams.",
      "Deployed a TypeScript service that generates technical deep dives from application documentation across 50+ applications.",
      "Operationalized MCP integrations (Atlassian, GitHub, Amplitude, Figma) and built custom internal MCP servers.",
    ],
  },
  {
    date: "May 2024 - Aug 2024",
    title: "Software Development Intern",
    company: "365 Retail Markets",
    location: "Troy, Michigan",
    bullets: [
      "Integrated Postman API tests into an Azure CI/CD pipeline and resolved backend issues in a Spring Boot REST API.",
      "Refactored email templates and wrote unit tests for React Native kiosk systems.",
      "Worked across the full SDLC in an Agile team using Jira and Confluence.",
    ],
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {jobs.map((job) => (
            <VerticalTimelineElement
              key={job.date}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'var(--surface)', color: 'var(--text)' }}
              contentArrowStyle={{ borderRight: '7px solid var(--surface)' }}
              date={job.date}
              iconStyle={{ background: 'var(--accent-strong)', color: 'white' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{job.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{job.company} · {job.location}</h4>
              <ul className="timeline-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
