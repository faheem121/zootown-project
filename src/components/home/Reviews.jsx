import React, { Component } from 'react';
import { Col,Container,Row ,Card,
CardBody} from 'reactstrap';
import Slider from 'react-slick';

class Reviews extends Component {
    constructor(props){
     super(props);
  this.state = { width: 0, height: 0,slides:4 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
    if(window.innerWidth <= 450 ){
        this.setState({ slides: 1});
    }else if (window.innerWidth > 450 && window.innerWidth <= 750  ){
        this.setState({ slides: 2});
    }
    else if (window.innerWidth > 750 && window.innerWidth <= 1020  ){
        this.setState({ slides: 3});
    }else if (window.innerWidth > 1020 ){
        this.setState({ slides: 4});
    }
  this.setState({ width: window.innerWidth, height: window.innerHeight });
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
      <Container fluid className="">
          <Row>
              <Col md={8} className="ml-auto mr-auto">
              <div className="my-2 text-dark ml-auto mr-auto text-center f-40 font-weight-700 my-family">USER REVIEWS</div>
        <p className="my-4 text-dark my-family ml-lg-lg mr-lg-lg text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
              </Col>
         
                <Col md="12"  >
                <Slider {...settings} className="row">
         
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                        <Col md="12" >
                            <Card className=" card-lift--hover shadow   border-0  ">
                                <CardBody className="py-5">
                                    
                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="review_name">Sam Milush</h3>
                  <p className="review_mail text-muted font-weight-400">@abagael123</p>
                                                  <hr className="primary-color-text h-2 primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src="assets/icons/quote.svg" />
                  <p className="benefit_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
                                      
                                </CardBody>
                            </Card>
                    </Col>
                       
                                      
                          
                       

             
            </Slider>
                      </Col>
                  
 
              </Row>
      </Container>
        </section>
    );
  }
}

export default Reviews;
