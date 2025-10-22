import { OPENING_HOURS, CONTACT_INFO, SOCIAL_LINKS } from "../../../utils/footer-info";
import "./Footer.css";
import { FooterSection } from "./FooterSection";

export const Footer = () => {
  return (
    <footer className="text-lg-start">
      <div className="p-4 pb-0">
        <div className="main-footer-div">
          <FooterSection title="OPENING HOURS:">
            <table className="xl:text-2xl">
              <tbody>
                {OPENING_HOURS.map(({ days, hours }) => (
                  <tr key={days}>
                    <td>{days}</td>
                    <td>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FooterSection>

          <hr className="w-100 clearfix" />

          <FooterSection title="Contact">
            {CONTACT_INFO.map(({ icon, href, text }) => (
              <p key={text} className="text-white xl:text-2xl">
                <i className={`text-white ${icon}`}></i>
                <a className="footer-text" href={href}>
                  {text}
                </a>
              </p>
            ))}
          </FooterSection>

          <hr className="w-100 clearfix" />

          <div className="social-follow-div">
            <FooterSection title="TaekwonMaru">
              <p className="text-white xl:text-2xl">
                We hope to hear from you soon! <br />
                You can also follow us!
              </p>
              <div id="social-links">
                {SOCIAL_LINKS.map(({ href, icon, ariaLabel }) => (
                  <a
                    key={href}
                    className="social"
                    href={href}
                    role="button"
                    aria-label={ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </FooterSection>
          </div>
        </div>
        <hr className="bottom-line" />
        <div className="footer-credits xl:text-2xl">
          Made by <a href="https://akashbhowmick.com/">AKA CODE</a>
        </div>
      </div>
    </footer>
  );
};
