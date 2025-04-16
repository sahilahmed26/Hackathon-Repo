import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router";
import logo from "../images/pathlocklogo.png";
import toast from "react-hot-toast";

export const Home = () => {
  const navigate = useNavigate();

  

  const handleStartClick = () => {
    const steps = [
      "Fetching Tickets from Azure...",
      "Connecting to Azure... pulling the latest tickets.",
      "Hang tight! Gathering issues from the source.",
      "Analyzing & Categorizing with AI...",
      "Auto-categorizing and sub-categorizing the data intelligently.",
      "Exporting Processed Data...",
      "Packaging everything up for dashboard consumption.",
      "Exporting structured insights to power the visuals.",
      "Building Dashboards...",
      "Crafting dashboards to visualize what matters most.",
      "Finalizing the charts and insights. Almost done!",
      "Done!...Redirecting",
      "Your dashboards are ready to explore!"
    ];
  
    steps.forEach((message, index) => {
      setTimeout(() => {
        toast.dismiss("status");
        if (index === steps.length - 1) {
          toast.success(message, { id: "status" });
        } else {
          toast.loading(message, { id: "status" });
        }
      }, index * 2000);
    });
  
    setTimeout(() => {
      navigate("/dashboard");
    }, steps.length * 2000);
  };
  
  return (
    <div className="p-6 relative mb-5">
      <div className="flex flex-col items-start gap-4">
        <img src={logo} alt="Logo" className="w-24 h-auto mb-2" />

        <h1 className="text-2xl font-bold text-start">
          Data Driven Product Management Powered by Data, AI & ML
        </h1>

        <p className="text-left text-gray-700 text-base leading-relaxed">
          Leverage the power of AI and machine learning to manage projects
          intelligently. Get predictive insights, automated recommendations, and
          smarter workflows — all designed to keep your team aligned and your
          goals on track.
        </p>
      </div>

      <div className="relative start-left flex group mt-6">
        <button
          className="px-5 py-2 w-fit rounded flex items-center gap-2 transition duration-200 z-10 relative"
          onClick={handleStartClick}
        >
          <span>Let's start</span>
          <IoMdArrowDropright size={20} />
        </button>

        <div className="absolute left-140 top-5 lg:w-[1080px] w-0 h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 490"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="100%" y1="52%" x2="0%" y2="48%">
                <stop offset="5%" stopColor="#24b770"></stop>
                <stop offset="95%" stopColor="#ffffff"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,500 L 0,318 C 94.78,319.72 189.56,321.44 302,316 C 414.43,310.55 544.50,297.94 625,260 C 705.49,222.05 736.40,158.78 817,136 C 897.59,113.21 1027.88,130.91 1140,118 C 1252.11,105.08 1346.05,61.54 1440,18 L 1440,500 L 0,500 Z"
              fill="url(#gradient)"
              fillOpacity="0.4"
            />
            <path
              d="M 0,500 L 0,443 C 103.41,436.27 206.83,429.54 303,428 C 399.16,426.45 488.08,430.09 567,408 C 645.91,385.90 714.82,338.09 813,311 C 911.17,283.90 1038.62,277.54 1148,253 C 1257.37,228.45 1348.68,185.72 1440,143 L 1440,500 L 0,500 Z"
              fill="url(#gradient)"
              fillOpacity="0.53"
            />
            <path
              d="M 0,500 L 0,568 C 92.25,552.81 184.51,537.62 282,529 C 379.48,520.37 482.19,518.30 571,495 C 659.80,471.69 734.71,427.14 824,411 C 913.28,394.85 1016.93,407.10 1122,388 C 1227.06,368.89 1333.53,318.44 1440,268 L 1440,500 L 0,500 Z"
              fill="url(#gradient)"
              fillOpacity="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
