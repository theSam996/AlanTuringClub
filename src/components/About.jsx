import React from 'react';

const PILLARS = [
  {
    number: '01',
    badge: 'FOUNDATION',
    title: 'RESEARCH & CODE',
    desc: 'From low-level systems and distributed architectures to deep neural networks, we dive deep into computer science fundamentals to engineer resilient software.',
    tags: ['#ALGORITHMS', '#SYSTEMS'],
  },
  {
    number: '02',
    badge: 'COMMUNITY',
    title: 'COLLABORATIVE FORCE',
    desc: 'A vibrant ecosystem where first-year explorers collaborate directly with senior leads. Peer-to-peer sprints and code reviews transform curiosity into production capability.',
    tags: ['#MENTORSHIP', '#OPEN_SOURCE'],
  },
  {
    number: '03',
    badge: 'IMPACT',
    title: 'HIGH-STAKES BUILDS',
    desc: 'We ideate, build, and ship. Competing across premier national hackathons and running open hardware/software labs, ATC teams build technology that creates measurable impact.',
    tags: ['#HACKATHONS', '#PRODUCT_LAB'],
  },
];

const BANNER_STATS = [
  { value: '50+', label: 'HACKATHON WINS' },
  { value: '100%', label: 'STUDENT-DRIVEN' },
  { value: '30+', label: 'OPEN REPOSITORIES' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 border-t border-black/8 scroll-mt-20 py-[70px] min-[901px]:py-[100px] pb-[60px] min-[901px]:pb-[80px]"
    >
      {/* About Header */}
      <div className="max-w-[900px] mb-[50px]">
          <div className="font-heading text-[0.8rem] font-bold tracking-[5px] text-secondary mb-4 uppercase">
            // 01. WHO WE ARE
          </div>
          <h2 className="font-wide uppercase text-primary tracking-[-1px] leading-[1.15] mb-6 text-[2rem] min-[601px]:text-[2.6rem] min-[1101px]:text-[3.2rem]">
            DISRUPTING THE NORM.
            <br />
            <span className="text-transparent text-stroke-black transition-colors duration-300">
              ENGINEERING REALITY.
            </span>
          </h2>
          <p className="font-body text-secondary text-[1rem] min-[601px]:text-[1.15rem] leading-[1.7] max-w-[820px]">
            Named in tribute to{' '}
            <strong className="text-primary font-bold">Alan Turing</strong>—the
            pioneer of modern computation, cryptography, and artificial
            intelligence—the{' '}
            <strong className="text-primary font-bold">
              Alan Turing Club (ATC)
            </strong>{' '}
            is a collective of visionary developers, designers, and innovators
            passionate about pushing computational frontiers.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 min-[901px]:grid-cols-3 gap-5 min-[901px]:gap-[30px] mb-[60px]">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white border border-[#111111] rounded-card p-6 min-[481px]:p-[36px_30px] flex flex-col shadow-brutalist hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutalist-lg transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] relative"
            >
              <div className="flex justify-between items-center mb-[22px]">
                <span className="font-wide text-[1.8rem] font-extrabold text-primary leading-none">
                  {pillar.number}
                </span>
                <span className="font-body text-[0.65rem] font-extrabold tracking-[2px] px-2 py-1 bg-badge-bg border border-primary rounded-badge text-primary uppercase">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="font-heading text-[1.3rem] font-extrabold tracking-[1px] text-primary mb-3.5 uppercase">
                {pillar.title}
              </h3>
              <p className="font-body text-card-text text-[0.92rem] leading-[1.65] mb-6 flex-1">
                {pillar.desc}
              </p>
              <div className="flex gap-2.5 flex-wrap pt-4 border-t border-dashed border-border-light">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-tag-muted text-[0.72rem] font-bold tracking-[0.5px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote & Highlights Banner */}
        <div className="bg-black text-white border border-black rounded-card p-5 min-[601px]:p-9 min-[1101px]:p-12 flex flex-col min-[1101px]:flex-row min-[1101px]:items-center justify-between gap-8 min-[1101px]:gap-[50px] shadow-banner relative overflow-hidden">
          {/* Subtle Radial Glow */}
          <div
            className="absolute -right-10 -bottom-10 w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none select-none"
            aria-hidden="true"
          />

          {/* Left Quote Block */}
          <div className="min-[1101px]:flex-[1.2] relative w-full">
            <div
              className="font-caveat text-[5rem] leading-none text-white opacity-20 absolute -top-10 -left-2.5 pointer-events-none select-none"
              aria-hidden="true"
            >
              “
            </div>
            <blockquote className="font-heading italic font-medium text-[#f5f5f5] text-[1.15rem] min-[601px]:text-[1.35rem] leading-[1.5] mb-3.5 relative z-[1]">
              We can only see a short distance ahead, but we can see plenty there
              that needs to be done.
            </blockquote>
            <cite className="font-heading text-meta-muted text-[0.75rem] font-bold tracking-[3px] uppercase block not-italic">
              // ALAN TURING, 1950
            </cite>
          </div>

          {/* Right Stat Boxes */}
          <div className="min-[1101px]:flex-1 w-full grid grid-cols-1 min-[601px]:grid-cols-3 gap-3 min-[601px]:gap-4 relative z-[1]">
            {BANNER_STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center py-[18px] px-3 bg-white/5 border border-white/[0.12] rounded-[4px] hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="font-heading text-white text-[2.1rem] font-extrabold mb-1 leading-none block">
                  {stat.value}
                </span>
                <span className="font-body text-meta-subtle text-[0.58rem] font-bold tracking-[1.5px] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
