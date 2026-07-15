"use client";

import React from 'react';

const testimonials = {
  leftColumn: [
    {
      id: 'DEPLOYA',
      category: 'HEALTHCARE & MEDTECH',
      title: '',
      quote: "We are consistently delivering high-quality software on time, in part thanks to the people from BairesDev. They can find talented, high-caliber, sharp developers who will stay with us long-term. Their main strength is their talent.",
      author: 'Manas Ghan',
      role: 'Product Engagement Lead',
      company: 'DEPLOYA',
      hasHover: false,
    },
    {
      id: 'BITFORGE',
      category: 'FINANCIAL SERVICES',
      title: "Upgraded and Maintained Repay's AWS Infrastructure",
      quote: "They've also been proactive about checking in about the state of the engagement and overall performance. I'm confident we'll continue working with BairesDev for a long time.",
      author: 'Vivek Khanal',
      role: 'Software Dev. Manager',
      company: 'BITFORGE',
      hasHover: true,
      hoverData: {
        description: "Repay has 233,000 suppliers enrolled in its system. To ensure seamless operation, they needed site reliability engineering support and ongoing systems development. Our SRE and DevOps engineers upgraded Repay's AWS infrastructure of 100 AWS accounts, as well as updated the client's internal applications. We also enhanced pipelines to reduce downtime and increase release speed.",
        tags: ['Salesforce', '.NET', 'C#', 'Kubernetes', 'Docker', 'Visual Studio'],
        stats: [
          { value: '15', label: 'Team size' },
          { value: '9.7', label: 'NPS' },
          { value: '4 year', label: 'Engagement' }
        ]
      }
    }
  ],
  rightColumn: [
    {
      id: 'TracePilot',
      category: 'FINANCIAL SERVICES',
      title: "Developed new digital banking features",
      quote: "BairesDev has been a fantastic partner. We wanted to put forth a product to help people cope with financial struggles but didn't have the resources we needed, so we turned to them. They could always find us quality talent in a concise amount of time.",
      author: 'Swapnil Shelke',
      role: 'CEO',
      company: 'TRACEPILOT',
      hasHover: true,
      hoverData: {
        description: "Azlo wanted to make digital banking accessible for entrepreneurs and small businesses. Our engineers built CI/CD pipelines, developed new banking features, and migrated data from MongoDB to PostgreSQL to improve reliability and scalability. We also redesigned the onboarding experience for better UX and faster adoption.",
        tags: ['Angular', 'Node.js', 'JavaScript', 'MongoDB', 'Kafka'],
        stats: [
          { value: '15', label: 'Team size' },
          { value: '10', label: 'NPS' },
          { value: '2 years', label: 'Engagement' }
        ]
      }
    },
    {
      id: 'CLINICLOUD',
      category: 'RENEWABLE ENERGY',
      title: '',
      quote: "I was concerned about a possible mismatch of talent levels of our in-house engineers versus contractors. But, as it turns out, many of the BairesDev engineers we hired emerged as top performers. In fact, of our group of 120 developers, all the BairesDev engineers we had were in the top 20 of the organization.",
      author: 'Vibhor Zanha',
      role: 'GenAI Developer',
      company: 'Bizzman',
      hasHover: false,
    }
  ]
};

// SVG for the quote mark
const QuoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#00e56a" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 mt-1">
    <path d="M10 11.222V17H4V11.222C4 8.286 5.8 6 9.4 6L10 7.444C8.2 7.889 7 9.111 7 11.222H10ZM20 11.222V17H14V11.222C14 8.286 15.8 6 19.4 6L20 7.444C18.2 7.889 17 9.111 17 11.222H20Z" />
  </svg>
);

const TestimonialCard = ({ data }: { data: any }) => {
  return (
    <div className={`relative group w-full mb-6 sm:mb-8 bg-[#161616] border border-[#2a2a2a] rounded-[16px] overflow-hidden flex flex-col ${data.hasHover ? 'cursor-pointer' : ''}`}>
      
      {/* Base Card Content */}
      <div className="flex-grow flex flex-col p-6 sm:p-8">
        <h4 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#ffffff] mb-2 sm:mb-3">
          {data.category}
        </h4>
        {data.title && (
          <h3 className="text-white text-[17px] sm:text-[19px] font-semibold leading-snug mb-5 sm:mb-6">
            {data.title}
          </h3>
        )}
        {!data.title && <div className="mb-5"></div>}
        
        <div className="flex border-t border-[#2a2a2a] pt-5 sm:pt-6 flex-grow">
          <QuoteIcon />
          <p className="text-gray-300 text-[14px] sm:text-[15px] leading-[1.7] font-light">
            "{data.quote}"
          </p>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-[#2a2a2a] pt-4 sm:pt-5">
          <div className="flex flex-col">
            <span className="text-white font-bold text-[14px] sm:text-[15px]">{data.author}</span>
            {data.role && <span className="text-gray-400 font-medium text-[12px] sm:text-[13px] mt-0.5">{data.role}</span>}
          </div>
          <div className="mt-3 sm:mt-0">
            <span className="text-gray-300 font-semibold text-[14px] sm:text-[15px] tracking-wide">{data.company}</span>
          </div>
        </div>
      </div>

      {/* Hover Overlay Box - Sliding in from right */}
      {data.hasHover && (
        <div className="absolute top-0 left-0 w-full h-full bg-[#1c1c1c] border-l-[6px] border-[#00e56a] p-6 sm:p-8 transition-transform duration-500 ease-in-out translate-x-[calc(100%-6px)] group-hover:translate-x-0 flex flex-col justify-between z-30 overflow-hidden">
          <div>
            <h4 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#ffffff] mb-2">
              {data.category}
            </h4>
            <h3 className="text-white text-[17px] sm:text-[19px] font-semibold leading-snug mb-3 pb-3 border-b border-[#333]">
              {data.title}
            </h3>
            <p className="text-gray-300 text-[13px] sm:text-[14px] leading-[1.5] font-light mb-3 sm:mb-4">
              {data.hoverData.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
              {data.hoverData.tags.map((tag: string) => (
                <span key={tag} className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-[11px] font-medium backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 sm:gap-10 border-t border-[#333] pt-3 sm:pt-4 mt-auto">
            {data.hoverData.stats.map((stat: any, i: number) => (
              <div key={i} className="flex flex-col">
                <span className="text-[#ffffff] text-[22px] sm:text-[24px] font-bold leading-none mb-1">{stat.value}</span>
                <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function ClientTestimonialsSection() {
  return (
    <div className="w-full bg-[#111111] pt-10 pb-12 lg:pt-14 lg:pb-16 text-white font-sans">
      <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full lg:pl-12 xl:pl-20">
          
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-1/2 relative z-10">
            {/* Header Content */}
            <div className="mb-8 sm:mb-10 pr-8">
              <h3 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#ffffff] mb-4 sm:mb-6">
                CLIENT TESTIMONIALS
              </h3>
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-tight mb-5 text-white">
                Get AI results you can stand behind.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-gray-400 leading-[1.7] font-light max-w-[500px]">
                Our work holds up in reviews, in production, and in front of the board.
              </p>
            </div>

            {/* Left Column Cards */}
            {testimonials.leftColumn.map(data => (
              <TestimonialCard key={data.id} data={data} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full lg:w-1/2 relative z-10 lg:pt-12">
            {/* Right Column Cards */}
            {testimonials.rightColumn.map(data => (
              <TestimonialCard key={data.id} data={data} />
            ))}

            {/* CTA Card (Join 500+) */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#2a2a2a] rounded-[16px] p-10 sm:p-12 flex flex-col justify-center shadow-2xl mt-4 relative overflow-hidden">
              {/* Subtle background glow for the CTA */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00e56a] opacity-10 rounded-full blur-[80px]"></div>
              
              <h3 className="text-[24px] sm:text-[28px] font-bold leading-[1.2] mb-8 max-w-[320px] relative z-10">
                Join 500+ companies who count on our AI developers
              </h3>
              <div className="relative z-10">
                <button className="bg-[#00e56a] hover:bg-[#00c55a] text-black font-bold text-[15px] px-8 py-4 rounded-[8px] transition-all duration-300 shadow-[0_4px_14px_rgba(0,229,106,0.3)] hover:shadow-[0_6px_20px_rgba(0,229,106,0.4)] hover:-translate-y-0.5">
                  Schedule a Call
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
