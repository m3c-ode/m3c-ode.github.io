import React from 'react';

type Props = {
  title?: string,
  imgSource?: string,
  imgPos: {
    right?: boolean,
    left?: boolean,
  };
};

const ProjectItem = (props: Props) => {
  return (
    <>
      <div className="project-item row">
        {/* <p>Item</p> */}
        {props.imgPos.left &&
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
        }
        <div className="col-xs-12 col-md-6">
          <div className="project-text">
            <div className="project-title">
              <h3>{props.title}</h3>
            </div>
            {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
            <p>Project presentation</p>
            <h3>Features</h3>
            <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {/* {props.data
                        ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                        : "loading"} */}
                  <li>This is a test</li>
                  <li>This is a 2nd test</li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {/* {props.data
                        ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                        : "loading"} */}
                  <li>Some other bullet</li>
                  <li>Some other bullet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {props.imgPos.right &&
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
        }
      </div>
    </>
  );
};

export default ProjectItem;