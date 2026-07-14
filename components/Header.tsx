"use client";

import React, { useState, useEffect, useRef } from 'react';

const navItems = ["Services", "Technologies", "Industries", "Solutions", "Clients", "About us", "Insights"];

const MegaMenu = () => {
  const [activeTab, setActiveTab] = useState("Top Services");

  const leftMenuItems = [
    "Top Services",
    "Strategy & Innovation",
    "Software Engineering",
    "Product & Experience Design",
    "AI & Data",
    "Cloud & Platform Engineering",
    "Quality, Delivery & Scale"
  ];

  return (
    <div className="absolute left-0 top-[80px] hidden w-full bg-[#111111] px-5 pb-16 pt-10 sm:px-10 lg:px-14 group-hover/navitem:block border-y border-[#333] shadow-2xl">
      <div className="mx-auto flex w-full max-w-[1100px] gap-16 text-white">
        {/* First Column */}
        <div className="w-[320px] border-r border-[#333] pr-8">
          <ul className="flex flex-col space-y-1">
            {leftMenuItems.map(item => (
              <li key={item} onClick={(e) => { e.preventDefault(); setActiveTab(item); }}>
                <a href="#" className={`flex items-center justify-between px-4 py-3 transition-all duration-300 ${activeTab === item
                  ? item === "Top Services"
                    ? 'bg-gradient-to-r from-[#2a1613] to-[#222] border-l-2 border-[#ff4a31] text-white font-bold shadow-md text-[16px]'
                    : 'bg-[#222] text-white border-l-2 border-transparent text-[15px] font-medium'
                  : item === "Top Services"
                    ? 'text-gray-200 font-semibold hover:bg-[#222] hover:text-white border-l-2 border-transparent text-[16px]'
                    : 'text-gray-300 font-medium hover:bg-[#222] hover:text-white border-l-2 border-transparent text-[15px]'
                  }`}>
                  <span className={item === "Top Services" ? "flex items-center gap-2.5" : ""}>
                    {item === "Top Services" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#ff4a31" />
                      </svg>
                    )}
                    {item}
                  </span>
                  {activeTab === item && <span className={item === "Top Services" ? "text-[#ff4a31]" : ""}>→</span>}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 px-4">
            <a href="#" className="group relative inline-block text-[15px] font-bold text-white transition-colors hover:text-gray-300">
              All services
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-white transition-colors group-hover:bg-gray-300"></span>
            </a>
          </div>
        </div>

        {activeTab === "Top Services" ? (
          <>
            {/* Second Column: TOP SERVICES */}
            <div className="flex-[2] pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ff4a31] rounded-sm"></span> TOP SERVICES
              </h3>
              <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                {[
                  "AI Development", "Android App Development",
                  "Back-end Development", "Business Intelligence",
                  "CMS Development", "Data Engineering",
                  "Cryptocurrency & Blockchain", "eCommerce Development",
                  "Front-end Development", "iOS App Development",
                  "Machine Learning", "Mobile App Development",
                  "QA Testing & Automation", "SaaS Development",
                  "UX/UI Design", "Web Development"
                ].map(item => (
                  <a key={item} href="#" className="group/link relative inline-block w-fit text-[16px] font-medium text-gray-300 transition hover:text-white">
                    {item}
                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                ))}
              </div>
              {/* <div className="mt-8">
                <a href="#" className="text-[14px] font-bold text-white hover:underline underline-offset-4">All Services →</a>
              </div> */}
            </div>

            {/* Third Column: ENTERPRISE FOCUSED */}
            <div className="flex-1 pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ff4a31] rounded-sm"></span> ENTERPRISE FOCUSED
              </h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "Backup Solutions", "Big Data",
                  "Cloud Applications", "CRM Systems",
                  "Cybersecurity", "DevOps",
                  "Digital Transformation", "ERP Development"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : activeTab === "Software Engineering" ? (
          <>
            {/* Second Column: CAPABILITIES */}
            <div className="flex-1 pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">CAPABILITIES</h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "Software Development", "Web Development",
                  "Mobile Development", "MVP Development",
                  "API Development"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Column: TECHNOLOGIES */}
            <div className="flex-[2] pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">TECHNOLOGIES</h3>
              <div className="grid grid-cols-2 gap-x-16 gap-y-5">
                {[
                  "React", "Next.js",
                  "Vue", "Angular",
                  "Python", "Ruby on Rails",
                  "Node.js", "Java",
                  "iOS (Swift)", "Android (Kotlin)",
                  "React Native", "Flutter",
                  "Kotlin Multiplatform"
                ].map(item => (
                  <a key={item} href="#" className="group/link relative inline-block w-fit text-[16px] font-medium text-gray-300 transition hover:text-white">
                    {item}
                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
          </>
        ) : activeTab === "Product & Experience Design" || activeTab === "Cloud & Platform Engineering" ? (
          <>
            {/* Second Column: CAPABILITIES */}
            <div className="flex-1 pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">CAPABILITIES</h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "Product Design", "UX Design",
                  "UI Design", "Design Systems",
                  "UX Research", "Illustrations"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Column: TOOLS */}
            <div className="flex-1 pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">TOOLS</h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "Figma", "Accessibility (WCAG)", "Motion Design"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : activeTab === "AI & Data" ? (
          <>
            {/* Second Column: CAPABILITIES */}
            <div className="flex-1 pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">CAPABILITIES</h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "AI Development", "AI Pods",
                  "Forward Deployed Engineer", "AI Agents",
                  "Machine Learning", "Data Engineering"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Empty Third Column to maintain layout alignment */}
            <div className="flex-1 pt-2"></div>
          </>
        ) : activeTab === "Quality, Delivery & Scale" ? (
          <>
            {/* Second Column: CAPABILITIES */}
            <div className="flex-1 pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">CAPABILITIES</h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "Quality Assurance", "Product Management",
                  "Software Maintenance"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Column: ENGAGEMENT MODELS */}
            <div className="flex-1 pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">ENGAGEMENT MODELS</h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "Dedicated Teams", "Staff Augmentation",
                  "Delivery Center"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* Fallback to original columns for other tabs */}
            <div className="flex-1 pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">Capabilities</h3>
              <ul className="flex flex-col space-y-5">
                {["Digital Product Strategy", "Product Discovery & Research", "Rapid Prototyping", "Technology Strategy", "Innovation & R&D"].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 pt-2">
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">Methods</h3>
              <ul className="flex flex-col space-y-5">
                {["Design Thinking", "Lean Product Development", "Product Analytics", "Experimentation Platforms"].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const TechnologiesMegaMenu = () => {
  return (
    <div className="absolute left-0 top-[80px] hidden w-full bg-[#111111] px-5 pb-16 pt-10 sm:px-10 lg:px-14 group-hover/navitem:block border-y border-[#333] shadow-2xl">
      <div className="mx-auto flex w-full max-w-[1100px] gap-16 text-white">
        {/* First Column */}
        <div className="w-[320px] border-r border-[#333] pr-10 flex flex-col">
          <h2 className="text-[28px] font-bold mb-6">Technologies<span className="text-[#ff4a31]">.</span></h2>
          <p className="text-[15px] text-gray-300 mb-8 leading-relaxed">
            Get experts in 100+ technologies.<br />Cover any tech stack.
          </p>
          <ul className="flex flex-col space-y-4">
            <li><a href="#" className="text-[15px] font-medium text-white hover:text-gray-300 transition-colors">Hire Software Developers</a></li>
            <li><a href="#" className="text-[15px] font-medium text-white hover:text-gray-300 transition-colors">Top 1% Talent</a></li>
          </ul>

          <div className="w-[200px] h-[1px] bg-[#333] mt-12 mb-8"></div>

          <div className="mb-5">
            <h3 className="text-[24px] font-black leading-none tracking-widest font-serif text-white">
              ETHNO<br />MEDICO
            </h3>
          </div>
          <p className="text-[13px] text-gray-400 leading-relaxed mb-4 pr-4">
            We optimized website performance, leading to 34% increase in net profits.
          </p>
          <a href="#" className="group relative inline-block w-fit text-[13px] font-bold text-white transition-colors hover:text-gray-300">
            Read case study.
            <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-white transition-colors group-hover:bg-gray-300"></span>
          </a>
        </div>

        {/* Right Area (Technologies Grid) */}
        <div className="flex-1 pl-6 pt-2 flex flex-col">
          <div className="grid grid-cols-3 gap-x-16 gap-y-[28px]">
            {[
              ".NET", "AI", "Angular",
              "AWS", "C#", "C++",
              "Django", "Golang", "Google Cloud",
              "Java", "JavaScript", "Kotlin",
              "Machine Learning", "Microsoft Azure", "Node.js",
              "PHP", "Power BI", "Python",
              "React", "Ruby", "Salesforce",
              "TypeScript", "Vue.js", "Xamarin"
            ].map(item => (
              <a key={item} href="#" className="group/link relative inline-block w-fit text-[16px] font-medium text-gray-300 transition hover:text-white">
                {item}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}

            {/* All Technologies link falls perfectly into Col 1 Row 9 */}
            <div className="col-span-1 mt-6">
              <a href="#" className="text-[14px] font-bold text-white hover:underline underline-offset-4 transition-colors">
                All Technologies →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IndustriesMegaMenu = () => {
  return (
    <div className="absolute left-0 top-[80px] hidden w-full bg-[#111111] px-5 pb-16 pt-10 sm:px-10 lg:px-14 group-hover/navitem:block border-y border-[#333] shadow-2xl">
      <div className="mx-auto flex w-full max-w-[1100px] gap-16 text-white">
        {/* First Column */}
        <div className="w-[320px] border-r border-[#333] pr-10 flex flex-col">
          <h2 className="text-[28px] font-bold mb-6">Industries<span className="text-[#ff4a31]">.</span></h2>
          <p className="text-[15px] text-gray-300 leading-relaxed">
            We've delivered 1250+ projects across 130+ sectors. Experience in your industry? We have it.
          </p>

          <div className="w-[200px] h-[1px] bg-[#333] mb-8 mt-16"></div>

          <div className="mb-6 -ml-2">
            <img
              src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783776360/depployra_logo_name_ngxd50.png"
              alt="Deployra Logo"
              className="h-[38px] object-contain object-left"
            />
          </div>
          <p className="text-[13px] text-gray-400 leading-relaxed mb-4 pr-4">
            We scaled DEPLOYRA's auto deployment platforms with Custom SDK.
          </p>
          <a href="#" className="group relative inline-block w-fit text-[13px] font-bold text-white transition-colors hover:text-gray-300">
            Read case study.
            <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-white transition-colors group-hover:bg-gray-300"></span>
          </a>
        </div>

        {/* Right Area (Industries Grid) */}
        <div className="flex-1 pl-6 pt-2 flex flex-col">
          <div className="grid grid-cols-3 gap-x-16 gap-y-[28px]">
            {[
              "Agriculture", "Automotive", "Aviation",
              "Banking", "Construction", "Entertainment",
              "Finance", "Startups", "Healthcare",
              "Insurance", "Martech", "Oil and Gas",
              "Real Estate", "Retail", "Supply Chain",
              "Telecommunications", "Transportation and Logistics", "Travel and Hospitality"
            ].map(item => (
              <a key={item} href="#" className="group/link relative inline-block w-fit text-[16px] font-medium text-gray-300 transition hover:text-white">
                {item}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}

            {/* All Industries link falls perfectly into Col 1 Row 7 */}
            <div className="col-span-1 mt-6">
              <a href="#" className="text-[14px] font-bold text-white hover:underline underline-offset-4 transition-colors">
                All Industries →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionsMegaMenu = () => {
  return (
    <div className="absolute left-0 top-[80px] hidden w-full bg-[#111111] px-5 pb-16 pt-10 sm:px-10 lg:px-14 group-hover/navitem:block border-y border-[#333] shadow-2xl">
      <div className="mx-auto flex w-full max-w-[1100px] gap-20 text-white">

        {/* Left Section - For Commerce */}
        <div className="flex-[2]">
          <h3 className="mb-6 text-[12px] font-black uppercase tracking-[0.15em] text-white">
            FOR COMMERCE
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <a href="#" className="group flex flex-col bg-[#1c1c1c] p-6 hover:bg-[#252525] transition-colors h-full">
              <h4 className="text-[16px] font-bold text-white mb-3">Core Architecture</h4>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                System design that scales from your first user to your millionth — without a rewrite.
              </p>
            </a>
            <a href="#" className="group flex flex-col bg-[#1c1c1c] p-6 hover:bg-[#252525] transition-colors h-full">
              <h4 className="text-[16px] font-bold text-white mb-3">AI Product Discovery</h4>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                Turn complex product data into intelligent conversations
              </p>
            </a>
          </div>
        </div>

        {/* Right Section - For Other Industries */}
        <div className="flex-1">
          <h3 className="mb-6 text-[12px] font-black uppercase tracking-[0.15em] text-white">
            FOR OTHER INDUSTRIES
          </h3>
          <ul className="flex flex-col space-y-4">
            {["Finance and banking", "Healthcare and life science", "Education", "Proptech"].map((item) => (
              <li key={item}>
                <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                  {item}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ClientsMegaMenu = () => {
  return (
    <div className="absolute left-0 top-[80px] hidden w-full bg-[#111111] px-5 pb-16 pt-10 sm:px-10 lg:px-14 group-hover/navitem:block border-y border-[#333] shadow-2xl">
      <div className="mx-auto flex w-full max-w-[1100px] gap-20 text-white">

        {/* Left Section - Case Studies */}
        <div className="flex-[2]">
          <h3 className="mb-6 text-[12px] font-black uppercase tracking-[0.15em] text-white">
            CASE STUDIES
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <a href="#" className="group flex flex-col bg-[#1c1c1c] hover:bg-[#252525] transition-colors h-full overflow-hidden">
              <div className="h-[160px] w-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783780188/ChatGPT_Image_Jul_11_2026_07_59_00_PM_ju1gfh.png"
                  alt="Delivery Hero"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-5">
                <p className="text-[14px] font-medium text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                  Powering Content Delivery For a Digital Publishing & E-Commerce Platform
                </p>
              </div>
            </a>

            <a href="#" className="group flex flex-col bg-[#1c1c1c] hover:bg-[#252525] transition-colors h-full overflow-hidden">
              <div className="h-[160px] w-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783778602/Improve_Your_Deployment_with_DevOps_eu66dz.jpg"
                  alt="Vinted"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-5">
                <p className="text-[14px] font-medium text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                  Cutting Deployment Time From Hours to Minutes For a Growing Team
                </p>
              </div>
            </a>
          </div>
        </div>
        {/* Right Section - Other Projects */}
        <div className="flex-1">
          <h3 className="mb-6 text-[12px] font-black uppercase tracking-[0.15em] text-white">
            OTHER PROJECTS
          </h3>
          <ul className="flex flex-col space-y-5">
            {[
              "App for Global Ecommerce Platform",
              "Cross-Platform Mobile App for Sports Retailer",
              "Rapid Website Redesign for a 24% Increase in Traffic",
              "47% Efficiency Gains with Silk Design System",
              "58% More Engagement With AI"
            ].map((item) => (
              <li key={item}>
                <a href="#" className="group/link relative inline-block text-[14px] font-medium text-gray-300 transition hover:text-white leading-snug">
                  {item}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const AboutMegaMenu = () => {
  return (
    <div className="absolute left-0 top-[80px] hidden w-full bg-[#111111] px-5 pb-16 pt-10 sm:px-10 lg:px-14 group-hover/navitem:block border-y border-[#333] shadow-2xl">
      <div className="mx-auto flex w-full max-w-[1100px] gap-16 text-white">
        {/* First Column */}
        <div className="w-[320px] border-r border-[#333] pr-10 flex flex-col">
          <h2 className="text-[28px] font-bold mb-6">About<span className="text-[#ff4a31]">.</span></h2>
          <p className="text-[15px] text-gray-300 leading-relaxed mb-8">
            Since 2009, we've built software for companies of all types, from startups to Fortune 500 giants.
          </p>

          <div className="w-full h-[1px] bg-[#333] mb-8"></div>

          <div className="flex flex-col w-full">
             <img 
               src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784024533/ChatGPT_Image_Jul_14_2026_03_10_40_PM_adosxq.png" 
               alt="About us feature" 
               className="h-[48px] w-auto object-contain object-left mb-3"
             />
             <p className="text-[13px] text-gray-400 leading-relaxed pr-4">
               Our Founder on building Bittforge — from an idea to a large-scale digital commerce platform.
               <a href="#" className="group relative inline-block text-white font-bold transition-colors hover:text-gray-300">
                 Read more
                 <span className="absolute -bottom-0.5 left-0 h-[1px] w-full bg-white transition-colors group-hover:bg-gray-300"></span>
               </a>
             </p>
          </div>
        </div>

        {/* Right Area (Links Grid) */}
        <div className="flex-1 pl-6 pt-2">
          <div className="grid grid-cols-3 gap-x-12">
            
            {/* Column 1: INSIDE AGENCY */}
            <div>
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ff4a31] rounded-sm"></span> INSIDE AGENCY
              </h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "Our Leadership Team",
                  "Our Tech Talent",
                  "Press Releases",
                  "Contact Us",
                  "FAQs"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a href="#" className="text-[14px] font-bold text-white hover:underline underline-offset-4 transition-colors flex items-center gap-2">
                    Our Story <span className="text-[16px]">→</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: RECOGNITIONS */}
            <div>
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ff4a31] rounded-sm"></span> RECOGNITIONS
              </h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "Awards",
                  "Certifications"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: CAREERS */}
            <div>
              <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ff4a31] rounded-sm"></span> CAREERS
              </h3>
              <ul className="flex flex-col space-y-5">
                {[
                  "Working at Agency",
                  "Job Opportunities",
                  "Talent Referrals",
                  "Our Circles Program",
                  "Company Culture"
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="group/link relative inline-block text-[16px] font-medium text-gray-300 transition hover:text-white">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
const InsightsMegaMenu = () => {
  return (
    <div className="absolute left-0 top-[80px] hidden w-full bg-[#111111] px-5 pb-16 pt-10 sm:px-10 lg:px-14 group-hover/navitem:block border-y border-[#333] shadow-2xl">
      <div className="mx-auto flex w-full max-w-[1100px] text-white">

        {/* Left Section - BLOG */}
        <div className="w-[55%] pr-16">
          <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">
            BLOG
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <a href="#" className="group flex flex-col bg-[#1c1c1c] hover:bg-[#252525] transition-colors h-full overflow-hidden">
              <div className="h-[135px] w-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783790865/Train-LLM-on-Your-Own-Data_jxafwp.avif"
                  alt="Super App Development"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-5 flex-1">
                <p className="text-[13px] font-medium text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                  When to Train LLMs on Your Own Data: The Spectrum of Options.
                </p>
              </div>
            </a>

            <a href="#" className="group flex flex-col bg-[#1c1c1c] hover:bg-[#252525] transition-colors h-full overflow-hidden">
              <div className="h-[135px] w-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783790864/thumbnail-ai-in-data-analytics_wcevau.avif"
                  alt="Enterprise AI"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-5 flex-1">
                <p className="text-[13px] font-medium text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                  AI in Data Analytics: What It Changes, Where It Breaks, and How to Ship Safely.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Middle Section - NEWSLETTERS AND ORIGINALS */}
        <div className="w-[25%] pr-8">
          <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">
            NEWSLETTERS AND ORIGINALS
          </h3>
          <ul className="flex flex-col space-y-4">
            {[
              "Podcast",
              "Next in Commerce newsletter",
              "AI Applied by Kuba Filipowski",
              "Hidden Heroes"
            ].map((item) => (
              <li key={item}>
                <a href="#" className="group/link relative inline-block text-[13.5px] font-medium text-gray-300 transition hover:text-white leading-snug">
                  {item}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Read our blog */}
        <div className="w-[20%] border-l border-[#3d3b3b] pl-10 flex flex-col justify-end pb-1">
           <a href="#" className="group relative inline-block w-fit text-[14px] font-bold text-white transition-colors hover:text-gray-300">
             Read our blog
             <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-white transition-colors group-hover:bg-gray-300"></span>
           </a>
        </div>
      </div>
    </div>
  );
};
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollDownStartRef = useRef(0);
  const isScrollingDownRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = window.innerHeight * 0.7; // 70% of the hero section height
      
      if (currentScrollY < threshold) {
        setIsScrolled(false);
        setIsHidden(false);
        isScrollingDownRef.current = false;
      } else {
        setIsScrolled(true);
        
        if (currentScrollY > lastScrollY) {
          // scrolling down
          if (!isScrollingDownRef.current) {
            isScrollingDownRef.current = true;
            scrollDownStartRef.current = currentScrollY;
          }
          
          // Hide header only after scrolling down 400px (roughly 70% of a row)
          if (currentScrollY - scrollDownStartRef.current > 400) {
            setIsHidden(true);
          }
        } else {
          // scrolling up
          setIsHidden(false);
          isScrollingDownRef.current = false;
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`group fixed left-0 right-0 top-0 z-[100] w-full transition-all duration-300 hover:bg-[#111111] ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled ? 'bg-[#111111]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[80px] w-full max-w-[1770px] items-center justify-between px-5 sm:px-10 lg:px-14">
        <a className="flex shrink-0 items-center gap-3 lg:ml-12 xl:ml-20" href="#" aria-label="Netguru home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#00e56a]">
            <path d="M5 20V4L19 20V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[24px] font-medium tracking-tight">Agency</span>
        </a>

        <nav className="hidden h-full items-center text-[16px] font-semibold lg:flex">
          {navItems.map((item) => (
            <div key={item} className="group/navitem flex h-full items-center px-5">
              <a className="relative flex h-full items-center transition hover:text-white" href="#">
                <span className="group-hover/navitem:underline group-hover/navitem:underline-offset-[6px] group-hover/navitem:decoration-white decoration-2">{item}</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00e56a] transition-all duration-300 group-hover/navitem:w-full"></span>
              </a>
              {item === "Services" && <MegaMenu />}
              {item === "Technologies" && <TechnologiesMegaMenu />}
              {item === "Industries" && <IndustriesMegaMenu />}
              {item === "Solutions" && <SolutionsMegaMenu />}
              {item === "Clients" && <ClientsMegaMenu />}
              {item === "About us" && <AboutMegaMenu />}
              {item === "Insights" && <InsightsMegaMenu />}
            </div>
          ))}
        </nav>

        <div className="flex items-center h-full lg:mr-12 xl:mr-20">
          <a
            className={`flex items-center gap-2 border px-6 py-2.5 text-[15px] font-semibold transition-all duration-300 hover:bg-[#00e56a] hover:border-[#00e56a] hover:text-black ${
              isScrolled 
                ? 'bg-[#00e56a] border-[#00e56a] text-black' 
                : 'bg-transparent border-white text-white'
            }`}
            href="#"
          >
            Get in touch
            <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
