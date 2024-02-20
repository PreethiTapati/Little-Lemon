import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import FooterImg from "../images/logos/littleLemonfooterLogo.png";
//import logoWhiteImage from '../images/logos/logo-white.png';
import { Link } from 'react-router-dom';
import './Footer.css';

library.add(
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faEnvelope,
  faLocationDot,
  faPhone
);

const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faTwitter, name: 'twitter', },
  { icon: faInstagram, name: 'instagram', },
  { icon: faYoutube, name: 'youtube', },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img
          className="site-footer-logo"
          src={ FooterImg }
          alt="Little Lemon"
        />
        <nav className="site-footer-nav">
          <h6>SITE MAP</h6>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reserve">Reserve</Link>
            </li>
          </ul>
        </nav>
           <div className="site-footer-contact">
          <h6>Contact us</h6>
          <address>
           <p>
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="contact-info">678 Pisa Ave, Chicago, IL 60611</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-info">(312) 593-2744</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-info">customer@littlelemon.com</span>
            </p>
          </address>
        </div>
        <div className="site-footer-social">
          <h6>Connect with us</h6>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
        <div className="col-full foot-center">
          <p>Copyright © 2024 Little Lemon™ . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
