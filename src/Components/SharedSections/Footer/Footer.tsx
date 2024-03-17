import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <footer className="text-lg-start">
      <div className="p-4 pb-0">
        <div className="main-footer-div">
          <div>
            <h4 className="text-white text-uppercase mb-4 font-weight-bold">OPENING HOURS:</h4>

            <table>
              <tbody>
                <tr>
                  <td>Mon,Wed,Thu:</td>
                  <td>3:00pm - 9:00pm</td>
                </tr>
                <tr>
                  <td>Tues & Fri:</td>
                  <td>3:00pm - 8:00pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10:00am - 2:30 pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="w-100 clearfix" />

          <div>
            <h4 className="text-white text-uppercase mb-4 font-weight-bold">Contact</h4>
            <p className="text-white">
              <i className="text-white fas fa-home mr-3"></i>
              <a
                className="footer-text"
                href="https://www.google.com/maps/place/Maru+TaeKwonDo/@40.7412438,-73.4996425,17z/data=!3m1!4b1!4m6!3m5!1s0x89c280690b8faf85:0x1445eec347bb2097!8m2!3d40.7412398!4d-73.4970622!16s%2Fg%2F1ptx7d04z?entry=ttu"
              >
                611 Hicksville Rd. Bethpage, NY 11714
              </a>
            </p>
            <p className="text-white">
              <i className="text-white fas fa-envelope mr-3"></i>
              <a className="footer-text" href="mailto:usataekwonmaru@gmail.com">
                usataekwonmaru@gmail.com
              </a>
            </p>
            <p className="text-white">
              <i className="text-white fas fa-phone mr-3"></i>
              <a className="footer-text" href="tel://5164331887">
                (516) 433-1887
              </a>
            </p>
          </div>
          <hr className="w-100 clearfix" />
          <div className="social-follow-div">
            <h4 className="text-white text-uppercase mb-4 font-weight-bold">TaekwonMaru</h4>
            <p className="text-white">We hope to hear from you soon! You can also follow us!</p>
            <div id="social-links">
              <a
                className="social"
                href="https://www.facebook.com/profile.php?id=100057127915552"
                role="button"
              >
                <FacebookIcon fontSize="large" />
              </a>
              <a className="social" href="https://www.instagram.com/marutkd1/" role="button">
                <InstagramIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
        <hr className="bottom-line" />
        <div className="footer-credits">
          Made by <a href="https://akashbhowmick.com/">AKA CODE</a>
        </div>
      </div>
    </footer>
  );
};
