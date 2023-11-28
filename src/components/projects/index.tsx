import ProjectItem from './ProjectItem';
import content from './content.json';

// const bmsImages: ReactImageGalleryItem[] = [
//   {
//     original: 'img/portfolio/m3b-bms-1.png',
//     description: 'Product table example',
//   },
// [...]
// ];

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className="text-center">Projects</h2>
          </div>
          <ProjectItem
            imgPos={{ right: true }}
            title={content['comeeat'].title}
            description={content['comeeat'].description}
            features={content['comeeat'].features}
            prodLink={content['comeeat'].prodLink}
            githubLink={content['comeeat'].githubLink}
            imgObject={content['comeeat'].images}
          />
          <ProjectItem
            imgPos={{ left: true }}
            title={content['m3b-bms'].title}
            description={content['m3b-bms'].description}
            features={content['m3b-bms'].features}
            prodLink={content['m3b-bms'].prodLink}
            githubLink={content['m3b-bms'].githubLink}
            imgObject={content['m3b-bms'].images}
          />
          <ProjectItem
            imgPos={{ right: true }}
            title={content['elm'].title}
            description={content['elm'].description}
            features={content['elm'].features}
            prodLink={content['elm'].prodLink}
            githubLink={content['elm'].githubLink}
            // prodNote={"(currently offline due to change in plan subscription)"}
            imgObject={content['elm'].images}
          />
          <ProjectItem
            imgPos={{ left: true }}
            title={content['quizme'].title}
            description={content['quizme'].description}
            features={content['quizme'].features}
            prodLink={content['quizme'].prodLink}
            githubLink={content['quizme'].githubLink}
            prodNote={""}
            imgObject={content['quizme'].images}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;