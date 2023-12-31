import "./style.css";

const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="text-center my-5">
                  <img className="img-fluid rounded-circle mb-4 profile-pic" src="img/me.jpg" alt="profile" />
                </div>
                <h2>Welcome to my portfolio website</h2>
                <a href="#bio" className="btn btn-custom btn-lg page-scroll">About me</a> </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;