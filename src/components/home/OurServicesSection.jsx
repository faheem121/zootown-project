import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';

class OurServicesSection extends Component {
  render() {
    const { page } = this.props;
    return (
          <section className="section">
      
     
        {page === 'students' ? (
                <Container className="">
              <Row className="py-5">
                <Col md={6}>
                     <img alt="strong" src={require("../../assets/images/student/strong.png")} className="img-fluid floating"  />
                  </Col>
                  <Col md={6}>
                      <h2 className="h2">Strong CV game</h2>
                  <p className="text-dark">
                   
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p className="text-dark">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release
                  </p>
                  </Col>
              </Row>
                    <Row className="py-5">
                  <Col md={6}>
                      <h2 className="h2">No service fees for freelancers</h2>
                  <p className="text-dark">
                   
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p className="text-dark">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release
                  </p>
                  </Col>
                        <Col md={6}>
                     <img alt="strong" src={require("../../assets/images/student/noservice.png")} className="img-fluid floating"  />
                  </Col>
              </Row>
                </Container>
         
        ) : (
                <Container  className="">
              <Row className="py-5">
                <Col md={6}>
                     <img alt="strong" src={require("../../assets/images/employer/mambership.png")} className="img-fluid floating"  />
                  </Col>
                  <Col md={6}>
                      <h2 className="h2">Membership</h2>
                  <p className="text-dark">
                   
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p className="text-dark">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release
                  </p>
                  </Col>
              </Row>
                    <Row className="py-5">
                  <Col md={6}>
                      <h2 className="h2">Cash-less system</h2>
                  <p className="text-dark">
                   
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p className="text-dark">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release
                  </p>
                  </Col>
                        <Col md={6}>
                     <img alt="strong" src={require("../../assets/images/employer/cards.png")}  className="img-fluid floating"  />
                  </Col>
              </Row>
                </Container>
          
        )}
      </section>
    );
  }
}

export default OurServicesSection;
