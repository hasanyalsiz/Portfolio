// import React, { useRef } from "react";
// import FormInput from "../reusable/FormInput";
// import Button from "../reusable/Button";
// import emailjs from "emailjs-com";

// const YOUR_SERVICE_ID = "YOUR_SERVICE_ID";
// const YOUR_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
// const YOUR_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         YOUR_SERVICE_ID, // Service ID
//         YOUR_TEMPLATE_ID, // Template ID
//         form.current,
//         YOUR_PUBLIC_KEY // User ID (Public Key)
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           form.current.reset();
//           alert("Email Sent!");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
    
//   );
// };
