import { FaMailBulk, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <div className="social-wrapper">
        <a href="mailto:casa-verde@t-online.de" target="_blank">
          <FaMailBulk className="social" />
        </a>
        <a href="https://www.instagram.com/swfun75/" target="_blank">
          <FaInstagram className="social" />
        </a>
        <a href="#" target="_blank">
          <FaFacebook className="social" />
        </a>
      </div>
      <div className="copyright">
        Copyright<sup>©</sup> <span className="year">{year}</span>
      </div>
    </div>
  );
};
export default Footer;
