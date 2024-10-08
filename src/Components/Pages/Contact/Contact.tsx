import "./Contact.css";
import { ContactForm } from "./ContactForm";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmailIcon from "@mui/icons-material/Email";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { SignUpSteps } from "./SignUpSteps";

const contactLinksAndIcons = [
  {
    icon: <ContactsIcon />,
    title: "Address: ",
    info: "611 Hicksville Rd. Bethpage, NY 11714",
    link: "https://www.google.com/maps/place/Maru+TaeKwonDo/@40.7412438,-73.4996425,17z/data=!3m1!4b1!4m6!3m5!1s0x89c280690b8faf85:0x1445eec347bb2097!8m2!3d40.7412398!4d-73.4970622!16s%2Fg%2F1ptx7d04z?entry=ttu",
  },
  { icon: <LocalPhoneIcon />, title: "Phone: ", info: "(516) 433 1887", link: "tel://5164331887" },
  {
    icon: <EmailIcon />,
    title: "Email: ",
    info: "usataekwonmaru@gmail.com",
    link: "mailto:usataekwonmaru@gmail.com",
  },
  {
    icon: <OpenInBrowserIcon />,
    title: "Website: ",
    info: "Maru Taekwondo",
    link: "/",
  },
];

export const Contact = () => {
  const contactContainers = contactLinksAndIcons.map((contact) => {
    return (
      <div key={contact.title} className="dbox w-100 d-flex align-items-center">
        <div className="icon d-flex align-items-center justify-content-center">{contact.icon}</div>
        <div className="text pl-3">
          <p>
            <span>{contact.title}</span>
            <a className="red-text" href={contact.link}>
              {contact.info}
            </a>
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <h3 className="section-header title-capitalize">BOOK A CLASS:</h3>
      <section className="contact-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <ContactForm />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 d-flex align-items-center">
                    <div className="info-wrap w-100 p-md-5 p-4">
                      <h3>Contact us!</h3>
                      {contactContainers}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SignUpSteps />
    </>
  );
};

// old form
{
  /* <form
                      action="https://formsubmit.co/usataekwonmaru@gmail.com"
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                    >
                      <input type="hidden" name="_template" value="box" />
                      <input
                        type="hidden"
                        name="_subject"
                        value="TaekwonMaru - Trial Lesson Inquiry!"
                      />
                      <input type="hidden" name="_next" value="https://marutaekwondo.com/" />
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="name">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="Name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="phone-number">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              name="Phone Number"
                              id="phone-number"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="email">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="Email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">
                              Program of Interest
                            </label>
                            <select name="Program Choice" className="form-control" id="pc">
                              <option value="Little Tiger">
                                Little Tiger Classes (2-5 years old)
                              </option>
                              <option value="Children">Children Classes (6-9 years old)</option>
                              <option value="Pre-teen">Pre-teen Classes (10-13 years old)</option>
                              <option value="Advanced-Teen">
                                Advanced-teen Classes (14-18 years old)
                              </option>
                              <option value="Adult">Adult Classes (18+ years old)</option>
                              <option value="Kpop">KPOP Dance Classes</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="#">
                              Message
                            </label>
                            <textarea
                              name="Message"
                              className="form-control"
                              id="message"
                              cols={30}
                              rows={4}
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              id="send-message"
                              value="Send Message"
                              className="btn round-pill btn-primary"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form> */
}
