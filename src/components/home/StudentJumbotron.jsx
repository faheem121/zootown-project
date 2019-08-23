import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';

class StudentJumbotron extends Component {
  render() {
    const { page } = this.props;
    return (
      <Container>
        <Row>
          <Col lg={6} md={12}  className="intro_block mt-5">
           
            {page === 'students' ? (
              <React.Fragment>
                       
              <p className="zooTown_text">   
                  <img className="w-25 " src={require("../../assets/images/student/Hello.png")} />
              </p>
           
                <p className="intro_text-welcome">
                  <div className=""> We're Zoo Town.</div> 
                    
                      </p><p className="intro_text">
               
                  <div className="booked_text">GET BOOKED.</div>
                  GET PAID. <br />
                  THE ZOO TOWN WAY.
                </p>

                <p className="intro_desc">
                  {/* We help undergraduates, graduates, postgraduates & school leavers build their careers by connecting them with great jobs or freelancng projects provided by our
                  top className clients. */}
                  We help young people build their careers by connecting them with great jobs or more clients to run and grow their own business.
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p className="intro_text">FILL YOUR ROLES WITH OUR CANDIDATES & GET YOUR PROJECTS DONE WITH OUR FREELANCERS.</p>
                <p className="intro_desc">
                  We connect you with hungry, driven and intelligent self-starters. Our university students are ready to work hard and build their career
                </p>
              </React.Fragment>
            )}
          </Col>
          <Col lg={6} md={12}  className="student_intro_block">
            {page === 'students' ? (
              <img className="floating" src={require("../../assets/images/student/students head.png")} alt="Student Intro" />
            ) : (
              <img className="floating" src={require("../../assets/images/employer/employer_head.png")} alt="Employer Intro" />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StudentJumbotron;
