import React from "react";
import ContactComponent from "../../components/Contact/Contact";
import Navbar from '../../components/Navbar/Navbar'
const style = {
  wrapper: "",
};

const Contact = () => {
  return (
    <div className={style.wrapper}>
      <Navbar/>
      <ContactComponent />
    </div>
  );
};

export default Contact;
