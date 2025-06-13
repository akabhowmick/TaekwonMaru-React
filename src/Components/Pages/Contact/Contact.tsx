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
