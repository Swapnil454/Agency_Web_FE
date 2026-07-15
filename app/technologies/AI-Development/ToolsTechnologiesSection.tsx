'use client';
import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    title: 'Deep Learning Frameworks',
    description: 'We use high-performance frameworks to build, train, and optimize deep learning models across different use cases. Our engineers follow proven internal playbooks for model architecture, training workflows, and performance optimization.',
    tags: ['PyTorch', 'TensorFlow', 'Keras'],
  },
  {
    id: 2,
    title: 'Machine Learning Libraries',
    description: 'Our engineers leverage robust machine learning libraries for predictive modeling, classification, and regression. We follow well-documented internal processes to standardize feature engineering, model evaluation, and hyperparameter tuning. We select the right tools based on performance, accuracy, and interpretability requirements.',
    tags: ['Scikit-Learn', 'XGBoost', 'LightGBM'],
  },
  {
    id: 3,
    title: 'Data Engineering Tools',
    description: 'We build scalable data pipelines to ingest, clean, and transform massive datasets for AI processing. Our architectures ensure high throughput, reliability, and data quality across the entire machine learning lifecycle.',
    tags: ['Apache Spark', 'Apache Kafka', 'Airflow'],
  },
  {
    id: 4,
    title: 'Data Manipulation and Analysis Tools',
    description: 'We utilize powerful libraries for exploratory data analysis, transformation, and visualization, enabling rapid prototyping and deep insights into complex datasets before model training begins.',
    tags: ['Pandas', 'NumPy', 'SciPy'],
  },
  {
    id: 5,
    title: 'Cloud-Based Machine Learning Platforms',
    description: 'We deploy and scale models using secure, cloud-native services optimized for GPU training and auto-scaling. Our engineers successfully countless deployments and have a deep understanding of commerical cloud ecosystems. We rely on managed infrastructure provided by the three leading cloud vendors.',
    tags: ['Amazon SageMaker', 'Google Vertex AI', 'Microsoft Azure Machine Learning'],
  },
  {
    id: 6,
    title: 'Integrated Development Environments',
    description: 'Our development teams use industry-standard IDEs configured with custom extensions for AI workflows, ensuring maximum productivity, seamless debugging, and version control integration.',
    tags: ['VS Code', 'Jupyter', 'PyCharm'],
  },
  {
    id: 7,
    title: 'AI-Assisted Coding Tools',
    description: 'We augment our engineers with state-of-the-art AI coding assistants to accelerate development velocity, improve code quality, and automate repetitive boilerplate tasks while maintaining strict security standards.',
    tags: ['GitHub Copilot', 'Cursor', 'Claude Code'],
  },
  {
    id: 8,
    title: 'Model Deployment and Serving',
    description: 'We implement high-performance model serving architectures to deliver low-latency inference at scale. Our solutions support A/B testing, canary rollouts, and efficient resource utilization via containerization.',
    tags: ['TensorRT', 'ONNX', 'Triton'],
  },
  {
    id: 9,
    title: 'Model Monitoring and Lifecycle Management',
    description: 'We implement robust monitoring and lifecycle workflows to track performance drift, retrain triggers, and version histories across AI deployments. Our engineers configure dashboards, alerts, and audit trails to ensure that your models remain reliable, compliant, and aligned with changing business needs.',
    tags: ['MLflow', 'Weights & Biases', 'Neptune.ai'],
  },
];

export default function ToolsTechnologiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full pt-12 pb-24 lg:pt-16 lg:pb-32 text-white font-sans">
      <div className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14">
        {/* Use padding-left instead of margin-left to prevent horizontal overflow on w-full elements */}
        <div className="lg:pl-12 xl:pl-20 w-full">
          
          {/* Header Section */}
          <div className="mb-10 max-w-4xl">
            <h3 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
              TOOLS FOR AI DEVELOPMENT
            </h3>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-[1.1] tracking-tight mb-6">
              Tools and technologies used in our AI development projects:
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-300 leading-[1.6]">
              We combine industry-standard frameworks with modern tooling and proven internal processes to accelerate delivery and maintain custom AI solutions over time. Our engineers bring deep familiarity with the tools required for AI model development and tuning, data engineering, and secure deployment.
            </p>
          </div>

          {/* Interactive Layout Section */}
          <div className="flex flex-col lg:flex-row w-full relative z-10">
            
            {/* Left Column - Tabs */}
            <div className="flex flex-col w-full lg:w-[45%] xl:w-[40%] shrink-0">
              {categories.map((cat, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={cat.id} className="w-full flex flex-col mb-2">
                    {/* Tab Button Wrapper for relative positioning of the line */}
                    <div className="relative w-full">
                      <button
                        onClick={() => setActiveIndex(index)}
                        className={`w-full text-left px-5 py-4 sm:px-6 sm:py-4.5 flex items-center gap-4 transition-all duration-300 rounded-[8px] border ${
                          isActive
                            ? 'bg-[#1a1a1a] border-[#F26207] text-white shadow-lg'
                            : 'bg-[#161616] border-transparent hover:bg-[#1c1c1c] text-gray-400 hover:text-white'
                        }`}
                      >
                        {/* SVG Checkmark Icon */}
                        <div className="shrink-0 flex items-center justify-center">
                          <svg 
                            width="22" 
                            height="22" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className={isActive ? 'text-[#F26207]' : 'text-gray-500'}
                          >
                            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
                            <path d="M7 12.5L10.5 16L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className={`font-semibold text-[15px] sm:text-[16px]`}>
                          {cat.title}
                        </span>
                      </button>

                      {/* Desktop Horizontal Connecting Line */}
                      {isActive && (
                        <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-6 xl:w-12 h-[1px] bg-[#F26207] z-20"></div>
                      )}
                    </div>

                    {/* Mobile Accordion Content */}
                    <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out w-full ${isActive ? 'max-h-[1000px] opacity-100 mt-3 mb-2' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#111111] border border-[#F26207] rounded-[8px] p-4 sm:p-5 shadow-2xl">
                        <p className="text-gray-300 text-[14px] leading-[1.6] mb-4">
                          {cat.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cat.tags.map((tag) => (
                            <span key={tag} className="bg-[#222] text-gray-300 px-3 py-1.5 rounded-full text-[12px] font-medium border border-gray-800">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Right Box Column with Flex-Spacer alignment */}
            <div className="hidden lg:flex flex-col w-[55%] xl:w-[60%] pl-6 xl:pl-12">
              {/* Top flex spacer pushes box down dynamically */}
              <div className="transition-all duration-300 ease-out" style={{ flexGrow: activeIndex, minHeight: 0 }}></div>
              
              {/* The Content Box */}
              <div className="bg-[#111111] border border-[#F26207] rounded-[8px] p-5 sm:p-6 shadow-xl shrink-0">
                <p className="text-gray-300 text-[15px] leading-[1.7] mb-5">
                  {categories[activeIndex].description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {categories[activeIndex].tags.map((tag) => (
                    <span key={tag} className="bg-[#222] text-gray-300 px-4 py-1.5 rounded-full text-[13px] font-medium border border-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom flex spacer pushes box up dynamically */}
              <div className="transition-all duration-300 ease-out" style={{ flexGrow: categories.length - 1 - activeIndex, minHeight: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
