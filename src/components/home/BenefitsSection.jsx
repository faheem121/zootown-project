import React, { Component } from "react";
import { Row, Col,Container } from "reactstrap";
// import SliderSlick from "react-slick";
import Slider from 'react-slick';

class BenefitsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render() {
        const { page } = this.props;
            var settings = {
      speed: 3000,
        autoplay:true,
      slidesToShow: this.state.slides,
      slidesToScroll: 1
    };
        return (
            <section className="section">
      
          { page === 'students' ?
                    <Container className="">
                        <Row className="py-5">
                     <Col md={8} className="ml-auto mr-auto">
              <div className="my-2 text-dark ml-auto mr-auto text-center f-40 font-weight-700 my-family">Our Benefits</div>
        <p className="my-4 text-dark my-family ml-lg-lg mr-lg-lg text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
              </Col>
                    </Row>
          <Row className="row-grid mt-5">
               
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <img alt="" src={require("../../assets/images/student/earn.png")} />
                  </div>
                  <h5 className="text-dark mt-3">Earn as a team</h5>
                  <p className="text-dark mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                     <img alt="" src={require("../../assets/images/student/bonus.png")} />
                  </div>
                  <h5 className="text-dark mt-3">Bonus</h5>
                  <p className="text-dark mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                   <img alt="" src={require('../../assets/images/student/be.png')} />
                  </div>
                  <h5 className="text-dark mt-3">Be flexible</h5>
                  <p className="text-dark mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row>
                        </Container>
                :
                <Container className="">
                    <Row className="py-5">
                     <Col md={8} className="ml-auto mr-auto">
              <div className="my-2 text-dark ml-auto mr-auto text-center f-40 font-weight-700 my-family">Our Benefits</div>
        <p className="my-4 text-dark my-family ml-lg-lg mr-lg-lg text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
              </Col>
                    </Row>
           <Row className="row-grid mt-5">
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <img alt="" src={require("../../assets/images/employer/bonus (1).png")} />
                  </div>
                  <h5 className="text-dark mt-3">Pay as you post</h5>
                  <p className="text-dark mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <img alt="" src={require("../../assets/images/employer/bonus.png")} />
                  </div>
                  <h5 className="text-dark mt-3">Looking for ambitious self-starter?</h5>
                  <p className="text-dark mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                   <img alt="" src={require("../../assets/images/employer/be flexible.png")} />
                  </div>
                  <h5 className="text-dark mt-3">ASAP Support</h5>
                  <p className="text-dark mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                    </Row>
               <Row className="row-grid mt-5">
                 <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                 <img alt="" src={require("../../assets/images/employer/post as your post (1).png")} />
                  </div>
                  <h5 className="text-dark mt-3">Need extra help on your projects?</h5>
                  <p className="text-dark mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                   <img alt="" src={require("../../assets/images/employer/post as your post.png")} />
                  </div>
                  <h5 className="text-dark mt-3">What recruitment fee?</h5>
                  <p className="text-dark mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <img alt="" src={require("../../assets/images/employer/be flexible (1).png")} />
                  </div>
                  <h5 className="text-dark mt-3">Tied down and need a hand with hiring?</h5>
                  <p className="text-dark mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row>
                      </Container>
          }
              
            </section>
           
        );
    }
}

export default BenefitsSection;
