import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [buttonState, setButtonState] = useState("Send Message");
  const formik = useFormik({
    initialValues: {
      from_name: "", //user name
      subject: "", // subject of email
      reply_to: "", // user email
      message: "", // message of email
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("* Name field is required"),
      subject: Yup.string().required("* Subject field is required"),
      reply_to: Yup.string().email("Invalid email address").required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      try {
        emailjs
          .send("service_iodyf8e", "template_s9bux1j", values, "a8dh5CLKMF5OX1aLy")
          .then(() => {
            setButtonState("Send Email");
            setSubmitting(false);
            resetForm();
          });
      } catch {
        setButtonState("Send Email");
        setSubmitting(false);
      }
    },
  });
  return (
    <form className="formcontact" onSubmit={formik.handleSubmit}>
      <div className="form-row-1">
        <div className="contact-form-div">
          <label htmlFor="from_name">Name:</label>
          <input
            className="contact-form-input"
            id="from_name"
            name="from_name"
            type="text"
            autoComplete="off"
            placeholder="YOUR NAME"
            onChange={formik.handleChange}
            value={formik.values.from_name}
          />
          <div className={`expandable ${formik.errors.from_name ? "show" : ""}`}>
            {formik.errors.from_name}
          </div>
        </div>
        <div className="contact-form-div">
          <label htmlFor="subject">Subject</label>
          <input
            className="contact-form-input"
            id="subject"
            name="subject"
            type="text"
            autoComplete="off"
            placeholder="SUBJECT"
            onChange={formik.handleChange}
            value={formik.values.subject}
          />
          <div className={`expandable ${formik.errors.subject ? "show" : ""}`}>
            {formik.errors.subject}
          </div>
        </div>
        <div className="contact-form-div">
          <label htmlFor="reply_to">Email</label>
          <input
            className="contact-form-input"
            id="reply_to"
            type="email"
            name="reply_to"
            placeholder="YOUR EMAIL"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.reply_to}
          />
          <div className={`expandable ${formik.errors.reply_to ? "show" : ""}`}>
            {formik.errors.reply_to}
          </div>
        </div>

        <div className="contact-message-div">
          <label htmlFor="message">Message</label>
          <textarea
            className="contact-form-input"
            id="message"
            name="message"
            placeholder="YOUR MESSAGE"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <div className={`expandable ${formik.errors.message ? "show" : ""}`}>
            {formik.errors.message}
          </div>
        </div>
        <div className="col-12">
          <button
            id="contact-submit-btn"
            disabled={formik.isSubmitting}
            type="submit"
            className="btn btn-primary"
          >
            <span>{buttonState}</span>
          </button>
        </div>
        <div className="col-12 form-message">
          <span id="output" className="output_message text-center text-uppercase" />
        </div>
      </div>
    </form>
  );
};
