import React from 'react';
import { Footer, Header } from '../components/index';
import { OurServicesSection, PricePlan, StudentJumbotron, BlogSection, BenefitsSection, Reviews } from '../components/home';
import gpl from 'graphql-tag';
import { Link } from 'react-router-dom';
import { 
        Switch, Icon, Checkbox } from 'antd';
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
      FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
    
    Container
} from "reactstrap";
import classnames from "classnames";
import { graphql } from 'react-apollo';
import { getPlans } from '../actions/plans';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class StudentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    iconTabs: 2,
    plainTabs: 2,
        filter:false,
  };
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
 
showfilter(){
    this.setState({
        filter:true
    })
    
}
hidefilter(){
    this.setState({
        filter:false
    })
    
}
  componentDidMount() {
    
  }

  render() {
    const { page } = this.state;

    return (
      <div>
        <Header parent="home" page={page} />
        <main ref="main">
        <section>
            <Container fluid>
                <Row>
                      <Col className="mt-5 mt-lg-0" lg="12">
            {/* Menu */}
           
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0 ", {
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    BLOGS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    JOBS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    Events
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                  
                    <Row>
                        <Col md={3} className="text-center">
                             <img
                      alt="..."
                      className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover hei-100"
                      src={require("../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                           <h2 className="text-center mt-2">David Warner</h2>
                           <p className="text-center mt-2"><i className="fa fa-map-marker"></i> San Francisco</p>
                           <Link  to="/" className="  primary-color-text f-21 font-weight-500"><i className="fa fa-eye primary-color-text"></i> View Profile </Link>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} className="mt-3">
                                <Card className="shadow">
                                    <CardBody>
                                    <Row>
                                        <Col md={2}>
                                            <img
                                              alt="..."
                                              className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-70 "
                                              src={require("../assets/img/theme/team-1-800x800.jpg")}
                                            /> 
                                        </Col>
                                       <Col md={6}>
                                                  <h4 className="   ">David Warner</h4>
                                                    <p className=""><i className="primary-color-text fa fa-map-marker"></i> San Francisco</p>
                                            
                                        </Col>
                                        <Col md={3}>
                                            <h5 className="   "><i className="primary-color-text fa fa-dollar-sign"></i>£12 - £25K
</h5>
                                                    <p className="text-muted">Product Designer</p>
                                                    <p className="text-muted">Expired: 29/06/2019</p>
                                        </Col>
                                         <Col md={12}>
                                            <p className="text-muted">Raw denim you probably haven't heard of them jean shorts
                                              Austin. Nesciunt tofu stumptown aliqua, retro synth master
                                              cleanse. Mustache cliche tempor, williamsburg carles vegan
                                              helvetica. Reprehenderit butcher retro keffiyeh
                                              dreamcatcher synth.</p>
                                                  
                                        </Col>
                                        
                                     </Row>
                                              <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
                                                  <Row className="mt-3">
                                        <Col md={4}>
                                           <Link  to="/" className="  primary-color-text f-21 font-weight-500">Get to know more </Link>
                                        </Col>
                                       <Col md={5}>
                                                  <Link  to="/" className="   primary-color-text f-21 font-weight-500">Show me more </Link>
                                                   
                                            
                                        </Col>
                                        <Col md={3}>
                                           <NavItem className="btn btn-primary badge-pill shadow w-100 text-dark primary-color">Quick Apply </NavItem>
                                        </Col>
                                         
                                        
                                     </Row>
                                                  
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={12} className="mt-3">
                                <Card className="shadow">
                                    <CardBody>
                                    <Row>
                                        <Col md={2}>
                                            <img
                                              alt="..."
                                              className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-70 "
                                              src={require("../assets/img/theme/team-1-800x800.jpg")}
                                            /> 
                                        </Col>
                                       <Col md={6}>
                                                  <h4 className="   ">David Warner</h4>
                                                    <p className=""><i className="primary-color-text fa fa-map-marker"></i> San Francisco</p>
                                            
                                        </Col>
                                        <Col md={3}>
                                            <h5 className="   "><i className="primary-color-text fa fa-dollar-sign"></i>£12 - £25K
</h5>
                                                    <p className="text-muted">Product Designer</p>
                                                    <p className="text-muted">Expired: 29/06/2019</p>
                                        </Col>
                                         <Col md={12}>
                                            <p className="text-muted">Raw denim you probably haven't heard of them jean shorts
                                              Austin. Nesciunt tofu stumptown aliqua, retro synth master
                                              cleanse. Mustache cliche tempor, williamsburg carles vegan
                                              helvetica. Reprehenderit butcher retro keffiyeh
                                              dreamcatcher synth.</p>
                                                  
                                        </Col>
                                        
                                     </Row>
                                              <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
                                                  <Row className="mt-3">
                                        <Col md={4}>
                                           <Link  to="/" className="  primary-color-text f-21 font-weight-500">Get to know more </Link>
                                        </Col>
                                       <Col md={5}>
                                                  <Link  to="/" className="   primary-color-text f-21 font-weight-500">Show me more </Link>
                                                   
                                            
                                        </Col>
                                        <Col md={3}>
                                           <NavItem className="btn btn-primary badge-pill shadow w-100 text-dark primary-color">Quick Apply </NavItem>
                                        </Col>
                                         
                                        
                                     </Row>
                                                  
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={12} className="mt-3">
                                <Card className="shadow">
                                    <CardBody>
                                    <Row>
                                        <Col md={2}>
                                            <img
                                              alt="..."
                                              className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-70 "
                                              src={require("../assets/img/theme/team-1-800x800.jpg")}
                                            /> 
                                        </Col>
                                       <Col md={6}>
                                                  <h4 className="   ">David Warner</h4>
                                                    <p className=""><i className="primary-color-text fa fa-map-marker"></i> San Francisco</p>
                                            
                                        </Col>
                                        <Col md={3}>
                                            <h5 className="   "><i className="primary-color-text fa fa-dollar-sign"></i>£12 - £25K
</h5>
                                                    <p className="text-muted">Product Designer</p>
                                                    <p className="text-muted">Expired: 29/06/2019</p>
                                        </Col>
                                         <Col md={12}>
                                            <p className="text-muted">Raw denim you probably haven't heard of them jean shorts
                                              Austin. Nesciunt tofu stumptown aliqua, retro synth master
                                              cleanse. Mustache cliche tempor, williamsburg carles vegan
                                              helvetica. Reprehenderit butcher retro keffiyeh
                                              dreamcatcher synth.</p>
                                                  
                                        </Col>
                                        
                                     </Row>
                                              <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
                                                  <Row className="mt-3">
                                        <Col md={4}>
                                           <Link  to="/" className="  primary-color-text f-21 font-weight-500">Get to know more </Link>
                                        </Col>
                                       <Col md={5}>
                                                  <Link  to="/" className="   primary-color-text f-21 font-weight-500">Show me more </Link>
                                                   
                                            
                                        </Col>
                                        <Col md={3}>
                                           <NavItem className="btn btn-primary badge-pill shadow w-100 text-dark  primary-color">Quick Apply </NavItem>
                                        </Col>
                                         
                                        
                                     </Row>
                                                  
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={12} className="mt-3">
                                <Card className="shadow">
                                    <CardBody>
                                    <Row>
                                        <Col md={2}>
                                            <img
                                              alt="..."
                                              className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-70 "
                                              src={require("../assets/img/theme/team-1-800x800.jpg")}
                                            /> 
                                        </Col>
                                       <Col md={6}>
                                                  <h4 className="   ">David Warner</h4>
                                                    <p className=""><i className="primary-color-text fa fa-map-marker"></i> San Francisco</p>
                                            
                                        </Col>
                                        <Col md={3}>
                                            <h5 className="   "><i className="primary-color-text fa fa-dollar-sign"></i>£12 - £25K
</h5>
                                                    <p className="text-muted">Product Designer</p>
                                                    <p className="text-muted">Expired: 29/06/2019</p>
                                        </Col>
                                         <Col md={12}>
                                            <p className="text-muted">Raw denim you probably haven't heard of them jean shorts
                                              Austin. Nesciunt tofu stumptown aliqua, retro synth master
                                              cleanse. Mustache cliche tempor, williamsburg carles vegan
                                              helvetica. Reprehenderit butcher retro keffiyeh
                                              dreamcatcher synth.</p>
                                                  
                                        </Col>
                                        
                                     </Row>
                                              <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
                                                  <Row className="mt-3">
                                        <Col md={4}>
                                           <Link  to="/" className="  primary-color-text f-21 font-weight-500">Get to know more </Link>
                                        </Col>
                                       <Col md={5}>
                                                  <Link  to="/" className="   primary-color-text f-21 font-weight-500">Show me more </Link>
                                                   
                                            
                                        </Col>
                                        <Col md={3}>
                                           <NavItem className="btn btn-primary badge-pill shadow w-100 text-dark  primary-color">Quick Apply </NavItem>
                                        </Col>
                                         
                                        
                                     </Row>
                                                  
                                    </CardBody>
                                </Card>
                            </Col>
                            
                            
                                           
                          </Row>
                        </Col>
                       
                        <Col md={3}>
                             <Row>
                                <Col md={4}>
                                      <span className="float-right f-24 my-family font-weight-500">Projects</span>
                                </Col>
                                <Col md={3} className="text-center">
                                    <label className="mt-2 custom-toggle">
                                      <input defaultChecked type="checkbox" />
                                      <span className="custom-toggle-slider " />
                                    </label>
                                </Col>
                                <Col md={4} >
                                    <span className=" f-24 my-family font-weight-500">Jobs</span>
                                    
                                </Col>
                             </Row>
                            <Row className="mt-4">
                                <Col md={6}>
                                      <span className="text-center f-19 my-family font-weight-600">Filter</span>
                                </Col>
                                <Col md={6} className="text-center">
                                    {this.state.filter
                                    ?<a className="f-19 text-muted" onClick={()=> this.hidefilter()}>Clear</a>
                                    :<a className="f-19 primary-color-text " onClick={()=> this.showfilter()}>Show</a>
                                    }
                                    
                                </Col>
                             </Row>
                                 {this.state.filter
                        ?
                                <div>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Locations</p>
                                      <InputGroup className="input-group-alternative mb-4">
                                          <Input
                                      className="input-bc border-t-l-r border-b-l-r"
                                            placeholder="Your current location"
                                            type="text"
                                            onFocus={e =>
                                              this.setState({ birthdayAltFocused: true })
                                            }
                                            onBlur={e =>
                                              this.setState({ birthdayAltFocused: false })
                                            }
                                          />
                                          <InputGroupAddon addonType="append" >
                                            <InputGroupText className="border-b-r-r border-t-r-r">
                                              <i className="ni ni-pin-3 primary-color-text" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Col md={12}>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2 "><span className="f-14 text-dark float-left"> Lahore</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2"><span className="f-14 text-dark float-left"> Karachi</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2 "><span className="f-14 text-dark float-left"> Lahore</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2"><span className="f-14 text-dark float-left"> Karachi</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2"><span className="f-14 text-dark float-left"> Karachi</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                </Col>
                             </Row>
                            <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Job Type       </p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span>Graduate Job</span>
                                          </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>Experienced Job</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>Graduate Internship</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>Student Summer Internship</span>
                                              </label>
                                        </div>
                                </Col>
                             </Row>
                             <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Sector</p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span>Advertising</span>
                                          </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>Consulting</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>Data</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>Digital media</span>
                                              </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>Engineering</span>
                                              </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>Fashion</span>
                                              </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>Environmental</span>
                                              </label>
                                        </div>
                                </Col>
                             </Row>
                            <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Salary</p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span>£12k+</span>
                                          </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>£20k+</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>£25k+</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span>£35k+</span>
                                              </label>
                                        </div>
                                </Col>
                             </Row>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Locations</p>
                                      <InputGroup className="input-group-alternative mb-4">
                                          <Input
                                      className="input-bc border-t-l-r border-b-l-r"
                                            placeholder="Keyword"
                                            type="text"
                                            onFocus={e =>
                                              this.setState({ birthdayAltFocused: true })
                                            }
                                            onBlur={e =>
                                              this.setState({ birthdayAltFocused: false })
                                            }
                                          />
                                          <InputGroupAddon addonType="append" >
                                            <InputGroupText className="border-b-r-r border-t-r-r">
                                              <i className="ni ni-tag primary-color-text" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Col md={12}>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2 "><span className="f-14 text-dark float-left"> UI/UX</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2"><span className="f-14 text-dark float-left"> Web Design</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2 "><span className="f-14 text-dark float-left"> Graphics</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2"><span className="f-14 text-dark float-left"> Adobe</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                    <span class="badge badge-pill badge-warning py-2 px-3 mr-2"><span className="f-14 text-dark float-left"> Designing</span> <span className="float-right ml-2 rounded-circle f-14 bg-white primary-color-text shadow cross">X</span></span>
                                </Col>
                             </Row>
                            </div>
                            :null
                        }
                        </Col>
                        
                    </Row>
                   
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
                </Row>
            </Container>
        
        </section>
        <Footer page={this.props.page} />
        </main>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    plans: state.common.plans
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentPage);
