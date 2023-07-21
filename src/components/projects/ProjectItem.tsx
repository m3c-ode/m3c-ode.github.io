import React, { useRef, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import './style.css';

type Props = {
  title?: string,
  description?: string,
  features?: string[],
  prodLink?: string,
  prodNote?: string,
  githubLink?: string,
  imgSource?: string,
  imgObject?: ReactImageGalleryItem[],
  imgPos: {
    right?: boolean,
    left?: boolean,
  };
};

const ProjectItem = ({
  title,
  description,
  features,
  prodLink,
  prodNote,
  githubLink,
  imgSource,
  imgObject,
  imgPos }: Props) => {

  const [isOpen, setIsOpen] = useState(false);
  const imageGalleryRef = useRef<ImageGallery | null>(null);

  const openGallery = () => {
    setIsOpen(true);
    imageGalleryRef.current?.fullScreen();
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="project-item row">
        {/* <p>Item</p> */}
        {imgPos.left &&
          <div className="col-xs-12 col-md-6">
            {/* <img onClick={openGallery} src={imgSource ? imgSource : "img/about.jpg"} className="img-responsive" alt="" />{" "} */}

            {/* <div className="img-responsive img-container"> */}
            <ImageGallery
              ref={imageGalleryRef}
              items={imgObject!}
              showFullscreenButton={true}
              showBullets={true}
              showThumbnails={false}
              showPlayButton={false}
            />
            {/* </div> */}
          </div>
        }
        <div className="col-xs-12 col-md-6">
          <div className="project-text">
            <div className="project-title">
              <h3><a href={githubLink}>{title}</a></h3>
            </div>
            <p>{description ? description : "loading..."}</p>
            <p>Link to deployed application: <a href={prodLink}>{prodLink}</a> {prodNote}</p>
            <h3>Features</h3>
            <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {features
                    ? features.map((d, i) => (
                      i % 2 === 0 ? <li key={`${d}-${i}`}>{d}</li> : null
                    ))
                    : "loading"}
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {features
                    ? features.map((d, i) => (
                      i % 2 === 1 ? <li key={`${d}-${i}`}>{d}</li> : null
                    ))
                    : "loading"}
                  {/* {data
                        ? data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                        : "loading"} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {imgPos.right &&
          <div className="col-xs-12 col-md-6">
            {/* <img src="img/portfolio/m3b-bms-1.png" className="img-responsive" alt="" /> */}
            <ImageGallery
              ref={imageGalleryRef}
              items={imgObject!}
              showFullscreenButton={true}
              showBullets={true}
              showThumbnails={false}
              showPlayButton={false}
            />
          </div>
        }
      </div>

    </>
  );
};

export default ProjectItem;