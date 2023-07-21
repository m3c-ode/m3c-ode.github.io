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
    original: 'img/portfolio/eml-1.png',
    description: 'Product table example',
  },
  {
    original: 'img/portfolio/eml-2.png',
    description: 'New product creation - step form',

  },
  {
    original: 'img/portfolio/eml-3.png',
    description: 'Delivery service with Google API implementation - Places, Directions',
  },
  {
    original: 'img/portfolio/eml-4.png',
    description: 'Client base management with delivery option',

  },
  {
    original: 'img/portfolio/eml-5.png',
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
            title={content['m3b-bms'].title}
            description={content['m3b-bms'].description}
            features={content['m3b-bms'].features}
            prodLink={content['m3b-bms'].prodLink}
            githubLink={content['m3b-bms'].githubLink}
            imgObject={content['m3b-bms'].images}
          />
          <ProjectItem
            // title="Employee Management Application"
            imgPos={{ right: true }}
            title={content['elm'].title}
            description={content['elm'].description}
            features={content['elm'].features}
            prodLink={content['elm'].prodLink}
            githubLink={content['elm'].githubLink}
            prodNote={"(currently offline due to change in plan subscription)"}
            imgObject={content['elm'].images}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;