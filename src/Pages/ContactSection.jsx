import React from "react";
import { Link } from "react-router";
import { useState } from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Mail from '../assets/Icons/Mail'
import SendIcon from "../assets/Icons/SendIcon";
import CheckCircle from '../assets/Icons/CheckCircle'
import Close from '../assets/Icons/Close'

const Contact = () => {

  const [isMessageSent, setIsMessageSent] = useState(true);
  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // console.log("Sending data:", formData);
      const response = await fetch("https://hook.us2.make.com/e8pgp9qgu2r2cef3suxcmuxomrhu72if", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsMessageSent(true);
        setTimeout(() => setIsMessageSent(false), 3000);
        
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error sending message.");
        setIsError(true);
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  };
  

  return (
    <section className="relative bg-black h-auto md:h-screen max-w-screen flex flex-col gap-8 md:gap-16 pt-6 px-4 md:px-36 pb-32 md:pb-0">
      <ul
        className={`w-fit mx-auto text-white/90 px-8 py-2 rounded-full shadow-[0_3px_10px_0_var(--color-shadow-white)] border border-white/30 flex items-center gap-4 md:gap-16 text-sm md:text-[16px] font-switzer font-medium `}
      >
        <Link to={"/"}>
          <li className="cursor-pointer px-2 py-1 transition-all duration-200">
            Overview
          </li>{" "}
        </Link>
        <Link to={"/"}>
          <li className="cursor-pointer px-2 py-1 transition-all duration-200">
            About
          </li>{" "}
        </Link>
        <Link to={"/"}>
          <li className="cursor-pointer px-2 py-1 transition-all duration-200">
            Work
          </li>{" "}
        </Link>
        <Link to={"/contact"}>
          <li className="cursor-pointer px-2 py-1 transition-all duration-200">
            Contact
          </li>
        </Link>
      </ul>

      <div className="contact-content w-full flex flex-col md:flex-row items-start justify-between gap-12 md:gap-[auto]">
        <div className="contact-info  flex flex-col gap-4 text-white/90">
          <div className="work-label relative flex order-1 items-center gap-4 w-fit pl-1 md:pl-1.5 pr-6 md:pr-8 py-1 md:py-2 mb-4 md:mb-12 rounded-full z-20 shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.1)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)  inset-shadow-white inset-shadow-2xs bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="dot size-2 bg-white/90 rounded-full ml-2"></div>
            <h2 className="text-white/90 text-lg md:text-xl font-[400] font-switzer">
              Contact
            </h2>
          </div>
          <h1 className="text-[34px] order-2">Get In Touch.</h1>
          <h2 className="text-[26px] mb-2 order-3">
            I will Respond To Your Message Within 24 Hours
          </h2>
          <p className="text-lg mb-8 hidden md:flex">
            I'm excited to hear about your project! Get in touch via
            <br className="hidden md:flex"/> the form on the side—let's start the conversation.
          </p>
          <div className="social-media flex items-center gap-8 text-3xl absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
            <a href="https://x.com/TheoKode_?t=Aeyn9E65s60T6on178qkMg&s=08" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/theo-kode-0b35a632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="mailto:theokode01@gmail.com" target="_blank">
              <Mail />
            </a>
            <a href="https://www.threads.com/@theokode" target="_blank">
              <FaThreads />
            </a>
          </div>
        </div>


        <div className="form-content w-full md:w-1/2 pl-0 md:pl-24 order-4 ">
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 flex flex-col gap-4 md:gap-8 border border-white/40 rounded-2xl px-4 md:px-8 pt-6 md:pt-10 pb-8 md:pb-12"
          >
            <div className="name-email flex flex-col md:flex-row gap-4 w-full">
              <div className="name-field flex flex-col gap-3 text-white/90 w-full">
                <label htmlFor="name" className="text-[16px]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white/5 px-4 py-4 text-lg rounded-lg border-2 border-white/40 placeholder:text-[#A3A3A5] placeholder:text-[16px] "
                  placeholder="Enter full name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </div>

              <div className="name-field flex flex-col gap-3 text-white/90 w-full">
                <label htmlFor="email" className="text-[16px]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white/5 px-4 py-4 text-lg rounded-lg border-2 border-white/40 placeholder:text-[#A3A3A5] placeholder:text-[16px] "
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>
            </div>

            <div className="subject flex flex-col gap-3 text-white/90 w-full">
              <label htmlFor="subject" className="text-[16px]">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-white/5 px-4 py-4 text-lg rounded-lg border-2 border-white/40 placeholder:text-[#A3A3A5] placeholder:text-[16px] "
                placeholder="e.g. Portfolio, E-commerce..."
                onChange={handleChange}
                value={formData.subject}
                required
              />
            </div>

            <div className="subject flex flex-col gap-3 text-white/90 ">
              <label htmlFor="message" className="text-[16px]">
                Message *
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full h-40 resize-none bg-white/5 px-4 py-4 text-lg rounded-lg border-2 border-white/40 placeholder:text-[#A3A3A5] placeholder:text-[16px]"
                placeholder="how can i help you?"
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className=" w-full  bg-[#0047E1] flex items-center justify-center gap-2 py-3 rounded-lg hover:brightness-90 active:brightness-80 transition-all duration-100 "
            >
              <span className="flex items-center gap-2 text-lg text-white text-center ">
                Send <SendIcon />
              </span>
            </button>
          </form>

          <p className="text-lg mb-8 text-white mt-4 flex md:hidden">
            I'm excited to hear about your project! Get in touch via
            <br className="hidden md:flex"/> the form above. let's start the conversation.
          </p>

          {isMessageSent && (
            <div className={`message-status fixed top-8 right-8 bg-white/90 flex items-center gap-16 pl-6 pr-4 py-3 rounded-xl ${isMessageSent ? 'animate-status' : 'animate-none'} transition-transform duration-200 `}>
                <div className='flex  items-center gap-2'>
                  <CheckCircle className='text-green-500 text-xl' />
                  <p className="text-lg font-switzer font-medium text-black/90">
                    Message Sent !
                  </p>
                </div>
                <Close />
            </div>
          )}

          {isError && (
            <div className={`message-status absolute top-8 right-0 bg-white/90 flex items-center gap-4 pl-6 pr-8 py-4 rounded-xl ${isError ? 'animate-status' : 'animate-none '} transition-transform duration-200`}>
                <>
                  <Close className='text-red-500 text-2xl' />
                  <p className={`text-xl font-switzer `} >
                    There was an error sending your message. Please try again.
                  </p>
                </>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
