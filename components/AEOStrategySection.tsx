"use client";

import React from "react";
import DashedGridBackground from "./DashedGridBackground";
const ExternalLinkIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
  >
    <path
      d="M13.5 10.5L21 3M21 3H15M21 3V9M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AEOStrategySection() {
  return (
    <section className="relative bg-white text-gray-900 font-sans">
      <DashedGridBackground />
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen py-10 px-4">
        <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
          <div className="relative w-full max-w-md">
            <svg viewBox="0 0 300 300" className="w-full h-auto">
              <circle
                cx="150"
                cy="100"
                r="65"
                fill="transparent"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <circle
                cx="110"
                cy="180"
                r="65"
                fill="transparent"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <circle
                cx="190"
                cy="180"
                r="65"
                fill="transparent"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="4,4"
              />

              {/* Labels */}
              <text
                x="150"
                y="25"
                fill="black"
                fontSize="16"
                textAnchor="middle"
                className="font-medium"
              >
                Data
              </text>
              <text
                x="60"
                y="270"
                fill="black"
                fontSize="16"
                textAnchor="middle"
                className="font-medium"
              >
                Tech
              </text>
              <text
                x="240"
                y="270"
                fill="black"
                fontSize="16"
                textAnchor="middle"
                className="font-medium"
              >
                Strategy
              </text>

              {/* Purple Chevron */}
              <path
                d="M 135 135 L 150 125 L 165 135"
                fill="none"
                stroke="#7C5DFF"
                strokeWidth="15"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold bricolage leading-relaxed text-gray-900">
            We have Combined a Whole Year of<br/>
            <span className="text-xl block mt-3  sm:text-3xl md:text-4xl font-bold bricolage leading-[1.4] text-gray-900">
              Large Scale GEO Experiments with<br />
            </span>
             
            <span className="text-xl block mt-3  sm:text-3xl md:text-4xl font-bold bricolage leading-[1.4] text-gray-900">
              5 years of SEO Expertise .
            </span>
          </h1>
          <a
            href="#"
            className="mt-5 inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 group"
          >
            <span className="text-gray-400 font-medium">
              See Our Generative Engine Optimization Playbook
            </span>
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
