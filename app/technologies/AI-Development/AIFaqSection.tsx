"use client";

import React, { useState } from 'react';

const faqs = [
  {
    question: "What makes you a leading AI development company for enterprise use cases?",
    answer: "We've delivered AI solutions at scale for clients in finance, healthcare, logistics, and technology. Our teams include senior AI engineers with deep experience in machine learning, data engineering, and MLOps. Our projects follow proven delivery playbooks designed for reliability, traceability, and long-term maintainability. With over a decade of experience building enterprise software, we bring the maturity, talent, and execution rigor that high-stakes AI development requires."
  },
  {
    question: "Will we be working with senior AI developers or junior contractors?",
    answer: "We exclusively provide senior-level AI developers and engineers who have extensive experience in the field. Our rigorous vetting process ensures you only work with top-tier talent capable of handling complex enterprise deployments."
  },
  {
    question: "Can your AI engineers integrate with our team and project management workflows?",
    answer: "Absolutely. Our engineers are trained to seamlessly integrate into your existing Agile workflows, join your daily standups, use your communication tools, and adapt to your internal engineering practices."
  },
  {
    question: "Do your AI development services include integration with existing systems and infrastructure?",
    answer: "Yes, seamless integration is a core part of our offering. We ensure that new AI models and features work smoothly with your legacy systems, databases, and cloud infrastructure without disrupting existing operations."
  },
  {
    question: "How do you ensure data privacy, compliance, and security in AI-powered solutions?",
    answer: "We adhere to strict data security protocols, including SOC 2 and ISO compliance. We implement data anonymization, robust encryption, and ensure that your proprietary data is never used to train public models."
  },
  {
    question: "How do you tailor AI solutions to our business needs?",
    answer: "We start with a deep-dive discovery phase to understand your specific business challenges, KPIs, and technical constraints. This allows us to architect a custom AI solution that directly drives your desired business outcomes."
  },
  {
    question: "What is your process for deploying AI models into production environments?",
    answer: "We utilize advanced MLOps practices, including containerization (Docker/Kubernetes), automated CI/CD pipelines, and rigorous A/B testing, to ensure models are deployed safely, reliably, and with continuous monitoring."
  },
  {
    question: "Can you integrate generative AI features in customer-facing applications?",
    answer: "Yes, we have extensive experience integrating LLMs and generative AI capabilities—like intelligent chatbots, content generation, and semantic search—into both web and mobile customer-facing applications."
  },
  {
    question: "Do you support mobile app development with integrated AI capabilities?",
    answer: "We offer end-to-end development, including cross-platform and native mobile apps that leverage on-device ML or cloud-based AI APIs to deliver powerful, AI-driven user experiences."
  },
  {
    question: "How quickly can you ramp up on our AI development project?",
    answer: "We typically spin up AI development teams in 2-4 weeks. Ramp-up time depends on the complexity of your stack, codebase, and documentation, but our senior engineers are used to onboarding quickly and delivering value fast. Many of our clients tell us we ramp faster than internal hires or other vendors due to our structure, experience, and technical fit."
  }
];

export default function AIFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#111111] py-20 lg:py-24 font-sans text-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="w-full mb-16 lg:mb-20">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#00e56a] mb-6">
            AI FAQ
          </h3>
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-tight text-white">
            What tech leaders ask about AI before pulling us in:
          </h2>
        </div>

        {/* FAQs */}
        <div className="w-full">
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={index} 
                    className="border-b border-[#333] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-6 sm:py-8 flex items-start sm:items-center justify-between gap-6 text-left group"
                    >
                      <span className="text-[18px] sm:text-[20px] font-medium text-white group-hover:text-[#00e56a] transition-colors pr-6">
                        {faq.question}
                      </span>
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen ? 'bg-[#00e56a] rotate-180' : 'bg-[#00e56a] hover:bg-[#00c55a]'
                        }`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>
                    
                    {/* Collapsible Content using CSS Grid trick for smooth animation */}
                    <div 
                      className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className={`text-[15px] sm:text-[16px] text-gray-400 leading-[1.8] pb-8 pr-4 sm:pr-12 transition-opacity duration-500 delay-100 ${
                          isOpen ? 'opacity-100' : 'opacity-0'
                        }`}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        
      </div>
    </div>
  );
}

