import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
        <div>
          <div className="logoDiv">
            <h1 className="logo text-[25px] text-white pb-[1.5rem]">
              <strong>Job</strong>Search
            </h1>
          </div>
          <p className="text-white pb-[13px] opacity-70 leading-7">
            We always make our seekers and companies find the best jobs and
            employers find the best candidates.
          </p>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Company
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              About Us
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              Features
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              News
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              FAQ
            </li>
          </div>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Resources
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              Account
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              Support Center
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              Feedback
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              Contact Us
            </li>
          </div>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Support
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              Events
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              Promo
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              Req Demo
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1] list-none">
              Contact Info
            </li>
          </div>
        </div>
        <div className="grid">
          <span className="text-white text-[18px] font-semibold pb-[1.5rem]">
            Socials
          </span>
          <small className="text-white text-[14px]">
            jobportal@outlook.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiOutlineInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            <AiFillFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            <BiLogoTiktok className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
