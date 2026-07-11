const navItems = ["Services", "Commerce", "Solutions", "Clients", "About us", "Insights"];

import Header from '../components/Header';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden text-white bg-[#0d0d0d]">
      <section className="relative isolate h-screen overflow-hidden">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src="https://res.cloudinary.com/djhuduvrr/video/upload/v1783768660/herosection_video_bonsvn.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0)_100%)]" />

        <Header />

        <div className="relative z-0 mx-auto flex h-screen w-full max-w-[1770px] flex-col justify-center px-5 sm:px-10 lg:px-14">
          <div className="max-w-[700px]">
            <h1 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-medium leading-[1.1] tracking-tight">
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
              <div className="flex items-center gap-8 opacity-90">
                <span className="text-2xl font-bold uppercase tracking-widest">BITFORGE</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                  <span className="text-sm font-bold">R</span>
                </div>
                {/* <span className="text-3xl font-black lowercase tracking-tighter">olx</span> */}
                <span className="text-2xl font-bold  tracking-tight">Deployra</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
