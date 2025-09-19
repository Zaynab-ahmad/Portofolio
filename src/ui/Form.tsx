"use client";
import FormField from "./FormField";
import { useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  try {
    // 1. يرسل لك أنت الرسالة
    await emailjs.send(
      "service_z8d9inl",
      "template_s3uyos9", // 👈 ضع هنا ID القالب الخاص بك
      {
        user_email: formData.email,
        user_mobile: formData.mobile,
        user_message: formData.message,
      },
      "E3c83gDgOhNaOVss4"
    );

    // 2. يرسل للعميل الـ auto-reply
    await emailjs.send(
      "service_z8d9inl",
      "template_v2r059v", // 👈 ضع هنا ID القالب الموجه للعميل
      
      formData
      ,
      "E3c83gDgOhNaOVss4"
    );

    alert("Message sent! ✅");
  } catch (err) {
    console.error("FAILED...", err);
    alert("Something went wrong ❌");
  }
}



  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-2/3 mx-auto space-y-4">
      <FormField
        label="Email"
        placeholder="Please enter your email"
        labelname="email"
        onChange={handleChange}
      />
      <FormField
        label="Mobile"
        placeholder="Enter mobile"
        labelname="mobile"
        onChange={handleChange}
      />
      <FormField
        label="Message"
        placeholder="Enter your message"
        labelname="message"
        onChange={handleChange}
      />
       <Button text="Submit" />
    </form>
  );
}

export default Form;
