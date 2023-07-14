import React from 'react';

type Props = {};

const Bio = (props: Props) => {
  return (
    <div id="bio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        {/* <div className="row">
          <div className="bio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Bio;