const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            m3.code
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#bio" className="page-scroll">
                Bio
              </a>
            </li>
            <li>
              <a href="#projects" className="page-scroll">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;