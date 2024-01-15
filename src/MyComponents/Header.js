import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'



 function Header(props) {
  return (
    <>
    <Carousel className="height-50" style={{height:"50vh"}} variant="dark">
    <Carousel.Item>
      <img

        className="d-block w-100"
        src={img1}
        style={{height:"50vh"}}
        alt="First slide"
      />
      <Carousel.Caption>
        <h2 style={{fontWeight:"bolder"}}>{props.title}</h2>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        style={{height:"50vh"}}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h2 style={{fontWeight:"bolder",color:"Black"}}>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        style={{height:"50vh"}}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h2 style={{fontWeight:"bolder"}}>{props.title}</h2>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>



    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" to="/">
      {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" to="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="/About">
              About
            </a>
          </li>
       {props.searchBar? <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>: ""}
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}
//default value is used
Header.defaultProps={
    title: "your title here",
    searchBar: true
}

//prototype to declare the object is string
Header.propTypes={
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}

export default Header;
