import React from 'react';
import Image from 'next/image';

const articles = [
  {
    title: "Automating Quality Assurance: Essential Strategies for Growth Without Sacrificing Stability",
    description: "Discover key strategies to improve software reliability throughout development. Enhance quality and performance—read the article for actionable insights.",
    image: "/software-reliability.avif"
  },
  {
    title: "The CTO's Guide to Choosing the Right Tech Stack for Long-Term Success",
    description: "Discover best practices and strategies for building robust backend architecture. Enhance your development skills and optimize your systems—read more now!",
    image: "/backend-architecture.avif"
  },
  {
    title: "Technical Debt: The Silent Killer of Product Velocity & How to Manage It",
    description: "Explore how to identify, manage, and reduce technical debt in software development. Improve your projects and streamline your processes—read the guide now!",
    image: "/technical-debt.avif"
  },
  {
    title: "Private Blockchains for IoT: Cutting Risks, Costs, and Complexity in Smart Networks",
    description: "Smart devices collect more data than you think, and cloud networks aren't keeping up. Private blockchains provide stronger security, better reliability, and lower costs without the headaches.",
    image: "/bright_modern_smart_home.avif"
  }
];

export default function AIResourcesSection() {
  return (
    <div className="w-full bg-[#111111] pt-10 pb-20 lg:pt-12 lg:pb-32 font-sans text-white">
      <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start w-full lg:pl-12 xl:pl-20">
          
          {/* Left Column: Useful AI Resources */}
          <div className="w-full lg:w-[25%] shrink-0">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 leading-none pt-1">
              USEFUL AI RESOURCES
            </h3>
            
            <div className="bg-[#131313] p-6 sm:p-8 rounded-lg">
              <h4 className="text-[24px] sm:text-[28px] font-bold text-white mb-6">
                AI resources<span className="text-[#00e56a]">.</span>
              </h4>
              
              <div className="flex flex-col gap-2">
                {/* Link 1 */}
                <a href="#" className="flex items-center justify-between p-4 -mx-4 rounded-md group hover:bg-[#252525] transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-gray-500 group-hover:bg-[#00e56a] transition-colors"></div>
                    <span className="text-[14px] sm:text-[15px] text-gray-300 group-hover:text-white transition-colors">
                      Hire AI Developers
                    </span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-500 group-hover:text-white transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                
                {/* Link 2 */}
                <a href="#" className="flex items-center justify-between p-4 -mx-4 rounded-md group hover:bg-[#252525] transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-gray-500 group-hover:bg-[#00e56a] transition-colors"></div>
                    <span className="text-[14px] sm:text-[15px] text-gray-300 group-hover:text-white transition-colors">
                      Outsource AI Development
                    </span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-500 group-hover:text-white transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Related Articles */}
          <div className="w-full lg:w-[75%]">
            
            {/* Invisible spacer to perfectly align the top of this box with the top of the left box */}
            <div className="hidden lg:block h-[12px] mb-6 pt-1"></div>
            
            <div className="bg-[#131313] p-6 sm:p-8 rounded-lg">
              <h4 className="text-[22px] sm:text-[24px] font-bold text-white mb-6">
                Related articles<span className="text-[#00e56a]">.</span>
              </h4>
              
              <div className="flex flex-col gap-6 sm:gap-8">
                {articles.map((article, idx) => (
                  <a key={idx} href="#" className="flex flex-col sm:flex-row gap-4 sm:gap-5 group cursor-pointer">
                    
                    {/* Article Thumbnail */}
                    <div className="w-full sm:w-[160px] h-[100px] shrink-0 overflow-hidden rounded-md bg-[#222]">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-700 "
                      />
                    </div>
                    
                    {/* Article Content */}
                    <div className="flex flex-col justify-center w-full">
                      <h5 className="text-[14px] sm:text-[15px] font-bold text-white mb-1.5 group-hover:underline transition-all duration-300 decoration-1 underline-offset-4 leading-[1.4]">
                        {article.title}
                      </h5>
                      <p className="text-[12px] text-gray-400 leading-[1.6] pr-2">
                        {article.description}
                      </p>
                    </div>
                    
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
