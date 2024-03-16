import React from 'react';
import StyledProjects from './Projects.styled';
import InteractiveCanvas from '../InteractiveCanvas';
import TaskManagerScreenLow from '../../img/TaskManagerLow.avif';
import AppLabScreenLow from '../../img/AppLabLow.avif';
import MeetingFormScreenLow from '../../img/MeetingFormLow.avif';
import { ReactComponent as ExternalLink } from '../../icons/ExternalLink.svg';
import { ReactComponent as GitHub } from '../../icons/Github.svg';

const projects = [
  {
    name: 'Task manager',
    srcLink: 'https://maciejnecka.github.io/Task-manager/',
    srcGH: 'https://github.com/Maciejnecka/Task-manager',
    screenshot: TaskManagerScreenLow,
    description:
      'A simple React application for effective task management. It allows users to add, start/stop, complete, and delete tasks. The application also tracks the time dedicated to each task.',
  },
  {
    name: 'AppLab-RWD',
    srcLink: 'https://maciejnecka.github.io/AppLab-RWD/',
    srcGH: 'https://github.com/Maciejnecka/AppLab-RWD',
    screenshot: AppLabScreenLow,
    description:
      'A modern, responsive website template. It includes various sections such as a navigation menu, header, main features, pricing, and customer reviews. The primary goal of this project was to use only HTML and CSS to create a responsive design.',
  },
  {
    name: 'Meeting Form',
    srcLink: 'https://maciejnecka.github.io/Meeting-Form/',
    srcGH: 'https://github.com/Maciejnecka/Meeting-Form',
    screenshot: MeetingFormScreenLow,
    description:
      'An application built using React that serves the purpose of managing meetings. It assists users in organizing and tracking their meetings.',
  },
];

const Projects = () => {
  return (
    <StyledProjects>
      <InteractiveCanvas />
      <h1 className="projects__title">My projects</h1>
      <p className="projects__introduction">
        Here you'll find a collection of my recent work, showcasing my skills in
        web development.
      </p>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project__image-container">
            <img
              src={project.screenshot}
              alt={project.name}
              className="project__image"
              width="800"
              height="600"
            />
          </div>
          <div className="project__details">
            <h2 className="project__name">{project.name}</h2>
            <p className="project__description">{project.description}</p>
            <div className="project__link-container">
              <a
                className="project__link"
                href={project.srcLink}
                target="_blank"
                rel="noreferrer"
                type="button"
              >
                Site
                <ExternalLink className="project__link--external-icon" />
              </a>
              <a
                className="project__link"
                href={project.srcGH}
                target="_blank"
                rel="noreferrer"
                type="button"
              >
                Github
                <GitHub className="project__link--github-icon" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </StyledProjects>
  );
};

export default Projects;
