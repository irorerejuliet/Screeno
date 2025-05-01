
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from 'react-icons/md';

const FooterSection = () => {
  return (
    <>
      <div className="container mx-auto my-20 md:flex flex-row gap-40 md:px-0 px-5">
        <div className="space-y-5">
          <img src="/images/footerLogo.png" alt="logo" />
          <p className="text-base font-normal">Streaming and Video platform</p>
          <div className="flex items-center gap-2">
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold pb-6">Contact Info</h3>
          <div className="flex gap-5 items-center w-[213px]">
            <FaLocationDot className="text-blue-600 mb-7" />
            <p className="font-medium text-sm">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
          <div className="flex  items-center py-3">
            <IoMdCall className="text-blue-600 mr-4" />
            <p className="font-medium text-sm">(219) 555-0114</p>
          </div>
          <div className="flex gap-4 items-center">
            <MdOutlineMail className="text-blue-600" />
            <p className="font-medium text-sm">info@screeno.com</p>
          </div>
        </div>
        <div className=" ">
          <h3 className="text-lg font-semibold pb-6 md:pt-0 pt-5">Get in touch</h3>
          <form className="space-y-4 flex- flex-col  w-[350px]">
            <input
              type="text"
              placeholder="Your name"
              className="w-[350px] p-3 shadow-md  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-[350px] p-3 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your message"
              className="w-[350px] p-3 shadow-md rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className=" bg-blue-600 text-white py-2 px-6 rounded-[50px] hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <p className="text-center mx-auto text-gray-400 text-xs font-normal py-8 border border-b-2">
        ©2022 Screeno Ltd, All rights reserved
      </p>
    </>
  );
}

export default FooterSection
