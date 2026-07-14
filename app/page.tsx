"use client";

import { useEffect, useState, useRef } from 'react';
import { Grand_Hotel } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
const grandHotel = Grand_Hotel({ weight: '400', subsets: ['latin'] });

const FULL_STACK_CARDS = [
  {
    title: "Front-End",
    titleBreak: "Development",
    desc: "Build modern frontends designed for performance, accessibility, and scale.",
    pillColor: "bg-[#e85d38]",
    pillHover: "hover:bg-[#d64e2d]",
    iconBg: "bg-[#e85d38]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    tags: ["Front-End", "Web Development", "React", "Angular"]
  },
  {
    title: "Back-End",
    titleBreak: "Development",
    desc: "Develop secure, scalable backends that perform reliably under load.",
    pillColor: "bg-[#4a5568]",
    pillHover: "hover:bg-[#5a667a]",
    iconBg: "bg-[#2d3748]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
        <path d="M3 12A9 3 0 0 0 21 12"></path>
      </svg>
    ),
    tags: ["Back-End", "Database", "Go", ".NET", "Java", "Node.js"]
  },
  {
    title: "AI and Machine",
    titleBreak: "Learning",
    desc: "Deploy trustworthy AI solutions that create real business value.",
    pillColor: "bg-[#1a56db]",
    pillHover: "hover:bg-[#154bbd]",
    iconBg: "bg-[#1a56db]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
        <path d="M15 13h4.5a2 2 0 0 1 1.9 2.5l-.29.87a2 2 0 0 1-1.89 1.37H19"></path>
        <path d="M15 13h.5a2 2 0 0 0 1.9-2.5l-.29-.87a2 2 0 0 0-1.89-1.37H15"></path>
        <path d="M9 13H4.5a2 2 0 0 0-1.9 2.5l.29.87a2 2 0 0 0 1.89 1.37H5"></path>
        <path d="M9 13h-.5a2 2 0 0 1-1.9-2.5l.29-.87a2 2 0 0 1 1.89-1.37H9"></path>
      </svg>
    ),
    tags: ["AI", "Machine Learning", "Data Science", "LLMs", "Generative AI", "Python"]
  },
  {
    title: "Mobile",
    titleBreak: "Development",
    desc: "Launch iOS and Android apps with smooth performance, stable sessions, and secure data handling.",
    pillColor: "bg-[#7c3aed]",
    pillHover: "hover:bg-[#6d28d9]",
    iconBg: "bg-[#7c3aed]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
    ),
    tags: ["Mobile Applications", "iOS", "Android"]
  },
  {
    title: "UX/UI",
    titleBreak: "Design",
    desc: "Deliver product designs with clear user flows, reusable components, and accessible layouts.",
    pillColor: "bg-[#2b8a8e]",
    pillHover: "hover:bg-[#237578]",
    iconBg: "bg-[#2b8a8e]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
      </svg>
    ),
    tags: ["UX Design", "UI Design"]
  },
  {
    title: "QA and",
    titleBreak: "Testing",
    desc: "Ship release-ready software with manual and automated testing that validate core flows end to end.",
    pillColor: "bg-[#1f8f55]",
    pillHover: "hover:bg-[#187846]",
    iconBg: "bg-[#1f8f55]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    tags: ["Quality Assurance"]
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (activeIndex === 6) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  const cardsToRender = [...FULL_STACK_CARDS, ...FULL_STACK_CARDS];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const windowCenter = window.innerHeight / 2;
      rowsRef.current.forEach((row) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const distanceFromCenter = (rect.top + rect.height / 2) - windowCenter;
        
        // Calculate horizontal shift based on vertical distance from center.
        // As you scroll down (element moves up), distance decreases to 0.
        // We use Math.max(0, ...) to ensure it stops perfectly at 0 and NEVER moves further left,
        // preventing any misalignment when the row is in the top half of the screen.
        // We increased the multiplier to 0.4 so it starts further to the right initially.
        const translateX = Math.max(0, distanceFromCenter * 0.4);
        row.style.transform = `translateX(${translateX}px)`;
      });
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="text-white bg-[#111111]">
      <Header />
      <section className="sticky top-0 isolate h-screen overflow-hidden">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src="https://res.cloudinary.com/djhuduvrr/video/upload/v1783768660/herosection_video_bonsvn.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ transform: `translateY(-${scrollY * 0.2}px)` }}
        />

        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0)_100%)]"
          style={{ transform: `translateY(-${scrollY * 0.2}px)` }}
        />

        <div
          className="relative z-0 mx-auto flex h-screen w-full max-w-[1770px] flex-col justify-center px-5 sm:px-10 lg:px-14"
          style={{ transform: `translateY(-${scrollY * 0.7}px)` }}
        >
          <div className="max-w-[700px] lg:ml-12 xl:ml-20">
            <h1 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-semibold leading-[1.1] tracking-tight">
              <span className="text-[#00e56a]">
                We Handle Your<br />Tech,
              </span>
              <br />
              So You Can Handle<br />Your Business
            </h1>

            <p className="mt-8 max-w-[500px] text-[clamp(1.1rem,1.5vw,1.3rem)] font-normal leading-relaxed text-gray-200">
              We power digital commerce with AI-driven platforms, scalable marketplaces, and omnichannel experiences.
            </p>

            <div className="mt-16 flex items-center gap-8">
              <span className="text-sm font-bold">Trusted by:</span>
              <div className="flex items-center gap-8 opacity-90 h-10">
                <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784024533/ChatGPT_Image_Jul_14_2026_03_10_40_PM_adosxq.png" alt="Trusted Client 1" className="h-8 w-auto object-contain" />
                <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784024533/BHAKTI_MUSIC_transparent_uqhpfq.png" alt="Trusted Client 2" className="h-8 w-auto object-contain" />
                <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784024534/ChatGPT_Image_Jul_14_2026_03_17_08_PM_ncrkin.png" alt="Trusted Client 3" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Dark overlay that fades in when scrolling past 70% to make the hero section look inactive */}
        <div
          className="absolute inset-0 z-10 bg-black pointer-events-none transition-opacity duration-700"
          style={{ opacity: scrollY > (typeof window !== 'undefined' ? window.innerHeight * 0.7 : 1000) ? 0.7 : 0 }}
        />
      </section>

      <div className="relative z-10 bg-[#111111]">
        {/* New Section: Reimagined marketplaces */}
        <section className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14 pt-12 pb-12 md:pt-20 md:pb-16">
          <div className="group lg:ml-12 xl:ml-20 mb-6 cursor-default">
            <h2 className="mb-8 max-w-5xl text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-[1.1] tracking-tighter text-gray-400 transition-colors duration-500 hover:text-gray-300">
              Reimagined apps, systems and business{' '}
              <span className="font-extrabold text-white">growth</span>
            </h2>
            <div className="relative h-[3px] w-full max-w-[400px] overflow-hidden rounded-full bg-gray-800/50">
              <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-[#00e57b] via-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(0,229,123,0.4)] transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          </div>
        </section>

        {/* New Section: Case Studies */}
        <section className="mx-auto w-full max-w-[1770px] px-5 pb-32 sm:px-10 lg:px-14">
          <div className="flex flex-col lg:flex-row justify-start gap-10 lg:gap-20 lg:ml-12 xl:ml-20">
            {/* Card 1 */}
            <div className="group cursor-pointer w-full max-w-[480px]">
              <div className="relative mb-4 aspect-video w-full overflow-hidden bg-[#c1e8ff] transition-transform duration-500 group-hover:scale-[1.03]">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783870432/ChatGPT_Image_Jul_12_2026_09_02_54_PM_j99mcs.png"
                  alt="BitForge"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 font-bold italic tracking-tighter text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                      <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                    </svg>
                    <span className="text-xl">BitForge</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">E-Commerce Development</span>
              </div>
              <h3 className="mb-1 text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold leading-tight transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                Scaling BitForge to 10K+ Users and 25K+ Products
              </h3>
              <p className="text-gray-400 md:text-lg">
                Built a secure, high-conversion digital marketplace handling real transactions at scale          </p>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer w-full max-w-[480px] lg:mt-40">
              <div className="relative mb-4 aspect-video w-full overflow-hidden bg-[#c892f3] transition-transform duration-500 group-hover:scale-[1.03]">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783875895/ChatGPT_Image_Jul_12_2026_10_34_16_PM_oyflvo.png"
                  alt="TracePilot"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-bold tracking-tight text-white">
                    <span className="text-xl">TracePilot</span>
                    {/* <span className="text-xs align-top">Go</span> */}
                  </div>
                </div>
                <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">OBSERVABILITY SDK</span>
              </div>
              <h3 className="mb-1 text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold leading-tight transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                Built TracePilot, an Observability SDK for Modern Apps
              </h3>
              <p className="text-gray-400 md:text-lg">
                A zero-config, multi-language observability SDK — unified logging, distributed tracing, and real-time error alerts for Node.js, Python, and Go          </p>
            </div>
          </div>

          {/* Second Row of Case Studies - Right Aligned */}
          <div className="mt-16 lg:mt-32 flex flex-col lg:flex-row justify-end gap-10 lg:gap-20 lg:mr-12 xl:mr-20">
            {/* Card 3 */}
            <div className="group cursor-pointer w-full max-w-[480px]">
              <div className="relative mb-4 aspect-video w-full overflow-hidden bg-[#c1e8ff] transition-transform duration-500 group-hover:scale-[1.03]">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783876597/ChatGPT_Image_Jul_12_2026_10_45_44_PM_ouldzz.png"
                  alt="Xrp Mining"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 font-bold italic tracking-tighter text-white">
                    <span className="text-xl">XRP Miner</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">MOBILE APP DEVELOPMENT</span>
              </div>
              <h3 className="mb-1 text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold leading-tight transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                Built XRP Miner, a Cloud Mining Rewards App
              </h3>
              <p className="text-gray-400 md:text-lg">
                Designed and developed a secure mobile app for cloud-based mining with real-time statistics, live rewards tracking, and seamless earnings management
              </p>
            </div>

            {/* Card 4 */}
            <div className="group cursor-pointer w-full max-w-[480px] lg:mt-40">
              <div className="relative mb-4 aspect-video w-full overflow-hidden bg-[#c892f3] transition-transform duration-500 group-hover:scale-[1.03]">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783876648/ChatGPT_Image_Jul_12_2026_10_46_27_PM_st0ncw.png"
                  alt="Rating App"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-bold tracking-tight text-white">
                    <span className="text-xl">RatingApp</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">WEB & MOBILE DEVELOPMENT</span>
              </div>
              <h3 className="mb-1 text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold leading-tight transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                Powering 4.8 ★ Customer Feedback with RatingApp
              </h3>
              <p className="text-gray-400 md:text-lg">
                A review collection and analytics platform built for businesses to track, understand, and act on customer feedback
              </p>
            </div>
          </div>

          {/* Third Row of Case Studies - Left Aligned */}
          <div className="mt-16 lg:mt-32 flex flex-col lg:flex-row justify-start gap-10 lg:gap-20 lg:ml-12 xl:ml-20">
            {/* Card 5 */}
            <div className="group cursor-pointer w-full max-w-[480px]">
              <div className="relative mb-4 aspect-video w-full overflow-hidden bg-[#c1e8ff] transition-transform duration-500 group-hover:scale-[1.03]">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783875585/ChatGPT_Image_Jul_12_2026_10_13_38_PM_llu5lr.png"
                  alt="Deployra"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 font-bold italic tracking-tighter text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" />
                    </svg>
                    <span className="text-xl">Deployra</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">DEVOPS & AUTOMATION</span>
              </div>
              <h3 className="mb-1 text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold leading-tight transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                Built Deployra, an Automated Deployment Platform
              </h3>
              <p className="text-gray-400 md:text-lg">
                Designed a zero-configuration deployment system with one-click releases, multi-platform support, and real-time monitoring across 20+ platforms
              </p>
            </div>

            {/* Card 6 */}
            <div className="group cursor-pointer w-full max-w-[480px] lg:mt-40">
              <div className="relative mb-4 aspect-video w-full overflow-hidden bg-[#c892f3] transition-transform duration-500 group-hover:scale-[1.03]">
                <img
                  src="https://res.cloudinary.com/djhuduvrr/image/upload/v1783876389/ChatGPT_Image_Jul_12_2026_10_42_37_PM_xi8yqy.png"
                  alt="Messenger App"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-bold tracking-tight text-white">
                    <span className="text-xl">Real-Time Messenger</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">REAL-TIME MESSAGING APP</span>
              </div>
              <h3 className="mb-1 text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold leading-tight transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                Real Conversations, Right When It Matters
              </h3>
              <p className="text-gray-400 md:text-lg">
                Built an end-to-end encrypted messaging platform with instant delivery, group chats, and rich media sharing for teams and individuals
              </p>
            </div>
          </div>

          {/* More Case Studies Link */}
          <div className="mt-16 lg:mt-24 flex justify-start lg:ml-12 xl:ml-20">
            <a href="#" className="group flex items-center gap-2 text-[16px] font-bold text-white transition-all duration-300">
              <span className="underline underline-offset-[6px] decoration-[1.5px] group-hover:decoration-gray-400 group-hover:text-gray-200 transition-all duration-300">More case studies</span>
              <span className="text-xl font-light group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </section>
      </div>

      {/* New Section: Expertise */}
      <div className="relative z-10 bg-[#222222] overflow-hidden">
        <section className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14 pt-16 pb-12 md:pt-20 md:pb-16">
          {/* Title */}
          <div className="mb-12 lg:mb-16 lg:ml-12 xl:ml-20">
            <h2 className="text-[clamp(1.8rem,2.5vw,2.5rem)] font-light tracking-tight text-white">
              Everything you need to <span className="font-bold">build, scale, and optimize your business</span>
            </h2>
          </div>

          {/* Rows Container */}
          <div className="flex flex-col lg:ml-12 xl:ml-20">
            {/* Row 1 */}
            <div 
              ref={(el) => { rowsRef.current[0] = el; }}
              className="flex flex-col lg:flex-row lg:items-start justify-between  py-8 lg:py-10 group cursor-default will-change-transform"
              style={{ transition: 'transform 0.1s ease-out' }}
            >
              <div className="lg:w-[35%] mb-4 lg:mb-0">
                <h3 className="text-[20px] lg:text-[22px] font-bold text-[#f5f5f5] transition-colors duration-300">Strategy & Consulting</h3>
              </div>
              <div className="lg:w-[50%]">
                <p className="text-[#a1a1aa] text-[14px] lg:text-[15px] leading-[1.6] transition-colors duration-300 group-hover:text-gray-300">
                  From idea validation to legacy modernization, we help you choose the right technology and build a roadmap that scales — without over-engineering or wasted budget.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div 
              ref={(el) => { rowsRef.current[1] = el; }}
              className="flex flex-col lg:flex-row lg:items-start justify-between border-t border-white/10 py-8 lg:py-10 group cursor-default will-change-transform"
              style={{ transition: 'transform 0.1s ease-out' }}
            >
              <div className="lg:w-[35%] mb-4 lg:mb-0">
                <h3 className="text-[20px] lg:text-[22px] font-bold text-[#f5f5f5] transition-colors duration-300">Experience & design</h3>
              </div>
              <div className="lg:w-[50%]">
                <p className="text-[#a1a1aa] text-[14px] lg:text-[15px] leading-[1.6] transition-colors duration-300 group-hover:text-gray-300">
                  Human-centered UI/UX design built for real users — clean interfaces, conversion-focused journeys, and AI-powered personalization that turns visitors into loyal customers.                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div 
              ref={(el) => { rowsRef.current[2] = el; }}
              className="flex flex-col lg:flex-row lg:items-start justify-between border-t border-white/10 py-8 lg:py-10 group cursor-default will-change-transform"
              style={{ transition: 'transform 0.1s ease-out' }}
            >
              <div className="lg:w-[35%] mb-4 lg:mb-0">
                <h3 className="text-[20px] lg:text-[22px] font-bold text-[#f5f5f5] transition-colors duration-300">App & Web Development</h3>
              </div>
              <div className="lg:w-[50%]">
                <p className="text-[#a1a1aa] text-[14px] lg:text-[15px] leading-[1.6] transition-colors duration-300 group-hover:text-gray-300">
                  Full-stack development for web, Android, and iOS — from custom builds to ongoing maintenance, integrated with your CRM, payments, and business tools, end-to-end from concept to launch.
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div 
              ref={(el) => { rowsRef.current[3] = el; }}
              className="flex flex-col lg:flex-row lg:items-start justify-between border-t border-white/10 py-8 lg:py-10 group cursor-default will-change-transform"
              style={{ transition: 'transform 0.1s ease-out' }}
            >
              <div className="lg:w-[35%] mb-4 lg:mb-0">
                <h3 className="text-[20px] lg:text-[22px] font-bold text-[#f5f5f5] transition-colors duration-300">AI, data & engagement</h3>
              </div>
              <div className="lg:w-[50%]">
                <p className="text-[#a1a1aa] text-[14px] lg:text-[15px] leading-[1.6] transition-colors duration-300 group-hover:text-gray-300">
                  Boost your AI personalization, retail media and onsite ads, real-time analytics, digital twins for products and stores, loyalty programs, payment models, and green checkout.
                </p>
              </div>
            </div>

            {/* Row 5 */}
            <div 
              ref={(el) => { rowsRef.current[4] = el; }}
              className="flex flex-col lg:flex-row lg:items-start justify-between border-t border-b border-white/10 py-8 lg:py-10 group cursor-default will-change-transform"
              style={{ transition: 'transform 0.1s ease-out' }}
            >
              <div className="lg:w-[35%] mb-4 lg:mb-0">
                <h3 className="text-[20px] lg:text-[22px] font-bold text-[#f5f5f5] transition-colors duration-300">Ops & managed services</h3>
              </div>
              <div className="lg:w-[50%]">
                <p className="text-[#a1a1aa] text-[14px] lg:text-[15px] leading-[1.6] transition-colors duration-300 group-hover:text-gray-300">
                  Breathe easily with our 24/7 monitoring, proactive maintenance, cloud operations and cost optimization, DevOps and CI/CD automation, and security and compliance audits.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* New Section: Full-Stack Coverage */}
      <div className="relative z-10 bg-[#111111]">
        <section className="mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14 pt-12 pb-16 md:pt-16 lg:pb-24">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20">
            <h2 className="text-[clamp(2rem,3vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1] lg:ml-12 xl:ml-20">
              Get full-stack coverage.<br />
              Unblock execution across the SDLC<span className="text-[#ff4a31]">.</span>
            </h2>
            <div className="mt-8 md:mt-0 lg:mr-12 xl:mr-20">
              <a href="#" className="group relative inline-flex items-center gap-2 text-[16px] font-bold text-white transition-colors hover:text-gray-300">
                Everything we do
                <span className="text-xl font-light transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-white transition-colors group-hover:bg-gray-300"></span>
              </a>
            </div>
          </div>

          {/* Cards Grid / Slider Track */}
          <div className="overflow-hidden lg:mx-12 xl:mx-20 pb-16 lg:pb-32">
            <div className="flex">
              {cardsToRender.map((card, i) => {
                const relativeIndex = i - activeIndex;
                
                // Determine vertical staircase position based on where the card is relative to the viewport
                let translateClass = "lg:translate-y-0";
                if (relativeIndex === 1) translateClass = "lg:translate-y-12 xl:translate-y-16";
                else if (relativeIndex === 2) translateClass = "lg:translate-y-24 xl:translate-y-32";
                else if (relativeIndex > 2) translateClass = "lg:translate-y-24 xl:translate-y-32"; // Incoming from right, start low
                else if (relativeIndex < 0) translateClass = "lg:translate-y-0"; // Exiting left, stay high

                return (
                  <div 
                    key={i} 
                    className={`w-full md:w-[calc(33.333333%-1rem)] flex-shrink-0 mr-6 ${isTransitioning ? 'transition-all duration-700 ease-in-out' : ''} ${translateClass}`}
                    style={{ '--tw-translate-x': `calc(-${activeIndex} * (100% + 1.5rem))` } as React.CSSProperties}
                  >
                    <div 
                      className="bg-[#161616] p-8 lg:p-10 flex flex-col hover:bg-[#1a1a1a] border border-white/[0.05] hover:border-white/[0.15] rounded-[32px] group cursor-default h-full transition-all duration-500 hover:shadow-2xl overflow-hidden relative"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onTouchStart={() => setIsHovered(true)}
                      onTouchEnd={() => setIsHovered(false)}
                    >
                      {/* Subtle hover gradient glow inside card */}
                      <div className={`absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-3xl rounded-full ${card.iconBg} -translate-y-1/2 translate-x-1/3 pointer-events-none`}></div>
                      
                      <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-8 shadow-lg shadow-black/20 z-10 relative`}>
                        {card.icon}
                      </div>
                      <h3 className="text-[26px] lg:text-[28px] font-bold text-white mb-4 leading-[1.15] tracking-tight z-10 relative">
                        {card.title}<br />{card.titleBreak}
                      </h3>
                      <p className="text-[#a1a1aa] text-[15px] lg:text-[16px] leading-relaxed mb-10 flex-1 group-hover:text-gray-300 transition-colors duration-300 z-10 relative">
                        {card.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto z-10 relative">
                        {card.tags.map(tag => (
                          <a href="#" key={tag} className={`${card.pillColor} ${card.pillHover} transition-all duration-300 rounded-full px-4 py-1.5 text-[13px] font-semibold text-white hover:shadow-lg cursor-pointer hover:-translate-y-0.5`}>
                            {tag}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* New Section: Why Agency? */}
      <div className="relative z-10 bg-[radial-gradient(ellipse_at_top_left,_#132b1a_0%,_#0a110d_60%,_#070a08_100%)] overflow-hidden">
        
        <section className="relative mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8">
            {/* Left Column */}
            <div className="w-full lg:w-[45%] flex flex-col justify-between lg:ml-12 xl:ml-20">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#00e56a]">
                    <path d="M5 20V4L19 20V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[20px] font-semibold tracking-tight text-white">Agency</span>
                </div>
                <h2 className="text-[clamp(3.5rem,5vw,4.5rem)] text-white leading-[1.1] tracking-tight">
                  <span className="font-normal">Why</span> <span className="font-bold">Agency?</span>
                </h2>
              </div>
              
              <p className="text-white text-[17px] lg:text-[19px] leading-[1.6] mt-16 lg:mt-32 font-medium max-w-[420px]">
                Trusted worldwide, rated best-in-class by our clients, and built for end-to-end delivery — we're not just a vendor, we're your digital product engine.
              </p>
            </div>

            {/* Right Column - Simple List */}
            <div className="w-full lg:w-[50%] lg:pl-12 mt-16 lg:mt-0">
              <div className="flex flex-col gap-8 lg:gap-10">
                
                {/* Statement 1 */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 text-[#00e56a] mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className={`text-[28px] lg:text-[32px] text-white leading-snug tracking-wide ${grandHotel.className}`}>
                    Trusted by leading brands, rated best-in-class
                  </div>
                </div>

                {/* Statement 2 */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 text-[#00e56a] mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className={`text-[28px] lg:text-[32px] text-white leading-snug tracking-wide ${grandHotel.className}`}>
                    A delivery record measured in thousands of launches
                  </div>
                </div>

                {/* Statement 3 */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 text-[#00e56a] mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className={`text-[28px] lg:text-[32px] text-white leading-snug tracking-wide ${grandHotel.className}`}>
                    A global bench built for complex, cross-market work
                  </div>
                </div>

                {/* Statement 4 */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 text-[#00e56a] mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className={`text-[28px] lg:text-[32px] text-white leading-snug tracking-wide ${grandHotel.className}`}>
                    Deep, battle-tested product expertise
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      {/* New Section: Insights */}
      <div className="relative z-10 bg-[#161616] overflow-hidden">
        <section className="relative mx-auto w-full max-w-[1770px] px-5 sm:px-10 lg:px-14 pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-24">
          {/* Header */}
          <div className="mb-10 lg:mb-16 lg:ml-12 xl:ml-20">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-[1.1] tracking-tight">
              Explore insights <span className="font-bold">for acceleration</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:mx-12 xl:mx-20 pb-8 lg:pb-0 items-start lg:max-w-[1100px] xl:max-w-[1250px]">
            
            {/* Card 1 */}
            <div className="w-full lg:w-1/3 flex flex-col justify-between self-stretch">
              <div className="flex flex-col group cursor-pointer">
                <div className="aspect-[2/1] overflow-hidden relative">
                  <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784015149/blog1_dp3pay.png" alt="Blog post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="bg-[#242424] p-5 lg:p-6 flex flex-col justify-between transition-colors duration-300 group-hover:bg-[#2a2a2a]">
                <div>
                  <div className="text-[10px] lg:text-[11px] font-bold tracking-widest text-[#a1a1aa] mb-3 uppercase">Blog</div>
                  <h3 className="text-[16px] lg:text-[18px] font-semibold text-white leading-snug mb-4 group-hover:text-gray-200 transition-colors">
                    Human-AI collaboration in the workplace
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden shrink-0">
                       <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784015106/Swapnil_Shelke_Profile_epq46u.png" className="w-full h-full object-cover" alt="Author" />
                    </div>
                    <span className="text-[12px] lg:text-[13px] text-[#a1a1aa]">Swapnil Shelke / July 10, 2026</span>
                  </div>
                  <span className="text-white transform transition-transform duration-300 group-hover:translate-x-1 shrink-0 ml-2 text-xl">→</span>
                </div>
              </div>
            </div>
              
              {/* Bottom Link for Desktop */}
              <div className="hidden lg:block mt-auto pb-4 pt-16">
                <a href="#" className="inline-block text-[16px] font-bold text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-2 hover:after:bg-gray-300 hover:text-gray-300 transition-colors">
                  More disruptive insights →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full lg:w-1/3 flex flex-col group cursor-pointer lg:mt-[calc((100%-4rem)/3*0.2)]">
              <div className="aspect-[2/1] overflow-hidden relative">
                <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784015149/blog2_jd9hhu.png" alt="Podcast" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="bg-[#242424] p-5 lg:p-6 flex flex-col justify-between transition-colors duration-300 group-hover:bg-[#2a2a2a]">
                <div>
                  <div className="text-[10px] lg:text-[11px] font-bold tracking-widest text-[#00e56a] mb-3 uppercase">Podcast</div>
                  <h3 className="text-[16px] lg:text-[18px] font-semibold text-white leading-snug mb-4 group-hover:text-gray-200 transition-colors">
                    Post-cloud infrastructure & edge computing
                  </h3>
                </div>
                <div className="flex items-center justify-end mt-auto">
                  <span className="text-[#a1a1aa] group-hover:text-white transform transition-colors duration-300 text-2xl font-light">↗</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full lg:w-1/3 flex flex-col group cursor-pointer lg:mt-[calc(((100%-4rem)/3*0.2)*2)]">
              <div className="aspect-[2/1] overflow-hidden relative">
                <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784015138/blog3_uqlp6f.png" alt="Blog post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="bg-[#242424] p-5 lg:p-6 flex flex-col justify-between transition-colors duration-300 group-hover:bg-[#2a2a2a]">
                <div>
                  <div className="text-[10px] lg:text-[11px] font-bold tracking-widest text-[#a1a1aa] mb-3 uppercase">Blog</div>
                  <h3 className="text-[16px] lg:text-[18px] font-semibold text-white leading-snug mb-4 group-hover:text-gray-200 transition-colors">
                    Regulatory & compliance-driven product design
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden shrink-0">
                       <img src="https://res.cloudinary.com/djhuduvrr/image/upload/v1784015106/Swapnil_Shelke_Profile_epq46u.png" className="w-full h-full object-cover" alt="Author" />
                    </div>
                    <span className="text-[12px] lg:text-[13px] text-[#a1a1aa]">Swapnil Shelke / May 28, 2026</span>
                  </div>
                  <span className="text-white transform transition-transform duration-300 group-hover:translate-x-1 shrink-0 ml-2 text-xl">→</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Link for Mobile */}
          <div className="block lg:hidden mt-16 px-5 sm:px-10">
            <a href="#" className="inline-block text-[16px] font-bold text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-2 hover:after:bg-gray-300 hover:text-gray-300 transition-colors">
              More disruptive insights →
            </a>
          </div>
        </section>
      </div>
      {/* CTA / Hero Style Section */}
      <div className="relative z-10 bg-[#0a0a0f] overflow-hidden border-t border-b border-white/5">
        {/* Soft green radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-[#00e56a] rounded-full blur-[120px] lg:blur-[150px] opacity-10 pointer-events-none"></div>
        
        <section className="relative mx-auto w-full max-w-[1000px] px-5 sm:px-10 lg:px-14 py-24 md:py-32 flex flex-col items-center text-center">
          <h2 className="text-[18px] md:text-[24px] lg:text-[28px] font-normal text-[#d1d5db] leading-snug tracking-tight mb-8">
            Design, build, and <strong className="font-semibold text-white">scale digital commerce</strong> solutions<br className="hidden md:block" /> that drive revenue and operational excellence
          </h2>
          
          <button className="bg-[#00e56a] hover:bg-[#00c55a] text-black font-semibold text-[15px] lg:text-[16px] px-8 py-4 transition-colors duration-300 flex items-center gap-2">
            Estimate project 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
