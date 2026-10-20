import { type ReactNode, useEffect } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { Mail } from 'lucide-react';

function SiGithub({ className }: { className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function SiReplit({ className }: { className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z" />
    </svg>
  );
}

const projects = [
  {
    id: 'newtoncalc',
    title: 'Newton Calc',
    description:
      'An interactive AP Calculus AB and BC study guide with lessons, graphing tools, quizzes, and exam preparation.',
    image: 'newtoncalc-home.png',
    url: 'https://newtoncalc.vercel.app',
  },
  {
    id: 'grasshopper-landscaping',
    title: 'Grasshopper Landscaping',
    description:
      'A landscaping services site serving Silver Spring and Montgomery County, featuring garden design, stonework, lawn care, and drainage solutions.',
    image: 'grasshopper-landscaping-home.png',
    url: 'https://grasshopperlandscaping.vercel.app',
  },
  {
    id: 'geodle',
    title: 'Geodle',
    description:
      'A daily geography guessing game where players identify a mystery country using distance and direction clues.',
    image: 'geodled-home.png',
    url: 'https://geodled.lovable.app',
  },
];

function Home() {
  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';

  useEffect(() => {
    const planetSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='none'><defs><radialGradient id='p' cx='35%' cy='30%' r='70%'><stop offset='0%' stop-color='%23e9d5ff'/><stop offset='25%' stop-color='%23c084fc'/><stop offset='65%' stop-color='%237e22ce'/><stop offset='100%' stop-color='%233b0764'/></radialGradient><linearGradient id='r' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23f3e8ff'/><stop offset='50%' stop-color='%23a855f7'/><stop offset='100%' stop-color='%236b21a8'/></linearGradient></defs><path d='M 5 32 A 27 7.5 0 0 1 59 32' stroke='url(%23r)' stroke-width='3.5' stroke-linecap='round' transform='rotate(-22 32 32)' opacity='0.6'/><circle cx='32' cy='32' r='18' fill='url(%23p)'/><circle cx='26' cy='24' r='3.2' fill='%236b21a8' opacity='0.35'/><circle cx='39' cy='36' r='3.6' fill='%23581c87' opacity='0.4'/><circle cx='24' cy='38' r='2.2' fill='%23581c87' opacity='0.3'/><ellipse cx='26' cy='22' rx='5' ry='2.6' fill='%23ffffff' opacity='0.3' transform='rotate(-25 26 22)'/><path d='M 59 32 A 27 7.5 0 0 1 5 32' stroke='url(%23r)' stroke-width='3.5' stroke-linecap='round' transform='rotate(-22 32 32)'/></svg>`;
    const dataUri = `data:image/svg+xml,${encodeURIComponent(planetSvg)}`;
    
    const existingIcons = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
    existingIcons.forEach((el) => {
      el.href = dataUri;
    });
  }, []);

  return (
    <div className="universe min-h-[100dvh] text-[#e8eef8]">
      <main id="top">
        {/* HERO SECTION */}
        <section className="relative mx-auto flex min-h-[min(94svh,850px)] max-w-[1440px] flex-col justify-center overflow-hidden px-5 py-24 md:px-10 md:py-32">
          <div className="hero-planet" aria-hidden="true" />
          <div className="relative z-[1] max-w-[1040px] text-[20px]">
            <h1
              className="rise-in delay-1 max-w-[1050px] font-editorial text-[clamp(4rem,12.5vw,11.5rem)] leading-[.83] tracking-[-.045em] text-[#f1f3f8]"
              data-testid="text-hero-title"
            >
              Andrew Solutions
            </h1>
            <div className="rise-in delay-2 mt-9 flex max-w-[800px] flex-col gap-7 md:ml-[20%] md:mt-12 md:flex-row md:items-end md:justify-between">
              <p className="max-w-[510px] text-[17px] leading-[1.75] text-[#b9c3d2] md:text-[20px]">
                Hi, Im Andrew Mahoney, welcome to my space.
              </p>
              <a
                href="#work"
                className="focus-ring group inline-flex w-fit items-center gap-4 border-b border-[#a5f2df]/50 pb-2 text-sm text-[#e7f5f2] transition-colors hover:border-[#a5f2df] hover:text-[#a5f2df]"
                data-testid="link-explore-work"
              >
                <span>Explore the work</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-y-1">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="relative">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-[.72fr_1.28fr] md:gap-20 md:px-10 md:py-28">
            <div className="rise-in flex flex-col gap-7">
              <h2 className="font-editorial text-[clamp(3.7rem,7vw,6.3rem)] leading-[.9] tracking-[-.04em] text-[#eff2f7]">
                About me
              </h2>
              <img
                src={`${baseUrl}andrew-portrait.jpg`}
                alt="Portrait of Andrew Mahoney"
                loading="eager"
                decoding="sync"
                data-testid="img-andrew-portrait"
                className="aspect-square w-full max-w-[360px] rounded-full object-cover shadow-xl"
              />
            </div>
            <div className="rise-in delay-1 flex flex-col justify-end md:pb-2">
              <p className="w-full max-w-[740px] text-[18px] leading-[1.8] text-[#b9c3d2] md:text-[22px]">
                {[
                  'Hello, my name is Andrew Mahoney and I am a high school student from the DMV.',
                  'I am devoted to providing free and open web apps designed to help others.',
                  'I have created class study websites, SAT/ACT practice hubs, and web games.',
                  'I have always loved computers and coding but my interest in vibecoding started as I entered high school.',
                  'I researched how to use AI to code and I have extensive experience in the topic.',
                  'I have created many applications for peers and have recently started to publish some of my projects; check them out below.',
                  'Outside of the computer, I play on my schools lacrosse team and serve as captain of the soccer team.',
                ].join(' ')}
              </p>
            </div>
          </div>
        </section>

        {/* MY PROJECTS SECTION */}
        <section
          id="work"
          className="relative mx-auto max-w-[1440px] px-5 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
        >
          <div className="rise-in mb-16 md:mb-20">
            <h2 className="font-editorial text-[clamp(3.8rem,8.5vw,7.2rem)] leading-[.88] tracking-[-.045em] text-[#eff2f7]">
              My projects<span className="text-[#a5f2df]">.</span>
            </h2>
          </div>
          <div className="grid gap-16 pt-8 md:grid-cols-2 md:gap-8 md:pt-12">
            {projects.map((project, index) => (
              <article
                key={project.id}
                data-testid={`card-project-${project.id}`}
                className={`rise-in delay-${index + 1} min-w-0 ${index === 1 ? 'md:mt-32' : ''}`}
              >
                <div
                  className={`project-orb ${
                    index % 3 === 0
                      ? 'planet-violet'
                      : index % 3 === 1
                      ? 'planet-blue'
                      : 'planet-rose'
                  } mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center p-[9%]`}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} website`}
                    data-testid={`link-project-image-${project.id}`}
                    className="project-orb-image focus-ring block w-full rounded-xl"
                  >
                    <img
                      src={`${baseUrl}${project.image}`}
                      alt={`${project.title} homepage`}
                      loading="eager"
                      decoding="sync"
                      className="aspect-video w-full rounded-xl object-cover object-top"
                    />
                  </a>
                </div>
                <div className="mx-auto mt-10 flex max-w-[580px] items-start justify-between gap-5 px-2 md:mt-12">
                  <div className="max-w-[450px]">
                    <h3 className="font-editorial text-[37px] leading-none text-[#eff2f7] md:text-[48px]">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-project-${project.id}`}
                        className="focus-ring rounded-sm transition-colors hover:text-[#a5f2df]"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.7] text-[#aeb9ca] md:text-[18px]">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="focus-ring mt-7 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#a5f2df] transition-colors hover:border-[#a5f2df] hover:bg-[#a5f2df]/10"
                    data-testid={`link-open-${project.id}`}
                  >
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0a0d19]/70">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <a
            href="#top"
            className="focus-ring w-fit font-editorial text-2xl text-[#e8eef8] transition-colors hover:text-[#a5f2df]"
            data-testid="link-back-to-top"
          >
            Andrew Solutions
          </a>
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/abmahoney08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                data-testid="link-github-profile"
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#e7f5f2] transition-colors hover:border-[#a5f2df] hover:text-[#a5f2df]"
              >
                <SiGithub aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href="https://replit.com/@abmahoney08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Replit profile"
                data-testid="link-replit-profile"
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#e7f5f2] transition-colors hover:border-[#a5f2df] hover:text-[#a5f2df]"
              >
                <SiReplit aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
            <a
              href="mailto:abmahoney08@gmail.com"
              data-testid="link-contact-email"
              className="focus-ring inline-flex w-fit items-center gap-2 text-sm text-[#b9c3d2] transition-colors hover:text-[#a5f2df]"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              <span>abmahoney08@gmail.com</span>
            </a>
            <a
              href="#top"
              className="focus-ring w-fit text-sm transition-colors hover:text-[#a5f2df]"
              data-testid="link-return-top"
            >
              Back to the beginning ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/index.html" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
  const base = baseUrl.replace(/\/$/, '');
  return (
    <WouterRouter base={base}>
      <Router />
    </WouterRouter>
  );
}

export default App;
