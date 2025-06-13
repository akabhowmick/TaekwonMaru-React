import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const classOptions = [
  "Little Tiger (2-5)",
  "Children (6-9)",
  "Pre-Teen (10-13)",
  "Advanced Teen (14-17)",
  "Adults (18+)",
  "Kpop Dance Class (6+)",
];

const contactFormInput = [
  { name: "STUDENT'S NAME", label: "student_name" },
  { name: "PARENT'S NAME (IF STUDENT YOUNGER THAN 18)", label: "parent_name" },
  { name: "EMAIL", label: "email" },
  { name: "PHONE NUMBER", label: "phone_number" },
  { name: "MESSAGE", label: "message" },
];

export const ContactForm = () => {
  const [buttonState, setButtonState] = useState("Send Message");
  const [submitStatus, setSubmitStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      student_name: "",
      parent_name: "",
      phone_number: "",
      email: "",
      message: "",
      class_of_interest: classOptions[0],
    },
    validationSchema: Yup.object({
      student_name: Yup.string().required("* Name field is required"),
      phone_number: Yup.string()
        .required("* Phone Number is required")
        .matches(/[0-9]{10}/, "Enter your 10 digit phone number with no spaces")
        .max(10, "Only enter 10 digits"),
      email: Yup.string().email("Invalid email address").required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
      class_of_interest: Yup.string().required(
        "* Picking a class will help us give you the most relevant information"
      ),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setButtonState("Sending...");
      setSubmitStatus("");

      try {
        // Create FormData object for FormSubmit.co
        const formData = new FormData();

        // Add your email address here - REPLACE WITH YOUR EMAIL
        formData.append("_to", "usataekwonmaru@gmail.com");

        // FormSubmit.co special fields
        formData.append("_subject", `New Contact Form Submission from ${values.student_name}`);
        formData.append("_template", "table"); 
        formData.append("_captcha", "true"); 

        // Form data
        formData.append("Student Name", values.student_name);
        formData.append("Parent Name", values.parent_name || "Not provided");
        formData.append("Email", values.email);
        formData.append("Phone Number", values.phone_number);
        formData.append("Class of Interest", values.class_of_interest);
        formData.append("Message", values.message);

        const response = await fetch("https://formsubmit.co/usataekwonmaru@gmail.com", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setButtonState("Message Sent!");
          setSubmitStatus("success");
          resetForm();
          // Reset button text after 3 seconds
          setTimeout(() => {
            setButtonState("Send Message");
            setSubmitStatus("");
          }, 3000);
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        console.error("Error:", error);
        setButtonState("Failed to Send");
        setSubmitStatus("error");
        // Reset button text after 3 seconds
        setTimeout(() => {
          setButtonState("Send Message");
          setSubmitStatus("");
        }, 3000);
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Helper functions
  const getFormikValues = (label: string) => {
    switch (label) {
      case "student_name":
        return formik.values.student_name;
      case "email":
        return formik.values.email;
      case "phone_number":
        return formik.values.phone_number;
      case "message":
        return formik.values.message;
      case "class_of_interest":
        return formik.values.class_of_interest;
      case "parent_name":
        return formik.values.parent_name;
      default:
        return "";
    }
  };

  const getFormikErrors = (label: string) => {
    switch (label) {
      case "student_name":
        return formik.errors.student_name;
      case "email":
        return formik.errors.email;
      case "phone_number":
        return formik.errors.phone_number;
      case "message":
        return formik.errors.message;
      case "class_of_interest":
        return formik.errors.class_of_interest;
      default:
        return "";
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        {/* Status message */}
        {submitStatus === "success" && (
          <div className="status-message success">Message sent successfully!</div>
        )}
        {submitStatus === "error" && (
          <div className="status-message error">Failed to send message. Please try again.</div>
        )}

        <table className="form-table">
          <tbody>
            {contactFormInput.map(({ name, label }) => (
              <tr key={label}>
                <th>{name}</th>
                <td>
                  {label === "message" ? (
                    <textarea
                      className="contact-form-textarea"
                      id={label}
                      name={label}
                      placeholder={`Enter ${name.toLowerCase()}`}
                      onChange={formik.handleChange}
                      value={getFormikValues(label)}
                    />
                  ) : (
                    <input
                      className="contact-form-input"
                      id={label}
                      name={label}
                      type={label === "email" ? "email" : "text"}
                      autoComplete="off"
                      placeholder={`Enter ${name.toLowerCase()}`}
                      onChange={formik.handleChange}
                      value={getFormikValues(label)}
                    />
                  )}
                  {formik.submitCount > 0 && getFormikErrors(label) && (
                    <div className="error-message">{getFormikErrors(label)}</div>
                  )}
                </td>
              </tr>
            ))}

            <tr>
              <th>CLASS OF INTEREST</th>
              <td>
                <select
                  className="contact-form-select"
                  id="class_of_interest"
                  name="class_of_interest"
                  onChange={formik.handleChange}
                  value={getFormikValues("class_of_interest")}
                >
                  {classOptions.map((className) => (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  ))}
                </select>
                {formik.submitCount > 0 && getFormikErrors("class_of_interest") && (
                  <div className="error-message">{getFormikErrors("class_of_interest")}</div>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="button-container">
          <button
            disabled={formik.isSubmitting}
            type="submit"
            className={`submit-button ${submitStatus === "success" ? "success" : ""} ${
              submitStatus === "error" ? "error" : ""
            }`}
          >
            {buttonState}
          </button>
        </div>
      </form>
    </div>
  );
};
