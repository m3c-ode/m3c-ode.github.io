import React from 'react';
import ProjectItem from './ProjectItem';

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className="text-center">Projects</h2>
          </div>
          <ProjectItem title='m3.beer Brewery Management Service' imgPos={{ left: true }} />
          <ProjectItem title="Employee Management Application" imgPos={{ right: true }} />
        </div>
      </div>
    </div>
  );
};

export default Projects;