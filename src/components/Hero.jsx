import React from 'react';

export default function Hero() {
  return (
    <main className="flex-1 flex relative pt-5 pb-5">
      {/* Left Vertical Brand Axis / Sidebar */}
      <aside className="hidden min-[993px]:flex w-[120px] min-[1101px]:w-[150px] relative flex-col">
        <div className="w-[1px] h-[50px] bg-grid-line ml-5" />
        <ul className="list-none mt-2.5 pl-5 border-l border-primary py-2.5 space-y-0">
          <li className="font-body text-[0.65rem] font-bold tracking-[2.5px] leading-[2.2] text-secondary">
            IDEAS
          </li>
          <li className="font-body text-[0.65rem] font-bold tracking-[2.5px] leading-[2.2] text-secondary">
            PEOPLE
          </li>
          <li className="font-body text-[0.65rem] font-bold tracking-[2.5px] leading-[2.2] text-secondary">
            TECHNOLOGY
          </li>
          <li className="font-body text-[0.65rem] font-bold tracking-[2.5px] leading-[2.2] text-secondary">
            IMPACT
          </li>
        </ul>
        <div className="sidebar-bottom-line" />
      </aside>

      {/* Centered Hero Content */}
      <div className="flex-1 flex flex-col items-center text-center max-w-[900px] mx-auto z-10 w-full">
        {/* Subtitle */}
        <div className="font-heading font-semibold text-secondary text-[0.65rem] min-[481px]:text-[0.75rem] min-[769px]:text-[0.85rem] tracking-[2.5px] min-[481px]:tracking-spaced-lg min-[769px]:tracking-spaced-2xl mb-2.5 min-[481px]:mb-[15px] min-[769px]:mb-5 uppercase">
          // MORE THAN A CLUB
        </div>

        {/* Small Club Insignia */}
        <div className="mb-2.5 flex justify-center">
          <img
            src="/ATC LOGO.svg"
            alt="ATC Logo Small"
            className="w-[110px] min-[481px]:w-[130px] min-[769px]:w-[150px] h-auto -my-[25px] min-[481px]:-my-[35px] min-[769px]:-my-[45px]"
          />
        </div>

        {/* Huge Display Heading */}
        <div className="flex flex-col items-center mb-[18px] min-[481px]:mb-5 min-[769px]:mb-[25px] w-full select-none">
          <span className="font-wide text-primary uppercase text-[1.6rem] min-[361px]:text-[1.85rem] min-[481px]:text-[2.6rem] min-[769px]:text-[3.4rem] min-[993px]:text-[3.8rem] min-[1101px]:text-[4.5rem] min-[1401px]:text-[5.2rem] leading-[1.05] min-[769px]:leading-none tracking-[-0.2px] min-[361px]:tracking-[-0.3px] min-[481px]:tracking-[-0.5px] min-[993px]:tracking-[-0.8px] min-[1101px]:tracking-[-1px]">
            we are
          </span>
          <span className="font-wide text-primary uppercase text-[1.6rem] min-[361px]:text-[1.85rem] min-[481px]:text-[2.6rem] min-[769px]:text-[3.4rem] min-[993px]:text-[3.8rem] min-[1101px]:text-[4.5rem] min-[1401px]:text-[5.2rem] leading-[1.05] min-[769px]:leading-none tracking-[-0.2px] min-[361px]:tracking-[-0.3px] min-[481px]:tracking-[-0.5px] min-[993px]:tracking-[-0.8px] min-[1101px]:tracking-[-1px]">
            solid team
          </span>
        </div>

        {/* Divider Line with Tagline */}
        <div className="flex flex-col min-[481px]:flex-row items-center w-full max-w-[800px] mb-[25px] text-secondary text-[0.6rem] min-[481px]:text-[0.65rem] min-[769px]:text-[0.75rem] font-semibold tracking-[1.5px] min-[481px]:tracking-[2px] min-[769px]:tracking-spaced-lg">
          <span className="h-[1px] bg-border-light w-[50px] min-[481px]:w-auto min-[481px]:flex-1 min-[481px]:mx-[15px] min-[769px]:mx-[30px]" />
          <span className="my-1 min-[481px]:my-0 whitespace-nowrap">
            IDEAS &nbsp;/&nbsp; PEOPLE &nbsp;/&nbsp; TECHNOLOGY &nbsp;/&nbsp; IMPACT
          </span>
          <span className="h-[1px] bg-border-light w-[50px] min-[481px]:w-auto min-[481px]:flex-1 min-[481px]:mx-[15px] min-[769px]:mx-[30px]" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col min-[481px]:flex-row gap-2.5 min-[481px]:gap-[15px] min-[769px]:gap-5 mb-[30px] min-[481px]:mb-[35px] min-[769px]:mb-10 w-full min-[481px]:w-auto max-w-[260px] min-[481px]:max-w-none justify-center">
          <a
            href="#about"
            className="inline-flex items-center justify-center border border-primary bg-primary text-white rounded-cta font-bold font-body tracking-widest-plus text-[0.7rem] min-[481px]:text-[0.72rem] min-[769px]:text-[0.75rem] py-[13px] min-[481px]:py-3.5 min-[769px]:py-4 px-5 min-[481px]:px-7 min-[769px]:px-[45px] hover:bg-[#222222] transition-all duration-300 w-full min-[481px]:w-auto"
          >
            GET INVOLVED &rarr;
          </a>
          <a
            href="#events"
            className="inline-flex items-center justify-center border border-primary bg-transparent text-primary rounded-cta font-bold font-body tracking-widest-plus text-[0.7rem] min-[481px]:text-[0.72rem] min-[769px]:text-[0.75rem] py-[13px] min-[481px]:py-3.5 min-[769px]:py-4 px-5 min-[481px]:px-7 min-[769px]:px-[45px] hover:bg-[#f9f9f9] transition-all duration-300 w-full min-[481px]:w-auto"
          >
            EXPLORE EVENTS &rarr;
          </a>
        </div>

        {/* Stats Metrics Bar */}
        <div className="grid grid-cols-2 min-[769px]:flex items-center justify-center gap-x-3 min-[481px]:gap-x-5 gap-y-[18px] min-[481px]:gap-y-[25px] min-[769px]:gap-[30px] min-[993px]:gap-[35px] min-[1101px]:gap-[45px] min-[1401px]:gap-[60px] max-w-[300px] min-[481px]:max-w-[420px] min-[769px]:max-w-none w-full">
          <div className="text-center">
            <h3 className="font-heading font-extrabold text-primary text-[1.8rem] min-[481px]:text-[2.2rem] min-[769px]:text-[2.8rem] mb-1 min-[769px]:mb-2 leading-tight">
              500+
            </h3>
            <p className="font-body font-bold text-secondary text-[0.58rem] min-[481px]:text-[0.65rem] tracking-[1px] min-[481px]:tracking-[2px] min-[769px]:tracking-[3px] uppercase">
              MEMBERS
            </p>
          </div>

          <div className="hidden min-[769px]:block w-[1px] h-10 bg-border-light" />

          <div className="text-center">
            <h3 className="font-heading font-extrabold text-primary text-[1.8rem] min-[481px]:text-[2.2rem] min-[769px]:text-[2.8rem] mb-1 min-[769px]:mb-2 leading-tight">
              20+
            </h3>
            <p className="font-body font-bold text-secondary text-[0.58rem] min-[481px]:text-[0.65rem] tracking-[1px] min-[481px]:tracking-[2px] min-[769px]:tracking-[3px] uppercase">
              EVENTS
            </p>
          </div>

          <div className="hidden min-[769px]:block w-[1px] h-10 bg-border-light" />

          <div className="text-center">
            <h3 className="font-heading font-extrabold text-primary text-[1.8rem] min-[481px]:text-[2.2rem] min-[769px]:text-[2.8rem] mb-1 min-[769px]:mb-2 leading-tight">
              15+
            </h3>
            <p className="font-body font-bold text-secondary text-[0.58rem] min-[481px]:text-[0.65rem] tracking-[1px] min-[481px]:tracking-[2px] min-[769px]:tracking-[3px] uppercase">
              PROJECTS
            </p>
          </div>

          <div className="hidden min-[769px]:block w-[1px] h-10 bg-border-light" />

          <div className="text-center">
            <h3 className="font-heading font-extrabold text-primary text-[1.8rem] min-[481px]:text-[2.2rem] min-[769px]:text-[2.8rem] mb-1 min-[769px]:mb-2 leading-tight">
              &infin;
            </h3>
            <p className="font-body font-bold text-secondary text-[0.58rem] min-[481px]:text-[0.65rem] tracking-[1px] min-[481px]:tracking-[2px] min-[769px]:tracking-[3px] uppercase">
              POSSIBILITIES
            </p>
          </div>
        </div>
      </div>

      {/* Left Floating Robot Mascot */}
      <div className="hidden min-[993px]:block absolute z-[5] left-[-10px] min-[1101px]:left-[-20px] bottom-[-10px] min-[1101px]:bottom-[-40px] w-[250px] min-[1101px]:w-[320px] min-[1401px]:w-[400px] pointer-events-none select-none">
        <img
          src="/hero robot.png"
          alt="Robot Mascot"
          className="w-full h-auto object-contain"
        />
      </div>
    </main>
  );
}
