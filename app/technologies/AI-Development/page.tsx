"use client";

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CustomAIServices from './CustomAIServices';
import TeamSection from './TeamSection';
import CaseStudiesSection from './CaseStudiesSection';
import AIAugmentedSection from './AIAugmentedSection';
import ToolsTechnologiesSection from './ToolsTechnologiesSection';

export default function AIDevelopmentPage() {
  return (
    <main className="text-white bg-[#111111] min-h-screen font-sans">
      <Header />
      <div className="pt-[80px] pb-16">
        {/* Breadcrumbs placed at the top */}
        <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14 mb-8 mt-2">
          <div className="flex items-center gap-3 text-[13px] text-gray-400 font-medium lg:ml-12 xl:ml-20">
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </Link>
            <span className="opacity-50">›</span>
            <span className="hover:text-white transition-colors cursor-pointer">Technologies</span>
            <span className="opacity-50">›</span>
            <span className="text-white font-semibold">AI</span>
          </div>
        </div>

        {/* Main content directly following breadcrumbs */}
        <div className="w-full">
          <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">
            {/* Two column layout */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">

              {/* Left Column */}
              <div className="flex-1 lg:max-w-[750px] lg:ml-12 xl:ml-20">
                {/* Subheading */}
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mt-8 lg:mt-12 mb-5">
                  AI DEVELOPMENT SERVICES
                </h2>

                {/* Main Heading */}
                <h1 className="text-[48px] sm:text-[60px] lg:text-[68px] font-bold leading-[1.05] tracking-tight mb-6">
                  Work with <span className="text-[#00e56a]">AI</span> experts trusted by the world's top tech teams.
                </h1>

                {/* Paragraph */}
                <p className="text-[17px] sm:text-[19px] text-gray-300 leading-[1.6] max-w-[650px] mb-8">
                  As a leading AI development company, we deliver AI-powered solutions that go beyond experimentation. Our AI engineers help organizations integrate agentic AI, custom large language models (LLMs), and generative AI into their products.
                </p>

                {/* Footer Elements */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 pt-8 mt-4 border-t border-[#222]">
                  {/* Artificial Intelligence Label */}
                  <div className="flex flex-col font-black text-[17px] sm:text-[19px] leading-[1.15] tracking-wide bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                    <span>Artificial</span>
                    <span>Intelligence</span>
                  </div>

                  {/* Vertical divider */}
                  <div className="hidden sm:block w-[1px] h-12 bg-[#333] mx-2"></div>

                  {/* Tools */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      AI CODING TOOLS WE USE
                    </h3>

                    <div className="flex items-center gap-7 sm:gap-8">
                      {/* Icon 1: Cursor Logo */}
                      <div className="w-[48px] h-[48px]">
                        <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784099588/cur_g8fgqm.png" alt="Cursor" className="w-full h-full object-contain" />
                      </div>

                      {/* Icon 2: Claude Code */}
                      <div className="w-[48px] h-[48px]">
                        <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784099578/ClaudeCode_1776949921_ahx65i.webp" alt="Claude Code" className="w-full h-full object-contain" />
                      </div>

                      {/* Icon 3: Codex */}
                      <div className="w-[48px] h-[48px]">
                        <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784099578/Codex_1776949920_ou499p.webp" alt="Codex" className="w-full h-full object-contain" />
                      </div>

                      {/* Icon 4: Copilot */}
                      <div className="w-[48px] h-[48px]">
                        <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784099599/icon_inverted_transparent_ek0nr4.png" alt="Copilot" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Form) */}
              <div className="w-full lg:w-[460px] shrink-0 lg:mr-12 xl:mr-20 border-t lg:border-t-0 lg:border-l border-[#333] pt-12 mt-8 lg:pt-0 lg:mt-0 lg:pl-16">
                <div>
                  <h2 className="text-[22px] sm:text-[26px] font-bold leading-tight mb-6">
                    Get expert help for your AI project.
                  </h2>

                  <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[13px] text-gray-300 font-medium">Your name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Full name"
                        className="bg-[#111] border border-[#333] p-3 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-[#00e56a] transition-colors rounded-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[13px] text-gray-300 font-medium">Your email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="name@company.com"
                        className="bg-[#111] border border-[#333] p-3 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-[#00e56a] transition-colors rounded-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="needs" className="text-[13px] text-gray-300 font-medium">What we can do for you?</label>
                      <textarea
                        id="needs"
                        placeholder="Tell us about your needs."
                        rows={3}
                        className="bg-[#111] border border-[#333] p-3 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-[#00e56a] transition-colors resize-none rounded-sm"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="mt-2 bg-[#00e56a] hover:bg-[#00c55a] text-black font-bold text-[15px] py-3.5 px-6 transition-colors w-full rounded-sm"
                    >
                      Jump-start Your Project
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Endorsed / Trusted Section */}
      <div className="w-full flex flex-col items-center pt-8 pb-0">
        <h3 className="text-[12px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 text-center px-4">
          ENDORSED BY ENGINEERS. TRUSTED BY CTOS.
        </h3>
        
        {/* White Strip */}
        <div className="w-full bg-white py-12">
          <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
              <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784103011/ChatGPT_Image_Jul_15_2026_01_39_30_PM_bqsoej.png" alt="Client 1" className="h-9 md:h-11 object-contain" />
              <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784103889/ChatGPT_Image_Jul_15_2026_01_52_31_PM_fddwug.png" alt="Client 2" className="h-9 md:h-11 object-contain" />
              <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784103590/ChatGPT_Image_Jul_15_2026_01_48_36_PM_val6ht.png" alt="Client 3" className="h-9 md:h-11 object-contain" />
              <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784103402/ChatGPT_Image_Jul_15_2026_01_45_06_PM_ej4ygm.png" alt="Client 4" className="h-9 md:h-11 object-contain" />
              <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784101862/ChatGPT_Image_Jul_15_2026_01_20_18_PM_adbnrs.png" alt="Client 5" className="h-9 md:h-11 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <CustomAIServices />
      <TeamSection />
      <CaseStudiesSection />
      <AIAugmentedSection />
      <ToolsTechnologiesSection />

      <Footer />
    </main>
  );
}
