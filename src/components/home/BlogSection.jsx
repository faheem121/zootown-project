import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';

class BlogSection extends Component {
  render() {
    return (
        <section className="section section-lg design has-cards">
      <Container fluid >
          <Row >
              <Col md={8} className="ml-auto mr-auto pb-4">
              <div className="my-2 text-dark ml-auto mr-auto text-center f-40 font-weight-700 my-family">Blog & Events</div>
        <p className="my-4 text-dark my-family ml-lg-lg mr-lg-lg text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
              </Col>
              <Col md={5} className="ml-auto mt-4">
                <Row className="blog_section shadow">
                  <Col md={8} >
                      <p className=" my-family f-24 font-weight-700 primary-color-text">BLOG</p>
                    <p className="blog_text text-white f-21 my-family font-weight-500">
                      I PICKED UP A CAMERA AND <br /> NOW I SHOOT FOR STOMRZY.
                    </p>
                  </Col>
                  <Col md={3}>
                    <a href="/blog" className=" btn btn-primary badge-pill shadow  font-weight-600 primary-color text-dark nav-item">
                      Discover
                    </a>
                  </Col>
                    <Col md={12}>
                        <p className="blog_desc my-family f-19 text-white">
                  We are Zoo Town. We are honest, family friendly, reliable and offer extremely safe to use services. We connect parents in London with fully vetted and experienced
                  nannies, sitters and tutors.
                </p>
                    </Col>     
                </Row>
                <Row>
                    <Col md={12} className="mt--100">
                         <img alt="student" src={require("../../assets/images/student/IMG_0515.png")} className="floating ml-lg-n5" />
             
                    </Col>
                </Row>
              </Col>
              <Col md={4} className="mr-auto mt-4">
                  <div className="event_section">
                <p className="my-family f-24 font-weight-700 text-dark">EVENTS</p>
                <p className="text-dark f-21 my-family font-weight-500">
                  LEARN. DEVELOP & GROW
                  <br />
                  ON THE GO.
                </p>
                <p className="my-family f-19 text-dark">We are Zoo Town. We are honest, family friendly, reliable and offer extremely safe to use services.</p>
                <a href="/events" className="btn btn-primary my-4 badge-pill shadow font-weight-600 text-dark btn-white">
                  Discover
                </a>
                
              </div>
                  <img alt="student" src={require("../../assets/images/student/IMG_5422.png")} className="floating mt--100 float-right mr-lg-n5 w-100" />
              </Col>
          </Row>
          <Row className="mt-5">
                   <Col md={5} className="ml-auto mt-4">
                <Row className="blog_section_border shadow">
                  <Col md={12} >
                      <p className=" my-family f-24 font-weight-700 primary-color-text">BLOG</p>
                    <p className="blog_text text-dark f-22 my-family font-weight-600">
                      CLINICAL PSYCHOLOGIST BY DAY <br />
                  FASHIONISTA BY NIGHT.
                    </p>
                  <p className="my-family f-19 text-dark">
                  “ I WANT TO BUILD… IT IS WHAT I<br /> DO BEST”.
                </p>
                    <a href="/blog" className=" btn btn-primary badge-pill shadow  font-weight-600 primary-color text-dark nav-item">
                      Discover
                    </a>
                  </Col>
                    
                </Row>
                <Row>
                    <Col md={12} className="mt--150">
                         <img alt="student"  src={require("../../assets/images/student/IMG_05151.png")} className="floating " />
             
                    </Col>
                </Row>
              </Col>
              <Col md={4} className="mr-auto mt-4">
                  <div className="blog_section shadow">
                <p className="my-family f-24 font-weight-700 primary-color-text">BLOG</p>
                <p className="text-white f-21 my-family font-weight-500">
                   “ I WANT TO BUILD… IT IS WHAT I<br /> DO BEST”.
                </p>
               
                <a href="/events" className="btn btn-primary my-4 badge-pill shadow font-weight-600 text-dark primary-color">
                  Discover
                </a>
                
              </div>
                  <img alt="student" src={require("../../assets/images/student/IMG_05152.png")} className="floating mt--150 float-right mr-lg-n5 w-100" />
              </Col>
        
          </Row>
            </Container>
        </section>
    
    );
  }
}

export default BlogSection;
