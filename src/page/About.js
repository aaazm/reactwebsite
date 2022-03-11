import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bg5 from '../images/bg-image-3.jpg';
import blg1 from '../images/blog-1.jpg';
import blg2 from '../images/blog-2.jpg';
import blg3 from '../images/blog-3.jpg';
import blg4 from '../images/blog-4.jpg';
import blg5 from '../images/blog-5.jpg';
import blg6 from '../images/blog-6.jpg';

const About = () =>{
  return(
    <section className="menu">
      <div className="comn_mbr" style={{backgroundImage: `url(${bg5})`}}></div>
      <Container>
        <Row className="my-5">
          {blogList.map((blogItem)=>{
            return (
              <Col md='6' className="mb-3 ">
                 <div className="border rounded ">
                 <Row>
                    <Col md='6'>
                        <img src={blogItem.img} />
                    </Col>
                    <Col md='6' className="ps-lg-1">
                      <div className="blg-cont">
                      <h4 style={ab.root}>{blogItem.title}</h4>
                      <span>{blogItem.date}</span>
                      <p>{blogItem.dsc}</p>
                      </div>
                    </Col>
                  </Row>
                 </div>
              </Col> 
            );
          })}
        </Row>  
      </Container>  
    </section>

  )
}

export const blogList = [
  {
    img: blg1,
    title: 'Best Corporate Tips You Will Read This Year.',
    date: '10 Dec 2020',
    dsc: 'We have always known the power of digital we'
  },
  {
    img: blg2,
    title: 'Best Corporate Tips You Will Read This Year.',
    date: '10 Dec 2020',
    dsc: 'We have always known the power of digital we'
  },
  {
    img: blg3,
    title: 'Best Corporate Tips You Will Read This Year.',
    date: '10 Dec 2020',
    dsc: 'We have always known the power of digital we'
  },
  {
    img: blg4,
    title: 'Best Corporate Tips You Will Read This Year.',
    date: '10 Dec 2020',
    dsc: 'We have always known the power of digital we'
  },
  {
    img: blg5,
    title: 'Best Corporate Tips You Will Read This Year.',
    date: '10 Dec 2020',
    dsc: 'We have always known the power of digital we'
  },
  {
    img: blg6,
    title: 'Best Corporate Tips You Will Read This Year.',
    date: '10 Dec 2020',
    dsc: 'We have always known the power of digital we'
  }
]

const ab = {
  root: {
    fontSize: '18px',
  marginTop: '10px'
  }
}
export default About;