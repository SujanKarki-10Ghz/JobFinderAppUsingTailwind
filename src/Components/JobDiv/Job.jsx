import React from "react";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../Assests/logo1.png";
import logo2 from "../../Assests/logo2.png";
import logo3 from "../../Assests/logo3.png";
import logo4 from "../../Assests/logo4.png";
import logo5 from "../../Assests/logo5.png";
import logo6 from "../../Assests/logo6.png";
import logo7 from "../../Assests/logo7.png";
import logo8 from "../../Assests/logo8.png";

const Job = () => {
  const Data = [
    {
      id: 1,
      image: logo1,
      title: "Web Developer",
      time: "Now",
      location: "Canada",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti?",
      company: "Novac Linus Co.",
    },
    {
      id: 2,
      image: logo2,
      title: "UI Designer",
      time: "14Hrs",
      location: "Manchester",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti?",
      company: "Pinterest",
    },
    {
      id: 3,
      image: logo3,
      title: "Software Eng",
      time: "10Hrs",
      location: "Austria",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti?",
      company: "Microsoft",
    },
    {
      id: 4,
      image: logo4,
      title: "Ai Developer",
      time: "20Hrs",
      location: "America",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti?",
      company: "Open AI",
    },
    {
      id: 5,
      image: logo5,
      title: "Sales HR",
      time: "Now",
      location: "Nepal",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti?",
      company: "Nike",
    },
    {
      id: 6,
      image: logo6,
      title: "Head Chef",
      time: "10Hrs",
      location: "India",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti?",
      company: "KFC",
    },
    {
      id: 7,
      image: logo7,
      title: "Senior Eng",
      time: "Now",
      location: "Russia",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti?",
      company: "Tesla",
    },
    {
      id: 8,
      image: logo8,
      title: "Content Creator",
      time: "14Hrs",
      location: "China",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti?",
      company: "Tiktok",
    },
  ];
  return (
    <>
      <div className="jobContainer sm:flex gap-[20px] justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, location, time, desc, company }) => (
          <div
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            key={id}
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive />
                {time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>
            <p className="text=[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
              {desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="Company Logo" className="w-[10%]" />
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {company}
              </span>
            </div>
            <button className=" border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold hover:bg-white text-textColor group-hover/item:text-textColor group-hover:text-white">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Job;
