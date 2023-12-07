import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
         <Link className='navbar-brand footer-logo'>EG</Link>
        </div>
        <div className="col-md-6 text-end">
          <a href="https://www.instagram.com/electro.grande/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
          <a href="https://www.facebook.com/ELECTROGRANDE/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer-icon" />
          </a>
          <a
            href="https://wa.me/1163753243"
            target="_blank"
            rel="noopener noreferrer">
            <FaWhatsapp className="footer-icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;