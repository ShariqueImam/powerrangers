import React from "react";
import Header from "../Header/Header";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import ContactForm from "./ContactForm";
import { NextSeo } from "next-seo";
const style = {
  wrapper: "bg-[#F5F4F4] flex flex-col ",
  contactContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-16",
  smallHeading:
    "border-b-2 border-stone-200 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-[#070029] my-6",
  singleContactContainer: "flex items-center ",
  para: "text-stone-600 text-sm md:text-sm my-2 md:my-4 hover:text-stone-900",
};
const Contact = () => {
  return (
    <div className={style.wrapper}>
            <NextSeo
        title={`Contact Us`}
        description="Contact online power ranger games free"
      />{" "}
      <Header headingText="CONTACT" />
      <div className={style.contactContainer}>
        <h2
          className={style.smallHeading}
          style={{ fontFamily: "Yeseva One, cursive" }}
        >
          Contact Details
        </h2>

        <div className={style.singleContactContainer}>
          <AiOutlineMail className="text-3xl text-blue-900 bg-blue-150 rounded-full p-1 mx-4" />
          <a href="mailto:webmaster@example.com">
            <h2 className={style.contactContent}>
              replymebycontactus@gmail.com
            </h2>
          </a>{" "}
        </div>
        {/* contact form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
