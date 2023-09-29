import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ContactForm = () => {
  const notify = () => toast.success("Message Sent!");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...");

    emailjs
      .sendForm(
        "service_6rvo2ej", // Service ID
        "template_3mznq3l", // Template ID
        form.current,
        "bl7VDDEfmeg2mSKt1"// User ID (Public Key)
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contactForm max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholder="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholder="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholder="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button
              onClick={notify}
              title="Send Message"
              type="submit"
              aria-label="Send Message"
            />
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
