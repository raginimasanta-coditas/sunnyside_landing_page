import React from "react";
import Imageheader from "../assets/desktop/image-header.jpg";
import Glass from "../assets/desktop/image-stand-out.jpg";
import Cone from "../assets/desktop/image-gallery-cone.jpg";
import Milkbottle from "../assets/desktop/image-gallery-milkbottles.jpg";
import Sugarcube from "../assets/desktop/image-gallery-sugarcubes.jpg";
import Cherry from "../assets/desktop/image-graphic-design.jpg";
import Egg from "../assets/desktop/image-transform.jpg";
import Photography from "../assets/desktop/image-photography.jpg";
import Orange from "../assets/desktop/image-gallery-orange.jpg";
import Jennie from "../assets/image-jennie.jpg";
import Thomas from "../assets/image-thomas.jpg";
import Emily from "../assets/image-emily.jpg";
import "./index.styles.scss";
import HamburgerIcon from "../assets/icon-hamburger.svg";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Instagram from "../assets/icon-instagram.svg";
import Pinterest from "../assets/icon-pinterest.svg";

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNavMobile: false,
    };
    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
  }

  toggleHamburgerMenu() {
    this.setState({
      toggleNavMobile: !this.state.toggleNavMobile,
    });
  }

  render() {
    return (
      <div>
        <div
          className="pageheader"
          style={{
            backgroundImage: `url(${Imageheader})`,
          }}
        >
          <div className="header-section">
            <div className="home">sunnyside</div>
            <div className="navbar">
              <div>About</div>
              <div>Service</div>
              <div>Project</div>
              <div>Contact</div>
            </div>
            <div className="hamburger-menu">
              <img onClick={this.toggleHamburgerMenu} src={HamburgerIcon}></img>
              {this.state.toggleNavMobile && (
                <div className="navbar-mobile">
                  <div className="rectangle"></div>
                  <div>About</div>
                  <div>Service</div>
                  <div>Project</div>
                  <div>Contact</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="pictures-parent">
          <div className="card">
            <div className="card-heading">Transfirmm your brand</div>
            <div className="card-content">
              Lorem ipsum dolor sit amet. Aut natus repudiandae ut ipsa nihil
              quo dignissimos quod rem repellat quia. Id autem beatae aut
              obcaecati mollitia nam dicta quos
            </div>
            <div className="learn-more">Learn more</div>
          </div>
          <div
            className="block-image"
            style={{
              backgroundImage: `url(${Egg})`,
            }}
          ></div>

          <div
            className="block-image"
            style={{
              backgroundImage: `url(${Glass})`,
            }}
          ></div>
          <div className="card">
            <div className="card-heading">Standout to the right audience</div>
            <div className="card-content">
              Lorem ipsum dolor sit amet. Aut natus repudiandae ut ipsa nihil
              quo dignissimos quod rem repellat quia. Id autem beatae aut
              obcaecati mollitia nam dicta quos
            </div>
            <div className="learn-more">Learn more</div>
          </div>

          <div
            className="block-image"
            style={{
              backgroundImage: `url(${Cherry})`,
            }}
          >
            <div className="graphic-design-heading">Graphic Design</div>
            <div className="graphic-design-content">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has
            </div>
          </div>
          <div
            className="block-image"
            style={{
              backgroundImage: `url(${Photography})`,
            }}
          >
            <div className="photography-heading">Photography </div>
            <div className="photography-content">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has
            </div>
          </div>
        </div>
        <div className="testimony-block">
          <div className="testimonial-heading">CLIENT TESTIMONIALS</div>
          <div className="card-body">
            <div className="testimonia-card">
              <img className="profile-picture" src={Emily}></img>
              <div className="content">
                “The Lorem Ipsum Company has been an integral part of our
                content marketing success. We have seen a notable increase in
                organic leads since we began ”
              </div>
              <div className="name">Emily R</div>
              <div className="designation">Managing Director</div>
            </div>
            <div className="testimonial">
              <img className="profile-picture" src={Thomas}></img>
              <div className="content">
                “The Lorem Ipsum Company has been an integral part of our
                content marketing success. We have seen a notable increase in
                organic leads since we began ”
              </div>
              <div className="name">Thomas S.</div>
              <div className="designation">Chief Operating Officer</div>
            </div>

            <div className="testimonial">
              <img className="profile-picture" src={Jennie}></img>
              <div className="content">
                Professional, responsive, and able to keep up with ever-changing
                demand and tight deadlines: That's how I would describe Jeramy
                and”
              </div>
              <div className="name">Jennie F. </div>
              <div className="designation">Business Owner</div>
            </div>
          </div>
        </div>
        <div className="lastbanner">
          <div
            className="tile-image"
            style={{
              backgroundImage: `url(${Milkbottle})`,
            }}
          ></div>
          <div
            className="tile-image"
            style={{
              backgroundImage: `url(${Orange})`,
            }}
          ></div>
          <div
            className="tile-image"
            style={{
              backgroundImage: `url(${Cone})`,
            }}
          ></div>
          <div
            className="tile-image"
            style={{
              backgroundImage: `url(${Sugarcube})`,
            }}
          ></div>
        </div>
        <div className="footer">
          <div className="social-media-heading">sunnyside</div>
          <div className="social-media-block">
            <div className="social-media-banner">About</div>
            <div className="social-media-banner">Services</div>
            <div className="social-media-banner">Projects</div>
          </div>
          <div className="social-media-block">
            <div className="icon-banner">
              <img src={Facebook}></img>
            </div>
            <div className="icon-banner">
              <img src={Instagram}></img>
            </div>
            <div className="icon-banner">
              <img src={Twitter}></img>
            </div>
            <div className="icon-banner">
              <img src={Pinterest}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cover;
