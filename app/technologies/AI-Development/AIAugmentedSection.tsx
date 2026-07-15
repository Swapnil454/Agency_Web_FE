"use client";

import React from 'react';

const aiTools = [
  { id: 1, name: 'Claude Code', iconUrl: '/Claude.svg' },
  { id: 2, name: 'GitHub Copilot', iconUrl: '/Github.svg' },
  { id: 3, name: 'Codex', iconUrl: '/Codex.svg' },
  { id: 4, name: 'Cursor', iconUrl: '/Cursor.svg' },
  { id: 5, name: 'Replit', iconUrl: '/Replit.svg' },
  { id: 6, name: 'Gemini', iconUrl: '/Gemini.svg' },
  { id: 7, name: 'Copilot', iconUrl: '/Copilot.svg' },
  { id: 8, name: 'Ollama', iconUrl: '/Ollama.svg' },
  { id: 9, name: 'Windsurf', iconUrl: '/Windsurf.svg' },
];

export default function AIAugmentedSection() {
  return (
    <div className="w-full bg-[#111] pt-10 pb-20 lg:pt-16 lg:pb-28 text-white">
      <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">
        
        <div className="lg:px-12 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="flex flex-col flex-shrink-0">
              <h3 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
                AI EXPERTS
              </h3>
              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-[1.1] tracking-tight mb-6 whitespace-nowrap">
                Work with AI-augmented developers.
              </h2>
              <p className="text-[15px] sm:text-[17px] text-gray-300 leading-[1.6] max-w-[700px]">
                Every developer we provide uses modern AI coding tools to ship faster than ever while <br className="hidden lg:block" /> producing cleaner, more consistent code.
              </p>
            </div>

            {/* Right Content - 3x3 Grid */}
            <div className="lg:w-[45%] xl:w-[40%] flex justify-start lg:justify-end">
              <div className="grid grid-cols-3 gap-5 sm:gap-6">
                {aiTools.map((tool) => (
                  <div 
                    key={tool.id} 
                    className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] bg-[#f8f9fa] rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer overflow-hidden relative"
                  >
                    {tool.iconUrl ? (
                      <img src={tool.iconUrl} alt={tool.name} className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] object-contain" />
                    ) : (
                      <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 opacity-50 flex items-center justify-center">
                        <span className="text-gray-300 text-lg leading-none">+</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
