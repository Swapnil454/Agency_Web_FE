import React from 'react';

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const StaffIcon = () => (
  <svg width="150" height="150" viewBox="0 0 240 240" fill="none" stroke="#666666" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-2 -left-2 opacity-30 group-hover:opacity-0 transition-all duration-700 pointer-events-none z-0">
    <defs>
      <clipPath id="clip1">
        <circle cx="150" cy="80" r="50" />
      </clipPath>
      <clipPath id="clip2">
        <circle cx="60" cy="170" r="40" />
      </clipPath>
    </defs>
    
    <g>
      <circle cx="150" cy="80" r="50" />
      <circle cx="150" cy="65" r="15" />
      <path d="M 100 120 C 100 85, 200 85, 200 120" clipPath="url(#clip1)" />
    </g>

    <g>
      <circle cx="60" cy="170" r="40" />
      <circle cx="60" cy="158" r="12" />
      <path d="M 20 202 C 20 175, 100 175, 100 202" clipPath="url(#clip2)" />
    </g>
  </svg>
);

const DedicatedIcon = () => (
  <svg width="150" height="150" viewBox="0 0 240 240" fill="none" stroke="#666666" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-2 -left-2 opacity-30 group-hover:opacity-0 transition-all duration-700 pointer-events-none z-0">
    <defs>
      <clipPath id="clip3">
        <circle cx="120" cy="120" r="44" />
      </clipPath>
    </defs>

    {/* Center Person */}
    <circle cx="120" cy="120" r="44" />
    <circle cx="120" cy="106" r="13" />
    <path d="M 70 156 C 70 126, 170 126, 170 156" clipPath="url(#clip3)" />

    {/* Hexagon Nodes and Lines */}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 120 120)`}>
        <circle cx="120" cy="32" r="8" />
        <line x1="130.4" y1="38" x2="185.8" y2="70" />
      </g>
    ))}
  </svg>
);

const OutsourcingIcon = () => (
  <svg width="150" height="150" viewBox="0 0 240 240" fill="none" stroke="#666666" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-2 -left-2 opacity-30 group-hover:opacity-0 transition-all duration-700 pointer-events-none z-0">
    <defs>
      <clipPath id="clip4">
        <circle cx="120" cy="120" r="44" />
      </clipPath>
    </defs>

    {/* Center Person */}
    <circle cx="120" cy="120" r="44" />
    <circle cx="120" cy="106" r="13" />
    <path d="M 70 156 C 70 126, 170 126, 170 156" clipPath="url(#clip4)" />

    {/* 8 Inward Arrows */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 120 120)`}>
        <line x1="120" y1="20" x2="120" y2="52" />
        <polyline points="108 42 120 52 132 42" />
      </g>
    ))}
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const WorkflowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21C7.9 21 6.95833 20.6083 6.175 19.825C5.39167 19.0417 5 18.1 5 17V8.825C4.41667 8.60833 3.9375 8.24583 3.5625 7.7375C3.1875 7.22917 3 6.65 3 6C3 5.16667 3.29167 4.45833 3.875 3.875C4.45833 3.29167 5.16667 3 6 3C6.83333 3 7.54167 3.29167 8.125 3.875C8.70833 4.45833 9 5.16667 9 6C9 6.65 8.8125 7.22917 8.4375 7.7375C8.0625 8.24583 7.58333 8.60833 7 8.825V17C7 17.55 7.19583 18.0208 7.5875 18.4125C7.97917 18.8042 8.45 19 9 19C9.55 19 10.0208 18.8042 10.4125 18.4125C10.8042 18.0208 11 17.55 11 17V7C11 5.9 11.3917 4.95833 12.175 4.175C12.9583 3.39167 13.9 3 15 3C16.1 3 17.0417 3.39167 17.825 4.175C18.6083 4.95833 19 5.9 19 7V15.175C19.5833 15.3917 20.0625 15.7542 20.4375 16.2625C20.8125 16.7708 21 17.35 21 18C21 18.8333 20.7083 19.5417 20.125 20.125C19.5417 20.7083 18.8333 21 18 21C17.1667 21 16.4583 20.7083 15.875 20.125C15.2917 19.5417 15 18.8333 15 18C15 17.35 15.1875 16.7667 15.5625 16.25C15.9375 15.7333 16.4167 15.375 17 15.175V7C17 6.45 16.8042 5.97917 16.4125 5.5875C16.0208 5.19583 15.55 5 15 5C14.45 5 13.9792 5.19583 13.5875 5.5875C13.1958 5.97917 13 6.45 13 7V17C13 18.1 12.6083 19.0417 11.825 19.825C11.0417 20.6083 10.1 21 9 21ZM6 7C6.28333 7 6.52083 6.90417 6.7125 6.7125C6.90417 6.52083 7 6.28333 7 6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6C5 6.28333 5.09583 6.52083 5.2875 6.7125C5.47917 6.90417 5.71667 7 6 7ZM18 19C18.2833 19 18.5208 18.9042 18.7125 18.7125C18.9042 18.5208 19 18.2833 19 18C19 17.7167 18.9042 17.4792 18.7125 17.2875C18.5208 17.0958 18.2833 17 18 17C17.7167 17 17.4792 17.0958 17.2875 17.2875C17.0958 17.4792 17 17.7167 17 18C17 18.2833 17.0958 18.5208 17.2875 18.7125C17.4792 18.9042 17.7167 19 18 19Z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const UserAvatarSVG = ({ className }: { className?: string }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className={className}>
    <circle cx="50" cy="50" r="50" fill="currentColor" />
    <circle cx="50" cy="40" r="18" fill="#161616" />
    <path d="M50 64C30 64 16 80 16 95C16 97.7614 18.2386 100 21 100H79C81.7614 100 84 97.7614 84 95C84 80 70 64 50 64Z" fill="#161616" />
  </svg>
);

export default function EngagementModelsSection() {
  return (
    <div className="w-full bg-[#111111] pt-10 lg:pt-16 pb-20 font-sans text-white relative">
      <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">
        
        {/* Top Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h4 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#ffffff] mb-5">
            FLEXIBLE ENGAGEMENT MODELS
          </h4>
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-tight mb-6 text-white max-w-4xl mx-auto">
            Need extra AI expertise?<br className="hidden sm:block" /> Plug us in where you need us most.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-400 leading-[1.7] font-light max-w-3xl mx-auto">
            We customize every engagement to fit your workflow, priorities, and delivery needs.
          </p>
        </div>

        {/* The Overlapping Section Wrapper */}
        <div className="relative">
          {/* Gray rounded background box that starts behind the cards and goes down */}
          <div className="absolute top-[180px] sm:top-[220px] left-0 right-0 bottom-0 bg-[#161616] border border-[#222] rounded-[24px] lg:rounded-[40px] z-0"></div>

          {/* Cards Container */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 px-4 lg:px-12 xl:px-20">
             
             {/* Card 1 */}
             <div className="bg-[#1c1c1c] border border-[#333] rounded-[16px] p-8 sm:p-10 flex flex-col justify-between min-h-[360px] lg:min-h-[400px] group hover:border-[#00e56a] transition-all duration-500 relative overflow-hidden shadow-xl hover:-translate-y-2 cursor-pointer">
               
               {/* Ripple Background */}
               <div className="absolute inset-0 bg-[#0a0a0a] [clip-path:circle(0%_at_calc(100%_-_56px)_calc(100%_-_56px))] group-hover:[clip-path:circle(150%_at_calc(100%_-_56px)_calc(100%_-_56px))] transition-all duration-[800ms] ease-out pointer-events-none z-0"></div>

               <div className="relative z-10">
                 <h4 className="text-[#00e56a] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] mb-4">
                   STAFF AUGMENTATION
                 </h4>
                 <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[26px] font-semibold leading-[1.3] max-w-[280px]">
                   Need a couple of extra software engineers on your team?
                 </h3>

                 {/* Expanding Description */}
                 <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-out mt-2 sm:mt-4">
                   <div className="overflow-hidden">
                     <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.6] pt-2 pr-4 sm:pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                       Get senior, production-ready developers who integrate directly into your internal team. They work your hours, join your standups, and follow your workflows—just like any full-time engineer.
                     </p>
                   </div>
                 </div>
               </div>
               
               <StaffIcon />
               
               <div className="absolute bottom-8 right-8 bg-[#2a2a2a] group-hover:bg-[#00e56a] group-hover:text-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 z-10">
                 <EyeIcon />
               </div>
             </div>

             {/* Card 2 */}
             <div className="bg-[#1c1c1c] border border-[#333] rounded-[16px] p-8 sm:p-10 flex flex-col justify-between min-h-[360px] lg:min-h-[400px] group hover:border-[#00e56a] transition-all duration-500 relative overflow-hidden shadow-xl hover:-translate-y-2 cursor-pointer">
               
               <div className="absolute inset-0 bg-[#0a0a0a] [clip-path:circle(0%_at_calc(100%_-_56px)_calc(100%_-_56px))] group-hover:[clip-path:circle(150%_at_calc(100%_-_56px)_calc(100%_-_56px))] transition-all duration-[800ms] ease-out pointer-events-none z-0"></div>

               <div className="relative z-10">
                 <h4 className="text-[#00e56a] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] mb-4">
                   DEDICATED TEAMS
                 </h4>
                 <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[26px] font-semibold leading-[1.3] max-w-[280px]">
                   Need a few teams to deliver several projects simultaneously?
                 </h3>

                 <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-out mt-2 sm:mt-4">
                   <div className="overflow-hidden">
                     <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.6] pt-2 pr-4 sm:pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                       Spin up focused, delivery-ready pods to handle full builds or workstreams. Together we align on priorities. Then our tech PMs lead the team and drive delivery to maintain velocity and consistency.
                     </p>
                   </div>
                 </div>
               </div>
               
               <DedicatedIcon />
               
               <div className="absolute bottom-8 right-8 bg-[#2a2a2a] group-hover:bg-[#00e56a] group-hover:text-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 z-10">
                 <EyeIcon />
               </div>
             </div>

             {/* Card 3 */}
             <div className="bg-[#1c1c1c] border border-[#333] rounded-[16px] p-8 sm:p-10 flex flex-col justify-between min-h-[360px] lg:min-h-[400px] group hover:border-[#00e56a] transition-all duration-500 relative overflow-hidden shadow-xl hover:-translate-y-2 cursor-pointer">
               
               <div className="absolute inset-0 bg-[#0a0a0a] [clip-path:circle(0%_at_calc(100%_-_56px)_calc(100%_-_56px))] group-hover:[clip-path:circle(150%_at_calc(100%_-_56px)_calc(100%_-_56px))] transition-all duration-[800ms] ease-out pointer-events-none z-0"></div>

               <div className="relative z-10">
                 <h4 className="text-[#00e56a] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] mb-4">
                   SOFTWARE OUTSOURCING
                 </h4>
                 <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[26px] font-semibold leading-[1.3] max-w-[280px]">
                   Want to offload everything to us, from start to finish?
                 </h3>

                 <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-out mt-2 sm:mt-4">
                   <div className="overflow-hidden">
                     <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.6] pt-2 pr-4 sm:pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                       Hand off the full project lifecycle, from planning to deployment. You define the outcomes. We take full ownership of the execution and keep you looped in every step of the way.
                     </p>
                   </div>
                 </div>
               </div>
               
               <OutsourcingIcon />
               
               <div className="absolute bottom-8 right-8 bg-[#2a2a2a] group-hover:bg-[#00e56a] group-hover:text-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 z-10">
                 <EyeIcon />
               </div>
             </div>
          </div>

          {/* Kick off AI Projects Container */}
          <div className="relative z-10 pb-20 px-4 lg:px-12 xl:px-20">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight text-white text-center mb-16 lg:mb-24">
              Kick off AI projects in 2 - 4 weeks.
            </h2>

            <div className="flex flex-col lg:flex-row max-w-5xl mx-auto gap-12 lg:gap-0">
              
              {/* Left Side - Text block mimicking the image layout */}
              <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end lg:pr-20 text-center lg:text-right">
                
                {/* 3 Overlapping Avatars */}
                <div className="flex -space-x-4 sm:-space-x-6 mb-6 mt-4 justify-center lg:justify-end w-full">
                  <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full border-[4px] border-[#161616] bg-[#222] text-[#444] shadow-lg relative z-10 overflow-hidden transform -rotate-6">
                    <img src="https://i.pravatar.cc/150?img=33" alt="Team member" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] rounded-full border-[4px] border-[#161616] bg-[#2a2a2a] text-[#555] shadow-xl relative z-20 overflow-hidden transform -translate-y-2">
                    <img src="https://i.pravatar.cc/150?img=47" alt="Team member" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full border-[4px] border-[#161616] bg-[#333] text-[#666] shadow-lg relative z-30 overflow-hidden transform rotate-6">
                    <img src="https://i.pravatar.cc/150?img=12" alt="Team member" className="w-full h-full object-cover" />
                  </div>
                </div>

                <h3 className="text-[20px] sm:text-[22px] font-bold text-white mb-3 max-w-[240px]">
                  We have reps<br /> across the US.
                </h3>
                <p className="text-gray-400 text-[15px] sm:text-[16px] leading-[1.7] max-w-[240px]">
                  Speak with a client engagement specialist near you.
                </p>
              </div>

              {/* Right Side - Timeline */}
              <div className="w-full lg:w-2/3 relative pl-2 sm:pl-4">
                
                {/* Vertical dashed line connecting all steps */}
                <div className="absolute top-[30px] left-[31px] sm:left-[43px] bottom-[100px] w-0 border-l-[2px] border-dashed border-[#333] z-0"></div>
                <div className="absolute bottom-[68px] left-[31px] sm:left-[43px] w-[30px] h-[32px] border-l-[2px] border-b-[2px] border-dashed border-[#333] rounded-bl-[16px] z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 flex gap-6 sm:gap-8 mb-12">
                  <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#1c1c1c] border-2 border-[#00e56a] text-[#00e56a] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,229,106,0.15)] relative">
                    <div className="bg-[#1c1c1c] absolute -inset-2 rounded-full -z-10"></div>
                    <PhoneIcon />
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-2 sm:mb-3">Discuss solutions and decide team structure.</h3>
                    <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.7]">
                      Tell us more about your needs. We'll discuss the best-fit solutions and team structure based on your success metrics, timeline, budget, and required skill sets.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex gap-6 sm:gap-8 mb-12">
                  <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#1c1c1c] border-2 border-[#00e56a] text-[#00e56a] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,229,106,0.15)] relative">
                    <div className="bg-[#1c1c1c] absolute -inset-2 rounded-full -z-10"></div>
                    <WorkflowIcon />
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-2 sm:mb-3">Onboard your team and get to work.</h3>
                    <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.7]">
                      With project specifications finalized, we select your team. We're able to onboard developers and assemble dedicated teams in 2-4 weeks after signature.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex gap-6 sm:gap-8 mb-12">
                  <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#1c1c1c] border-2 border-[#00e56a] text-[#00e56a] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,229,106,0.15)] relative">
                    <div className="bg-[#1c1c1c] absolute -inset-2 rounded-full -z-10"></div>
                    <TrendingUpIcon />
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-2 sm:mb-3">We track performance on an ongoing basis.</h3>
                    <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.7]">
                      We continually monitor our teams' work to make sure they're meeting your quantity and quality of work standards at all times.
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="ml-[64px] sm:ml-[76px] mt-2 relative z-10">
                  <button className="bg-[#00e56a] hover:bg-[#00c55a] text-black font-bold text-[14px] sm:text-[16px] py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,229,106,0.2)]">
                    Schedule a Call with Our Team
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
