import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://facebook.com">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://x.com/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://google.com/">
            <i className="fa-brands fa-google"></i>
          </a>
          <a href="https://youtube.com/">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="https://cp24.com/">News</a></li>
            <li><a href="https://www.netflix.com">About</a></li>
            <li><a href="https://www.gmail.com/">Contact Us</a></li>
            <li><a href="https://www.tdsb.on.ca/library/">Our Team</a></li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy; 2024; Designed by <span class="designer">Roy Jiang</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
