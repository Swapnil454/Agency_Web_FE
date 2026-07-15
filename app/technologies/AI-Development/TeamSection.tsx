"use client";

import React, { useState } from 'react';

const tabsData = [
  {
    id: 'senior-ai',
    title: 'Top 1% Senior AI Talent',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    content: "Our AI experts have an average of 8+ years of experience in data science, machine learning techniques, multi-layered neural networks, and other disciplines vital to providing exceptional AI development services. Every engineer passes a multi-stage evaluation covering multiple aspects of AI model architecture and development. We have a large talent pool and work on multiple engagements at any given time, allowing our engineers to develop highly specialized skill sets for specific AI projects."
  },
  {
    id: 'production-grade',
    title: 'Production-Grade AI Delivery',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    ),
    content: "We don't just build prototypes; we engineer robust AI solutions that scale. Our delivery process incorporates comprehensive CI/CD pipelines for machine learning (MLOps), rigorous automated testing, and continuous monitoring. We ensure that your AI models perform reliably in production environments, handling real-world data loads securely and efficiently without degrading over time."
  },
  {
    id: 'security-gov',
    title: 'Security, Governance, and Compliance',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    content: "Data privacy and security are foundational to our AI development process. We implement strict data governance frameworks, ensuring compliance with global regulations like GDPR and HIPAA. Our engineers build secure infrastructure with end-to-end encryption, role-based access controls, and comprehensive audit logging to protect your proprietary data and models from unauthorized access."
  }
];

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  
  const activeContent = tabsData.find(t => t.id === activeTab)?.content;

  return (
    <div className="w-full bg-[#111] pt-10 pb-20 lg:pt-14 lg:pb-28 text-white">
      <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 justify-between">
          
          {/* Left Column */}
          <div className="lg:w-5/12 xl:max-w-[700px] flex flex-col pt-2 lg:ml-12 xl:ml-20">
            <h3 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">
              OUR AI DEVELOPMENT TEAM
            </h3>
            
            {/* Avatars Widget */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#111] bg-gray-800" src="https://i.pravatar.cc/100?img=11" alt="avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-[#111] bg-gray-800" src="https://i.pravatar.cc/100?img=12" alt="avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-[#111] bg-gray-800" src="https://i.pravatar.cc/100?img=13" alt="avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-[#111] bg-gray-800" src="https://i.pravatar.cc/100?img=14" alt="avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-[#111] bg-gray-800" src="https://i.pravatar.cc/100?img=15" alt="avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-[#111] bg-gray-800" src="https://i.pravatar.cc/100?img=16" alt="avatar" />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-medium text-gray-400 leading-tight">Backed by</span>
                <span className="text-[14px] font-bold text-white leading-tight">4000+ devs</span>
              </div>
            </div>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-6">
              Why tech leaders choose our AI development teams:
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-300 leading-[1.6] mb-10 max-w-[600px]">
              We help organizations move from experimentation to execution, transforming AI prototypes into production-ready solutions. Backed by deep expertise, our teams deliver enterprise-grade solutions that integrate with your existing systems.
            </p>
            
            <div>
              <button className="bg-[#00e56a] hover:bg-[#00c55a] text-black font-semibold text-[15px] px-8 py-3.5 rounded-[4px] transition-colors duration-300">
                Speak With Our Team
              </button>
            </div>
          </div>

          {/* Right Column - Tabs */}
          <div className="lg:flex-1 lg:max-w-[750px] flex flex-col lg:mr-12 xl:mr-20">
            
            {/* Tab Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 relative z-10">
              {tabsData.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <div 
                    key={tab.id}
                    className={`relative flex-1 flex flex-col justify-center gap-3 p-5 border rounded-[8px] cursor-pointer transition-all duration-300 ${
                      isActive ? 'border-[#00e56a]' : 'border-[#333] hover:border-gray-500 bg-transparent'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className={`${isActive ? 'text-[#00e56a]' : 'text-gray-500'}`}>
                      {tab.icon}
                    </div>
                    <div className={`font-semibold text-[15px] sm:text-[16px] leading-[1.3] ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {tab.title}
                    </div>

                    {/* Desktop Vertical Connecting Line */}
                    {isActive && (
                      <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-6 bg-[#00e56a] z-20"></div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Content Box */}
            <div className="border border-[#00e56a] rounded-[8px] p-6 sm:p-8 bg-transparent min-h-[220px]">
              <p className="text-[14px] sm:text-[15px] text-gray-300 leading-[1.6] animate-in fade-in slide-in-from-top-2 duration-300">
                {activeContent}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
