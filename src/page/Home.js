import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function Home() {
  var settings = {
    dots: true,
    navigator: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return(
    <div className="main">
           <Slider {...settings}>
      <div>
        <img src={require("../images/bg-image-1.jpg")} />
      </div>
      <div>
      <img src={require("../images/bg-image2.jpg")} />
      </div>
      <div>
      <img src={require("../images/bg-image-3.jpg")} />
      </div>
      <div>
      <img src={require("../images/bg-image-4.jpg")} />
      </div>
      <div>
      <img src={require("../images/bg-image-5.jpg")} />
      </div>
      <div>
      <img src={require("../images/bg-image-1.jpg")} />
      </div>
    </Slider>

        <section>
          <Container>
            <Tabs
              defaultActiveKey="home"
               transition={false}
               id="noanim-tab-example"
               className="mb-3"
              >
            <Tab eventKey="home" title="Home">
              <h1>one</h1>
            </Tab>
            <Tab eventKey="profile" title="Profile">
            <h1>two</h1>
            </Tab>
            <Tab eventKey="contact" title="Contact">
            <h1>three</h1>
            </Tab>
       </Tabs>
          </Container>
        </section>
    </div>
  )
}

export default Home;