import React from 'react';
import { _url } from '../../config/utils';
import { Link } from 'react-router-dom';
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar as ZooNavBar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
    Collapse, CardBody, Card 
} from "reactstrap";
import { Modal, SignupFreelancer, LoginContent, CVDoctorContent, SignupEmployer, ChoosePlanEmployer } from '../../components/UI/modal';
import { connect } from 'react-redux';
import { logoutAuth } from '../../actions/auth';
import { withRouter } from 'react-router';
 let headroom = new Headroom(document.getElementById("navbar-main"));
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      collapse: false,
      scrolled: false,
        EmployeerLoggedin:false,
        freelancerLoggedin:true,
      page: props.page || 'students'
    };
  }
  handleScroll = () => {
    if (window.scrollY > 0 && !this.state.scrolled) {
      this.setState({
        scrolled: true
      });
    }
    if (window.scrollY < 1 && this.state.scrolled) {
      this.setState({
        scrolled: false
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  componentWillReceiveProps(props) {
    this.setState({ page: props.page });
  }

  isLogin = () => {
    return this.props.auth.user && this.props.auth.user.id;
  };
  componentDidMount() {
      
    // initialise
//    headroom.init();
    window.addEventListener('scroll', this.handleScroll);
  }
  onClickLogout = e => {
    this.props.dispatch(logoutAuth());
    this.props.history.push('/');
  };

  toggleCollapse = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  handleClick = () => {
    if (!this.state.isMobile) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState(prevState => ({
      isMobile: !prevState.isMobile
    }));
  };

  handleOutsideClick = e => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  };

  closeMenu = () => {
    this.setState({ isMobile: false });
    document.removeEventListener('click', this.handleOutsideClick, false);
  };

  onScroll = e => {
    let height = document.getElementById(e);
    window.scrollTo(0, height.offsetTop - 200);
    this.setState({
      isMobile: false
    });
    document.removeEventListener('click', this.handleOutsideClick, false);
  };

  render() {
    const { page, scrolled } = this.state;
    const { aboutUs } = this.props;
    const backgroundColor = aboutUs ? { backgroundColor: 'transparent' } : {};
    const scrolledCheck = aboutUs && scrolled ? 'scrolled' : '';
    const colorTagA = aboutUs ? 'Navbar__Menu__Item_Aboutus' : 'Navbar__Menu__Item';

    return (
        <header className="header-global">
          <ZooNavBar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container fluid className="ml-md-lg mr-md-lg">
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img className="h-110"
                  alt="..."
                  src={require('../../assets/images/logo-1.png')}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require('../../assets/images/logo-1.png')}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                
                    {page === 'students' && (
                      <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                        <NavItem>
                            <Link className="nav-link-icon text-dark" to="/about-us">Why Zoo Town Tasks?</Link>
   
                  </NavItem>
                    <NavItem>
                        <Link className="nav-link-icon text-dark" to="/jobs">Job Boards</Link>                    
                  </NavItem>
                    <NavItem>
                        <Link className="nav-link-icon text-dark" to="/blog">Blogs</Link>                        
                  </NavItem>
                    <NavItem>
                        <Link className="nav-link-icon text-dark" to="/events">Events</Link>
                  </NavItem>
                            {!this.state.freelancerLoggedin
                    ?
                    <NavItem>
                                                <Link className="nav-link-icon text-dark" to="/employer">Employer</Link>             
                  </NavItem>
                              :null}
                      </Nav>
                        )}
                    {page === 'employer' && (
                              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                        <NavItem>
                    <Link className="nav-link-icon text-dark" to="/about-us">Why Zoo Town Tasks?</Link>
                  </NavItem>
                    <NavItem>
                            <Modal content={<ChoosePlanEmployer step={2} type={'job'} />} className="ModalSignup">
                  <a className="nav-link-icon text-dark">Post a Job</a>
                </Modal>
                    
                    
                  </NavItem>
                    <NavItem>
                    <Modal content={<ChoosePlanEmployer step={3} type={'event'} />} className="ModalSignup">
                  <a className="nav-link-icon text-dark">Post a Event</a>
                </Modal>
                    
                  </NavItem>
                    <NavItem>
                        <Link className="nav-link-icon text-dark" to="/events">Events</Link>
                    
                  </NavItem>
                        <NavItem>
                    <Link className="nav-link-icon text-dark" to="/students">Students</Link>  
                    
                  </NavItem>
                          </Nav>
                        )}
                    {this.state.freelancerLoggedin
                    ?
                      (
                      <Nav className="align-items-lg-center ml-lg-auto" navbar>
                          <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                     <img
                      alt="..."
                      className=""
                      src={require("../../assets/message.png")}
                    /> 
                    </DropdownToggle>
                    <DropdownMenu className="mt-lg ml-lg-n3 w-250 primary-color">
                        <Row >
                            
                            
                            <div className="col-3">
                             <img
                      alt="..."
                      className="ml-1 circle-noti img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                        </div>
                          
                        <div className="col-6">
                            <span className="text-dark f-12 font-weight-700">New message from</span>
                            <p className="text-dark f-10 font-weight-700"> David Warner</p>
                        </div>
                            <div className="col-3">
                            <span className="text-dark f-8 ">12:20 pm</span>
                            
                        </div>
                            
                        </Row>
                        <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
                        <Row >
                            
                            
                            <div className="col-3">
                             <img
                      alt="..."
                      className="ml-1 circle-noti img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                        </div>
                          
                        <div className="col-6">
                            <span className="text-dark f-12 font-weight-700">New message from</span>
                            <p className="text-dark f-10 font-weight-700"> David Warner</p>
                        </div>
                            <div className="col-3">
                            <span className="text-dark f-8 ">12:20 pm</span>
                            
                        </div>
                            
                        </Row>
                        <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
<Row >
                            
                            
                            <div className="col-3">
                             <img
                      alt="..."
                      className="ml-1 circle-noti img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                        </div>
                          
                        <div className="col-6">
                            <span className="text-dark f-12 font-weight-700">New message from</span>
                            <p className="text-dark f-10 font-weight-700"> David Warner</p>
                        </div>
                            <div className="col-3">
                            <span className="text-dark f-8 ">12:20 pm</span>
                            
                        </div>
                            
                        </Row>
                        <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
<Row >
                            
                            
                            <div className="col-3">
                             <img
                      alt="..."
                      className="ml-1 circle-noti img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                        </div>
                          
                        <div className="col-6">
                            <span className="text-dark f-12 font-weight-700">New message from</span>
                            <p className="text-dark f-10 font-weight-700"> David Warner</p>
                        </div>
                            <div className="col-3">
                            <span className="text-dark f-8 ">12:20 pm</span>
                            
                        </div>
                            
                        </Row>
                        <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
<Row >
                            
                            
                            <div className="col-3">
                             <img
                      alt="..."
                      className="ml-1 circle-noti img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                        </div>
                          
                        <div className="col-6">
                            <span className="text-dark f-12 font-weight-700">New message from</span>
                            <p className="text-dark f-10 font-weight-700"> David Warner</p>
                        </div>
                            <div className="col-3">
                            <span className="text-dark f-8 ">12:20 pm</span>
                            
                        </div>
                            
                        </Row>
                        <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
                           <Row >
                            
                            
                            <div className="col-12">
                             <NavItem className="text-center">
                        <Link className="nav-link-icon text-dark" to="/messages">See all messages</Link>                    
                  </NavItem>
                        </div>
                            
                        </Row>
                                
                  
                    </DropdownMenu>
                  </UncontrolledDropdown>
                          <UncontrolledDropdown nav className="pr-5">
                    <DropdownToggle nav>
                     <img
                      alt="..."
                      className=""
                      src={require("../../assets/notify.png")}
                    /> 
                    </DropdownToggle>
                    <DropdownMenu className="mt-lg ml-lg-n3 w-250 primary-color">
                        <Row className="mt-1">
                             <div className="col-3">
                             <img
                      alt="..."
                      className="ml-1 circle-noti img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                        </div>
                          
                          <div className="col-9">
                            <p className="text-dark f-10"> Lorem Ipsum is simply dummy text industry.</p>
                        </div>
                            
                        </Row>
                         <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
                        <Row className="mt-1">
                             <div className="col-3">
                             <img
                      alt="..."
                      className="ml-1 circle-noti img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                        </div>
                          
                          <div className="col-9">
                            <p className="text-dark f-10"> Lorem Ipsum is simply dummy text industry.</p>
                        </div>
                            
                        </Row>
                         <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
                        <Row className="mt-1">
                             <div className="col-3">
                             <img
                      alt="..."
                      className="ml-1 circle-noti img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                        </div>
                          
                          <div className="col-9">
                            <p className="text-dark f-10"> Lorem Ipsum is simply dummy text industry.</p>
                        </div>
                            
                        </Row>
                         <hr className="text-dark h-1 bg-dark mt-0 mb-1 mx-2" />
                        <Row >
                            
                            
                            <div className="col-12">
                             <NavItem className="text-center">
                        <Link className="nav-link-icon text-dark" to="/notifications">See all notifications</Link>                    
                  </NavItem>
                        </div>
                            
                        </Row>
                        
                       
                                
                  
                    </DropdownMenu>
                  </UncontrolledDropdown>
                          <UncontrolledDropdown nav >
                    <DropdownToggle nav>
                     <img
                      alt="..."
                      className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-70"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    /> 
                    </DropdownToggle>
                    <DropdownMenu className="mt-lg primary-color">
                      <DropdownItem to="/landing-page" tag={Link}>
                        My Profile
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        Setting
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                          
                     
                      </Nav>
                  )
                    
                    : this.state.EmployeerLoggedin ? (
                          <Nav className="align-items-lg-center ml-lg-auto" navbar>
                       <Link className="nav-link-icon text-dark" to="/students">emplyeer</Link>
                      </Nav>
                  ):
                    (
                    <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  
                  <NavItem >
                      <Modal content={<CVDoctorContent />} className="ModalCVDoctor">

                    <span className="Navbar__Menu__Cv">
                    <span className="cv-doctor">
                  <img alt="" className="doc_img cv-doc" src="assets/images/document.png" />
                  <img alt="" className="circle-upload cv-doc" src="assets/images/circle_upload.png" />
                  CV Doctor
                </span>
                </span>
                          </Modal>
                  </NavItem>
                <NavItem>
                   <Modal content={<LoginContent />} className="ModalLogin">
                    <a className="nav-link-icon text-dark">Login</a>
                        
                    </Modal>
                  </NavItem>
                    {this.state.page === 'students' ? (
                  <NavItem className="btn btn-primary badge-pill shadow w-100 font-weight-600 primary-color">
                            <Modal isKeepShow content={<SignupFreelancer />} className="ModalSignup">
                        Signup
                            </Modal>
                  </NavItem>
                        ):
                    (
                    <NavItem className="btn btn-primary badge-pill shadow w-100 font-weight-600 primary-color">
                            <Modal content={<SignupEmployer step={0} signup={true} />} className="ModalSignup">
                        Signup
                            </Modal>
                  </NavItem>
                    )}
                </Nav>
                  )
                    }
                
              </UncontrolledCollapse>
            </Container>
          </ZooNavBar>
             </header>
    );
  }
}

const mapStateToprops = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default withRouter(
  connect(
    mapStateToprops,
    mapDispatchToProps
  )(Navbar)
);
