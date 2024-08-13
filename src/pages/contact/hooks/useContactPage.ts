import { useState } from "react";
import emailjs from "emailjs-com";

export const useContactPage = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_mob: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e?.target?.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    console.log(e);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6auwl3r",
        "template_j0nhirk",
        e?.target,
        "qCWV1g91BBiModa4F"
      )
      .then(
        (result) => {
          console.log(result);
          setFormData({
            user_name: "",
            user_email: "",
            user_mob: "",
            message: "",
          });
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };
  return {
    handleChange,
    handleSubmit,
    formData,
  };
};
