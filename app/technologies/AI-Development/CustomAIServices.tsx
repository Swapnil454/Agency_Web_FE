"use client";

import React, { useState } from 'react';

const accordionData = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI Systems and Custom LLM Projects',
    content: (
      <>
        <p className="mb-4">
          We build advanced agentic AI systems and custom LLM applications that move beyond simple chatbots, enabling dynamic interactions and intelligent task execution. As part of our end-to-end AI software development services, our engineers design reliable architectures with memory, tool use, and safety layers, ensuring production-ready solutions that align with your business goals and technical requirements.
        </p>
        <p>
          Many companies struggle to move from simple LLM integrations to robust, production-grade agentic systems. We help clients overcome these challenges. Our engineers design reliable architectures with memory, tool use, and safety layers, ensuring production-ready solutions that align with your business goals and technical requirements.
        </p>
      </>
    )
  },
  {
    id: 'ml-models',
    title: 'Machine Learning Models',
    content: (
      <>
        <p className="mb-4">
          We create machine learning models tailored to your data and business goals. Our AI development services cover everything from data collection and feature engineering to model training and deployment.
        </p>
        <p>
          Many clients come to us after struggling with brittle models or hard-to-maintain code. We build pipelines that adapt to shifting data inputs and evolving business needs. Our approach includes clear modeling standards, built-in observability, and engineering patterns designed for long-term viability, not just MVP delivery.
        </p>
      </>
    )
  },
  {
    id: 'predictive-analytics',
    title: 'AI-Powered Predictive Analytics',
    content: (
      <>
        <p className="mb-4">
          We engineer AI-driven forecasting solutions for customer behavior, demand planning, risk detection, and more. Our predictive analytics pipelines help you turn data into outcomes by using statistical models and real-time data streams.
        </p>
        <p>
          The biggest hurdle in predictive analytics isn't modeling, it's aligning models with business processes. That's why our AI engineering teams focus on designing systems that plug into your workflows, ensuring decision-makers get timely, relevant outputs.
        </p>
      </>
    )
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing (NLP)',
    content: (
      <>
        <p className="mb-4">
          We develop sophisticated NLP systems capable of understanding, interpreting, and generating human language at scale. From automated document processing to sentiment analysis, our solutions unlock the value hidden in unstructured text data.
        </p>
        <p>
          By leveraging state-of-the-art transformer models, we build highly contextual text-processing engines that seamlessly integrate with your existing platforms, reducing manual workloads and enhancing overall communication workflows.
        </p>
      </>
    )
  },
  {
    id: 'business-process',
    title: 'Custom AI for Business Process Automation',
    content: (
      <>
        <p className="mb-4">
          We design and deploy custom AI agents that automate complex, multi-step business processes. By replacing repetitive manual workflows with intelligent automated pipelines, we drastically improve organizational efficiency.
        </p>
        <p>
          Our engineering approach ensures these automated systems have strict fail-safes and human-in-the-loop oversight mechanisms, providing you with automation that is both highly autonomous and completely secure.
        </p>
      </>
    )
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Product Development',
    content: (
      <>
        <p className="mb-4">
          We partner with organizations to build novel software products powered by Generative AI. Whether generating code, copy, images, or synthetic data, we integrate foundation models into intuitive product experiences.
        </p>
        <p>
          Our team handles the complexities of prompt engineering, fine-tuning, and inference optimization, delivering a final product that is fast, cost-effective, and deeply aligned with your user's core needs.
        </p>
      </>
    )
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis and Business Intelligence Platforms',
    content: (
      <>
        <p className="mb-4">
          We build robust AI-enhanced BI platforms that transform raw data streams into actionable executive insights. Our systems automatically detect anomalies, cluster user behaviors, and generate real-time performance reports.
        </p>
        <p>
          Beyond simple dashboards, we implement conversational interfaces that allow business stakeholders to query complex databases using natural language, democratizing data access across your entire enterprise.
        </p>
      </>
    )
  },
  {
    id: 'supply-chain',
    title: 'AI-Powered Inventory and Supply Chain Optimization',
    content: (
      <>
        <p className="mb-4">
          We architect intelligent supply chain solutions that predict inventory shortages, optimize logistics routing, and dynamically adjust pricing based on global market conditions.
        </p>
        <p>
          By combining deep reinforcement learning with predictive modeling, we give your operations team a strategic edge, reducing overhead costs and ensuring resilience against unexpected supply chain disruptions.
        </p>
      </>
    )
  }
];

export default function CustomAIServices() {
  const [activeTab, setActiveTab] = useState(accordionData[0].id);

  return (
    <div className="w-full bg-[#111] py-20 lg:py-28 text-white border-t border-[#333]">
      <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 justify-between">

          {/* Left Column */}
          <div className="lg:w-5/12 xl:max-w-[700px] flex flex-col pt-2 lg:ml-12 xl:ml-20">
            <h3 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              CUSTOM AI DEVELOPMENT SERVICES
            </h3>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-5">
              You've probably used products built by our AI engineers.
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-300 leading-[1.6] mb-8 max-w-[650px]">
              We've developed custom AI solutions across industries. Whether you're building AI-powered platforms to enhance operational efficiency or using AI to supercharge data analysis, we can help.
            </p>
            <div className="w-full aspect-[21/9] sm:aspect-[2/1] rounded-[3px] overflow-hidden relative shadow-lg mt-2">
              <img
                src="https://assets.bairesdev.com//image/upload/c_limit,w_1280/dpr_auto/f_auto/q_auto/v1/www/static/services-banner_s0dhjg?_a=BAVMn6DY0"
                alt="Engineers working together"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:flex-1 lg:max-w-[600px] flex flex-col gap-5 lg:mr-12 xl:mr-20">
            {accordionData.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col relative border-l-4 cursor-pointer transition-all duration-300 ${isActive ? 'border-[#00e56a]' : 'border-[#333] hover:border-gray-500'
                    }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div className={`px-5 sm:px-6 py-1 text-[16px] sm:text-[17px] lg:text-[18px] transition-colors duration-300 flex items-center ${isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-gray-200'
                    }`}>
                    {item.title}
                  </div>

                  {isActive && (
                    <div className="px-5 sm:px-6 pb-3 text-[14px] sm:text-[15px] text-gray-300 leading-[1.5] animate-in fade-in slide-in-from-top-2 duration-300">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
