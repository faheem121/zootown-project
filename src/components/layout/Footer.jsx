import React, { Component } from 'react';
import { _url } from '../../config/utils';
import { Link } from 'react-router-dom';
import Facebook from '../../assets/icons/facebook.png';

class Footer extends Component {
  goToLink = url => {
    window.open(url);
  };

  render() {
    const { page } = this.props;
    console.log(page);
    return (
      // <Footer>
      <div className="Footer">
        <footer>
          <div className="row link_row">
            <div className="col col-xs-6">
              <p className="footer_section_title">About Us</p>
              <ul className="link_list">
                {page === 'students' && (
                  <li>
                    <a href="/about-us"> Why Zoo Town Tasks?</a>
                  </li>
                )}
                {page === 'employer' && (
                  <li>
                    <a href="/about">Why Zoo Town Tasks?</a>
                  </li>
                )}
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                {/* <li>
                  <a href="/contact">Contact</a>
                </li> */}
              </ul>
            </div>
            <div className="col col-xs-6">
              <p className="footer_section_title">Categories</p>
              <ul className="link_list">
                {page !== 'students' && (
                  <li>
                    <a href="/students"> Student</a>
                  </li>
                )}
                {page !== 'employer' && (
                  <li>
                    <a href="/employer">Employer</a>
                  </li>
                )}
              </ul>
            </div>
            {/* <div className="col col-xs-6">
              <p className="footer_section_title">Navigate</p>
              <ul className="link_list">
                <li>
                  <a href="/about">Why Zoo Town?</a>
                </li>
                <li>
                  <a href="/faq">FAQ's</a>
                </li>
              </ul>
            </div> */}
            <div className="col col-xs-6">
              <p className="footer_section_title">Help</p>
              <ul className="link_list">
                <li>
                  <a href="tac">Terms and Conditions</a>
                </li>
                <li>
                  <a href="/policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col col-xs-6">
              <p className="footer_section_title">Contacts</p>
              <ul className="link_list">
                <li>
                  <a href="/mail">Email Us</a>
                </li>
                <li>
                  <a href="/media">Press & Media enquires</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row copyright_row">
            <div className="col-sm-12 col-md-4">
              <Link to="/" className="logo_link">
                <img alt="logo" src={require("../../assets/images/logo-1.png")} />
              </Link>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="social-buttons-group">
                <img alt="fb" onClick={() => this.goToLink('https://www.facebook.com/')} src={Facebook} />
                <img className="w-20" alt="tw" onClick={() => this.goToLink('https://twitter.com/')} src={require('../../assets/icons/twitter.png')} />
                <img className="w-20" alt="linkedin" onClick={() => this.goToLink('https://instagram.com/')} src={require('../../assets/icons/instagram.png')} />
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <p className="copyright_text">&copy; 2019 ZooTown Tasks</p>
            </div>
          </div>
        </footer>
      </div>
      // </Footer>
    );
  }
}

export default Footer;
