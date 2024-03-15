import React from 'react';
import StyledProjects from './Projects.styled';
import TasksManagerScreen from '../../img/TasksManager.png';

const projects = [
  {
    name: 'Task manager',
    src: 'https://maciejnecka.github.io/Task-manager/',
    screen: TasksManagerScreen,
    description:
      'A simple React application for effective task management. It allows users to add, start/stop, complete, and delete tasks. The application also tracks the time dedicated to each task.',
  },
  {
    name: 'Task manager',
    src: 'https://maciejnecka.github.io/Task-manager/',
    screen: TasksManagerScreen,
    description:
      'A simple React application for effective task management. It allows users to add, start/stop, complete, and delete tasks. The application also tracks the time dedicated to each task.',
  },
  {
    name: 'Task manager',
    src: 'https://maciejnecka.github.io/Task-manager/',
    screen: TasksManagerScreen,
    description:
      'A simple React application for effective task management. It allows users to add, start/stop, complete, and delete tasks. The application also tracks the time dedicated to each task.',
  },
];

const Projects = () => {
  return (
    <StyledProjects>
      <h1 className="projects__title">My projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project__image-container">
            <img
              src={project.screen}
              alt={project.name}
              className="project__image"
            />
          </div>
          <div className="project__details">
            <h2 className="project__name">{project.name}</h2>
            <p className="project__description">{project.description}</p>
            <a
              className="project__link"
              href={project.src}
              target="_blank"
              rel="noreferrer"
              type="button"
            >
              View project
            </a>
          </div>
        </div>
      ))}
    </StyledProjects>
  );
};

export default Projects;
