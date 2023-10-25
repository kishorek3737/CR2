import React from 'react';


const Navbar1 = () => {
  return (
    <div className="container-fluid px-0">
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: 2000 }}>
        <div className="container-fluid">
          {/* Navbar brand */}
          <a className="navbar-brand nav-link" target="_blank" href="https://mdbootstrap.com/docs/standard/">
            <strong>GEORGE NAKASHIMA WOODWORKERS</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#intro">
                  Home
                </a>
      
              </li>
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#intro">
                  Furniture
                </a>
      
              </li>
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#intro">
                  Philosophy
                </a>
      
              </li>
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#intro">
                  <img src="" alt="" />
                  
                </a>
      
              </li>
            </ul>

            <ul className="navbar-nav list-inline">
              {/* Icons */}
              <li className="">
                <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="">
                <a className="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}

      {/* Carousel wrapper */}
      <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" className="active"></li>
          <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
          <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
        </ol>

        {/* Inner */}
        <div className="carousel-inner">
          {/* Single item */}
          <div className="carousel-item active">
            <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <div className="d-flex justify-content-center align-items-center h-100">
              </div>
            </div>
          </div>

          {/* Single item */}
          <div className="carousel-item">
            <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white text-center">
                  <h2>You can place here any contenjw</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Single item */}
          <div className="carousel-item">
            <div
              className="mask"
              style={{
                background:
                  'linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)',
              }}
            >

            </div>
          </div>
        </div>
        {/* Inner */}

        {/* Controls */}
        
      </div>
      {/* Carousel wrapper */}
    </header>
    <div>
      <img src="/img/image2.jpg" alt="" />
    </div>


    </div>
  )
}

export default Navbar1;