import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { Row, Col, Switch, Input, Icon, Checkbox } from 'antd';

import { _url } from '../config/utils';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="jobs_content">
          <Row type="flex" justify="space-between" align="top">
            <Col className="left_banner" md={6}>
              <div className="choose_job">
                <span>Jobs</span>
                <Switch defaultChecked />
                <span className="projects-label">Projects</span>
              </div>
              <div className="search_job">
                <div className="search_advanced">Advanced search</div>
                <div className="clear">Clear</div>
              </div>
              <div className="location_job">
                <p>Locations</p>
                <Input className="location_search" placeholder="Your current location" suffix={<Icon type="environment" theme="filled" style={{ color: '#FED008' }} />} />
                <div className="address">
                  {/* <p>
                    San Francisco
                    <img alt="" src={_url('assets/images/delete.png')} />
                  </p>
                  <p>
                    New-York
                    <img alt="" src={_url('assets/images/delete.png')} />
                  </p> */}
                </div>
              </div>
              <div className="check_box">
                <p>Job Type</p>
                <Checkbox style={{ marginLeft: '8px' }}>Graduate Job</Checkbox>
                <Checkbox>Experienced Job</Checkbox>
                <Checkbox>Graduate Internship</Checkbox>
                <Checkbox>Internship</Checkbox>
                <Checkbox>Apprenticeships</Checkbox>
                <Checkbox>Entry Level jobs</Checkbox>
                <Checkbox>Temporary Jobs</Checkbox>
                <Checkbox>Permanent Jobs</Checkbox>
              </div>
              <div className="check_box">
                <p>Sectors</p>
                <Checkbox style={{ marginLeft: '8px' }}>Advertising</Checkbox>
                <Checkbox>Consulting</Checkbox>
                <Checkbox>Data</Checkbox>
                <Checkbox>Digital media</Checkbox>
                <Checkbox>Engineering</Checkbox>
                <Checkbox>Fashion</Checkbox>
                <Checkbox>Environmental</Checkbox>
                <Checkbox>Consulting</Checkbox>
                <Checkbox>Data</Checkbox>
              </div>
              <div className="check_box">
                <p>Salary</p>
                <Checkbox style={{ marginLeft: '8px' }}>£12k+</Checkbox>
                <Checkbox>£20k+</Checkbox>
                <Checkbox>£30k+</Checkbox>
                <Checkbox>£50k+</Checkbox>
              </div>
              <div className="keyword_job">
                <p>Keyword</p>
                <Input className="keyword_search" placeholder="Input Some Skills" />
                <div className="keyword">
                  {/* <p>
                    UX
                    <img alt="" src={_url('assets/images/delete.png')} />
                  </p>
                  <p>
                    UI
                    <img alt="" src={_url('assets/images/delete.png')} />
                  </p>
                  <p>
                    Design
                    <img alt="" src={_url('assets/images/delete.png')} />
                  </p> */}
                </div>
              </div>
            </Col>
            <Col className="right_banner" md={18}>
              <div className="sort">
                <p>SORT BY</p>
                <Input className="map_search" placeholder="Map" suffix={<img alt="" src={_url('assets/images/location.png')} />} />
                <button className="button sort-btn">A-Z Company</button>
              </div>
              <div className="job_detail">
                <p>FREELANCER ACQUISITION EXECUTIVE</p>
                <div className="job_des">
                  <span>
                    {' '}
                    <img alt="" src={_url('assets/icons/location.png')} />
                    San Francisco
                  </span>
                  <span>
                    {' '}
                    <img alt="" src={_url('assets/icons/calendar.png')} />
                    23.10.2019
                  </span>
                  <span>
                    <img alt="" src={_url('assets/icons/salarry.png')} />
                    £12 - £25K
                  </span>
                </div>
                <div className="content_job">
                  This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of
                  campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in
                  an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly
                  sourcing and approaching candidates for specific project briefs.
                </div>
              </div>
              <div className="job_detail">
                <p>FREELANCER ACQUISITION EXECUTIVE</p>
                <div className="job_des">
                  <span>
                    {' '}
                    <img alt="" src={_url('assets/icons/location.png')} />
                    San Francisco
                  </span>
                  <span>
                    {' '}
                    <img alt="" src={_url('assets/icons/calendar.png')} />
                    23.10.2019
                  </span>
                  <span>
                    <img alt="" src={_url('assets/icons/salarry.png')} />
                    £12 - £25K
                  </span>
                </div>
                <div className="content_job">
                  This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of
                  campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in
                  an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly
                  sourcing and approaching candidates for specific project briefs.
                </div>
              </div>
              <div className="job_detail">
                <p>FREELANCER ACQUISITION EXECUTIVE</p>
                <div className="job_des">
                  <span>
                    {' '}
                    <img alt="" src={_url('assets/icons/location.png')} />
                    San Francisco
                  </span>
                  <span>
                    {' '}
                    <img alt="" src={_url('assets/icons/calendar.png')} />
                    23.10.2019
                  </span>
                  <span>
                    <img alt="" src={_url('assets/icons/salarry.png')} />
                    £12 - £25K
                  </span>
                </div>
                <div className="content_job">
                  This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of
                  campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in
                  an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly
                  sourcing and approaching candidates for specific project briefs.
                </div>
              </div>
              <div className="job_detail">
                <p>FREELANCER ACQUISITION EXECUTIVE</p>
                <div className="job_des">
                  <span>
                    {' '}
                    <img alt="" src={_url('assets/icons/location.png')} />
                    San Francisco
                  </span>
                  <span>
                    {' '}
                    <img alt="" src={_url('assets/icons/calendar.png')} />
                    23.10.2019
                  </span>
                  <span>
                    <img alt="" src={_url('assets/icons/salarry.png')} />
                    £12 - £25K
                  </span>
                </div>
                <div className="content_job">
                  This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of
                  campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in
                  an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly
                  sourcing and approaching candidates for specific project briefs.
                </div>
              </div>
              <div className="load_more">
                <button>Load more</button>
              </div>
            </Col>
          </Row>
        </div>
        <Footer page={this.props.page} />
      </div>
    );
  }
}

export default Jobs;
