import ProjectItem from './ProjectItem';
import { ReactImageGalleryItem } from 'react-image-gallery';
import content from './content.json';

type Props = {};

const bmsImages: ReactImageGalleryItem[] = [
  {
    original: 'img/portfolio/m3b-bms-1.png',
    description: 'Product table example',
  },
  {
    original: 'img/portfolio/m3b-bms-2.png',
    description: 'New product creation - step form',

  },
  {
    original: 'img/portfolio/m3b-bms-3.png',
    description: 'Delivery service with Google API implementation - Places, Directions',
  },
  {
    original: 'img/portfolio/m3b-bms-4.png',
    description: 'Client base management with delivery option',

  },
];

const elmImages: ReactImageGalleryItem[] = [
  {
    original: 'img/portfolio/m3b-bms-1.png',
    description: 'Product table example',
  },
  {
    original: 'img/portfolio/m3b-bms-2.png',
    description: 'New product creation - step form',

  },
  {
    original: 'img/portfolio/m3b-bms-3.png',
    description: 'Delivery service with Google API implementation - Places, Directions',
  },
  {
    original: 'img/portfolio/m3b-bms-4.png',
    description: 'Client base management with delivery option',

  },
];

const Projects = (props: Props) => {
  return (
    <div id="projects">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className="text-center">Projects</h2>
          </div>
          <ProjectItem
            // title='m3.beer Brewery Management Service'
            imgPos={{ left: true }}
            // imgSource='img/portfolio/m3b-bms-2.png'
            imgObject={bmsImages}
            title={content['m3b-bms'].title}
            description={content['m3b-bms'].description}
            features={content['m3b-bms'].features}
            prodLink={content['m3b-bms'].prodLink}
            githubLink={content['m3b-bms'].githubLink}
          />
          <ProjectItem
            // title="Employee Management Application"
            imgPos={{ right: true }}
            imgObject={bmsImages}
            title={content['ems'].title}
            description={content['ems'].description}
            features={content['ems'].features}
            prodLink={content['ems'].prodLink}
            githubLink={content['ems'].githubLink}
            prodNote={"(currently offline due to change in plan subscription)"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;