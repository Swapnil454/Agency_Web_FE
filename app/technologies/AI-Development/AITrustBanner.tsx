"use client";

import React from 'react';

export default function AITrustBanner() {
  return (
    <div 
      className="w-full font-sans text-[#111111] group overflow-hidden relative z-0"
      style={{ background: 'linear-gradient(90deg, #d1d5db 0%, #9ca3af 50%, #d1d5db 100%)' }}
    >
      <div className="py-12 lg:py-16 w-full h-full relative z-10">
        <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14 relative z-10">
          <div className="w-full lg:pl-12 xl:pl-20 relative">
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[1.2] tracking-tight mb-6 relative z-10">
              See why the biggest names in tech trust us with <br className="hidden md:block" /> AI development.
            </h2>
            
            <button className="bg-[#00e56a] hover:bg-[#00d663] text-black font-bold text-[15px] px-8 py-3.5 rounded-md transition-colors duration-300 flex items-center gap-2 group/btn relative z-10 w-fit">
              Let's Discuss Your AI Project
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover/btn:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* The White Wave Hover Effect */}
            <div className="bg-white pointer-events-none absolute -bottom-12 left-[180px] -z-10 aspect-square w-24 rounded-full blur-xl transition-transform duration-1000 ease-out group-hover:scale-[40]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
