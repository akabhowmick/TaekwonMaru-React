import "./Contact.css";
import { ContactForm } from "./ContactForm";
import { SignUpSteps } from "./SignUpSteps";

export const Contact = () => {
  return (
    <>
      <h3 className="section-header title-capitalize">BOOK A CLASS:</h3>
      <section className="contact-form  bg-red-100 ">
        <div className="container">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <ContactForm />
          </div>
        </div>
      </section>
      <SignUpSteps />
    </>
  );
};
