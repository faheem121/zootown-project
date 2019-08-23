import React, { Component } from 'react';
import { Icon } from 'antd';
import { Modal, SignupFreelancer, LoginContent, CVDoctorContent, SignupEmployer, ChoosePlanEmployer } from '../UI/modal';
class PricePlan extends Component {
  render() {
    return (
      <div className="PricePlan">
        <div className="wave_background">
          <h2 className="section_title">PRICING PLAN</h2>
          <h5 className="section_des">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </h5>
        </div>
        <div className="comparison">
          <table className="planlist">
            <tr>
              <td>
                <Icon type="check-circle" theme="filled" style={{ color: '#fed008' }} />
              </td>
              <td> Pay Per Post</td>
            </tr>
            <tr>
              <td>
                <Icon type="check-circle" theme="filled" style={{ color: '#fed008' }} />
              </td>
              <td>Candidate Tracking & Job Monitoring</td>
            </tr>
            <tr>
              <td>
                <Icon type="check-circle" theme="filled" style={{ color: '#fed008' }} />
              </td>
              <td>Candidate & Employer Matching</td>
            </tr>
            <tr>
              <td>
                <Icon type="check-circle" theme="filled" style={{ color: '#fed008' }} />
              </td>
              <td>Free Detailed Reports</td>
            </tr>

            <tr>
              <td>
                <Icon type="check-circle" theme="filled" style={{ color: '#fed008' }} />
              </td>
              <td>Unlimited Job Posts</td>
            </tr>
          </table>
          <div className="plan">
            <table>
              <thead>
                <tr className="plan-title">
                  <th className="compare-heading">POST A JOB</th>
                  <th className="compare-heading">EMPLOYER</th>
                  <th className="compare-heading">EMPLOYER & RECRUITER</th>
                </tr>
                <tr>
                  <th className="price-info">
                    <div className="price-was">£350</div>
                  </th>
                  <th className="price-info">
                    <div className="price-was">£450</div>
                  </th>
                  <th className="price-info">
                    <div className="price-was">£650</div>
                  </th>
                </tr>
                {/* <tr>
                <th className="price-info"> 14 days</th>
                <th className="price-info">10 days</th>
                <th className="price-info">6 days</th>
              </tr> */}
              </thead>
              <tbody>
                <tr>
                  <td />
                </tr>
                <tr>
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                  <td />
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                </tr>
                <tr>
                  <td />
                </tr>
                <tr>
                  <td />

                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                </tr>

                <tr>
                  <td />
                </tr>
                <tr>
                  <td />
                  <td />

                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                </tr>

                <tr>
                  <td />
                  <td />
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                </tr>
                <tr>
                  <td />

                  <td />
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                </tr>

                <tr>
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                  <td>
                    <Icon type="check-circle" theme="filled" style={{ color: 'white' }} />
                  </td>
                </tr>

                <tr>
                  <td>
                    <Modal content={<ChoosePlanEmployer step={2} type={'job'} />} className="ModalSignup">
                      <button className="button-choose">Choose</button>
                    </Modal>
                  </td>
                  <td>
                    {/* <Modal content={<ChoosePlanEmployer step={4} option={2} type={'plan'} />} className="ModalSignup">
                      <button className="button-choose">Choose</button>
                    </Modal> */}
                    <Modal content={<SignupEmployer step={0} isPlan={true} />} className="ModalSignup">
                      <button className="button-choose">Choose</button>
                    </Modal>
                  </td>
                  <td>
                    {/* <Modal content={<ChoosePlanEmployer step={4} option={3} type={'plan'} />} className="ModalSignup">
                      <button className="button-choose">Choose</button>
                    </Modal> */}
                    <Modal content={<SignupEmployer step={0} isPlan={true} />} className="ModalSignup">
                      <button className="button-choose">Choose</button>
                    </Modal>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PricePlan;
