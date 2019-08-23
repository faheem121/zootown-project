import React from 'react';
import { Button } from '../../../components/UI';
import { Col, Row } from 'antd';

class PostAJobContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="PostAJobContent">
        <div className="PostAJobContent__Header">
          <h3>POST A JOB</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <Row type="flex" justify="space-between" align="middle" className="option">
            <Col span={4} style={{ textAlign: 'left' }}>
              <h3 />
            </Col>
            <Col span={13}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              </p>
            </Col>
            <Col span={3}>
              <h3>£00.00</h3>
            </Col>
            <Col span={4}>
              <Button>Choose</Button>
            </Col>
          </Row>

          <Row type="flex" justify="space-between" align="middle" className="option">
            <Col span={4} style={{ textAlign: 'left' }}>
              <h3>3 X JOB POST</h3>
            </Col>
            <Col span={13}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              </p>
            </Col>
            <Col span={3}>
              <h3>£00.00</h3>
            </Col>
            <Col span={4}>
              <Button>Choose</Button>
            </Col>
          </Row>

          <Row type="flex" justify="space-between" align="middle" className="option">
            <Col span={4} style={{ textAlign: 'left' }}>
              <h3>6 X JOB POST</h3>
            </Col>
            <Col span={13}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              </p>
            </Col>
            <Col span={3}>
              <h3>£00.00</h3>
            </Col>
            <Col span={4}>
              <Button>Choose</Button>
            </Col>
          </Row>

          <Row type="flex" justify="space-between" align="middle" className="option">
            <Col span={4} style={{ textAlign: 'left' }}>
              <h3>10 X JOB POST</h3>
            </Col>
            <Col span={13}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              </p>
            </Col>
            <Col span={3}>
              <h3>£00.00</h3>
            </Col>
            <Col span={4}>
              <Button>Choose</Button>
            </Col>
          </Row>

          <Row type="flex" justify="space-between" align="middle" className="option">
            <Col span={4} style={{ textAlign: 'left' }}>
              <h3>UNLIMITED</h3>
            </Col>
            <Col span={13}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              </p>
            </Col>
            <Col span={3}>
              <h3>£00.00</h3>
            </Col>
            <Col span={4}>
              <Button>Choose</Button>
            </Col>
          </Row>
          <Button>Back</Button>
        </div>
      </div>
    );
  }
}

export default PostAJobContent;
