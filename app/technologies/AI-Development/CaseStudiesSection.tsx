"use client";

import React from 'react';

const caseStudiesData = [
  {
    id: 1,
    category: "LEGAL",
    title: "Developed AI Tool to Summarize 10,000 Legal Transcripts Daily",
    description: "Our client needed to automate the time-consuming task of summarizing lengthy legal transcripts. We built an AI tool that capable of summarizing 200–300 pages in under 4 seconds. The tool anonymizes sensitive data, returns editable Word and PDF files, and includes hyperlinks to retain source visibility. It automatically segments text and feeds it into an NLP engine, significantly accelerating turnaround time.",
    techStack: ["OpenAI", "Azure", "C#", ".NET", "SQL", "React Native"],
    bgImage: "" // Empty for user to fill
  },
  {
    id: 2,
    category: "AUDIO AND VIDEO MEDIA",
    title: "Automated GenAI Video Integration for HubSpot Campaigns",
    description: "Our client required a system to automatically generate personalized video content for their marketing campaigns. We engineered a robust integration connecting generative AI video platforms directly with HubSpot. The solution leverages customer data to dynamically craft unique video messages at scale, triggering personalized outreach based on user behavior and CRM stage updates.",
    techStack: ["Python", "AWS", "HubSpot API", "Stable Video", "FastAPI"],
    bgImage: ""
  },
  {
    id: 3,
    category: "TECHNOLOGY",
    title: "Built an IDE That Simplifies AI Pipeline Prototyping",
    description: "To accelerate the development of machine learning models, we developed a custom Integrated Development Environment (IDE). This platform provides a visual interface for data scientists to drag-and-drop pipeline components, instantly test algorithms, and deploy models seamlessly. It abstracted complex underlying cloud infrastructure, boosting team productivity by over 40%.",
    techStack: ["React", "TypeScript", "Docker", "Kubernetes", "Node.js"],
    bgImage: ""
  },
  {
    id: 4,
    category: "HEALTHCARE",
    title: "Predictive AI Diagnostics for Early Disease Detection",
    description: "Developed a computer vision model that analyzes medical imagery to detect early signs of anomalies. The system processes MRI and CT scans in real-time, highlighting potential areas of concern for radiologists, reducing diagnostic time by 30% and improving accuracy.",
    techStack: ["TensorFlow", "Python", "AWS Medical", "PyTorch"],
    bgImage: ""
  },
  {
    id: 5,
    category: "FINANCE",
    title: "Algorithmic Trading & Risk Assessment Platform",
    description: "Built a high-frequency trading platform integrated with a machine learning risk assessment engine. The AI analyzes market sentiment, historical trends, and real-time news feeds to adjust portfolio weights dynamically while keeping risk within strict compliance bounds.",
    techStack: ["C++", "Python", "Kafka", "PostgreSQL", "Redis"],
    bgImage: ""
  },
  {
    id: 6,
    category: "RETAIL",
    title: "AI-Powered Inventory and Supply Chain Optimization",
    description: "Implemented a demand forecasting model for a major retail chain. The AI utilizes weather data, local events, and historical sales to predict stock requirements per store. This resulted in a 25% reduction in overstock and completely eliminated stockouts during peak seasons.",
    techStack: ["Scikit-learn", "GCP", "BigQuery", "React"],
    bgImage: ""
  }
];

export default function CaseStudiesSection() {
  const [visibleCount, setVisibleCount] = React.useState(3);

  return (
    <div className="w-full bg-[#111] py-20 lg:py-28 text-white">
      <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">
        
        <div className="lg:px-12 xl:px-20">
          {/* Header Section */}
          <div className="mb-14 lg:mb-20">
          <h3 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
            AI CASE STUDIES
          </h3>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-6 max-w-[800px]">
            Dozens of AI development projects delivered.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-300 leading-[1.6] max-w-[800px]">
            We've provided AI development services across industries, ranging from predictive analytics enterprise platforms to consumer-oriented mobile apps with AI features. Our clients consider us a leading AI development company because we repeatedly deliver scalable, robust solutions.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudiesData.slice(0, visibleCount).map((item) => (
            <div 
              key={item.id}
              className="group relative h-[450px] sm:h-[480px] rounded-[16px] overflow-hidden bg-[#1a1a1a] cursor-pointer"
            >
              {/* Background Layer (Placeholder Image) */}
              <div 
                className="absolute inset-0 bg-[#222]"
                style={item.bgImage ? { backgroundImage: `url(${item.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              ></div>
              
              {/* Dark Gradient Overlay (Mimicking the screenshot's fade to black at bottom) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-[#0a0a0a] transition-opacity duration-500 group-hover:opacity-0"></div>
              
              {/* Solid Black Base on Hover */}
              <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content Container */}
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col overflow-hidden">
                
                {/* Category Badge - Always visible */}
                <div className="mb-8 relative z-10">
                  <span className="inline-block bg-gray-200 text-black text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-[4px] shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Main Content Area - Crossfading/Sliding */}
                <div className="relative flex-1">
                  
                  {/* Default State: Large Title */}
                  <div className="absolute inset-x-0 top-0 transition-all duration-700 ease-out transform group-hover:opacity-0 group-hover:translate-x-8">
                    <h4 className="text-[20px] sm:text-[22px] font-semibold leading-[1.4] text-white">
                      {item.title}
                    </h4>
                  </div>

                  {/* Hover State: Scroll in from left */}
                  <div className="absolute inset-x-0 top-0 flex flex-col transition-all duration-700 ease-out transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <p className="text-[14px] sm:text-[15px] text-gray-300 leading-[1.6] mb-8">
                      {item.description}
                    </p>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2.5">
                      {item.techStack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-[#171e28] border border-[#2c394b] text-[#e2e8f0] text-[12px] sm:text-[13px] px-4 py-1.5 rounded-[8px] tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < caseStudiesData.length && (
          <div className="mt-14 flex justify-center">
            <button 
              onClick={() => setVisibleCount(caseStudiesData.length)}
              className="text-[14px] sm:text-[15px] font-medium text-white pb-1.5 border-b border-gray-500 hover:border-white transition-colors flex items-center gap-2"
            >
              Show More Case Studies <span className="text-xl leading-none font-light">+</span>
            </button>
          </div>
        )}

        {/* Call to Action Banner Strip */}
        <div className="mt-24 w-full bg-[#c3d9fb] rounded-[12px] px-8 py-8 lg:px-12 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <p className="text-[20px] lg:text-[24px] font-normal text-[#222] leading-[1.4] lg:max-w-[650px]">
            Looking for a team with this kind of track record? <br className="hidden lg:block" />
            Tell us more about your AI needs.
          </p>
          <button className="bg-[#216cf3] hover:bg-[#1a5bc9] text-white px-7 py-3 rounded-[6px] font-medium text-[15px] transition-colors whitespace-nowrap shadow-sm">
            Talk to an expert
          </button>
        </div>

        </div>

      </div>
    </div>
  );
}
