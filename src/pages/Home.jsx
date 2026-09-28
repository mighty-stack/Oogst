import Button from '../components/Button.jsx'

const services = [
  { idx: 'Website', title: 'Website development', copy: 'Fast, mobile-first sites built to load in under two seconds and turn visitors into calls.' },
  { idx: 'Local', title: 'Google Business Profile', copy: 'Categories, photos, services and posts set up the way Google actually ranks them.' },
  { idx: 'Email', title: 'Email marketing', copy: 'Quote follow-ups and seasonal reminders that bring past customers back without spam.' },
  { idx: 'Words', title: 'Copywriting', copy: 'Service pages written the way customers actually search, not the way agencies write.' },
  { idx: 'Upkeep', title: 'Maintenance retainers', copy: 'Security, speed and content updates handled monthly, so the site keeps performing.' },
  { idx: 'Proof', title: 'Analytics reporting', copy: 'A plain monthly report on calls, clicks and rankings, including what changed and why.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-site mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-12 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
        <div>
          <h1 className="text-[2.6rem] md:text-[4rem] max-w-[11ch]">
            Websites that rank. Leads that convert.
          </h1>
          <p className="mt-6 text-[19px] text-ink-soft max-w-[46ch] leading-relaxed">
            We build fast websites and optimise Google presence for trades businesses, then report on exactly what changed.
          </p>
          <div className="mt-9 flex gap-4 flex-wrap">
            <Button to="/contact" variant="primary">Book a free audit</Button>
            <Button href="#work" variant="outline">See the work</Button>
          </div>
        </div>
        <div className="order-first md:order-last mx-auto w-full max-w-[360px]">
          <img
            src="/Oogst_logo.png"
            alt="Oogst logo"
            className="mx-auto h-[260px] w-[260px] object-contain md:h-[320px] md:w-[320px]"
          />
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="border-y border-ink/10 bg-sand">
        <div className="max-w-site mx-auto px-6 md:px-8 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display font-bold text-4xl text-bronze">98</div>
            <div className="mt-1.5 text-[14.5px] text-ink-soft max-w-[26ch]">Mobile performance score on our own site, built with the same stack we ship to clients</div>
          </div>
          <div>
            <div className="font-display font-bold text-4xl text-bronze">6</div>
            <div className="mt-1.5 text-[14.5px] text-ink-soft max-w-[26ch]">Services, one team: website, GBP, email, copy, maintenance, and reporting.</div>
          </div>
          <div>
            <div className="font-display font-bold text-4xl text-bronze">3</div>
            <div className="mt-1.5 text-[14.5px] text-ink-soft max-w-[26ch]">Founding-client spots open this quarter, each documented start to finish</div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="max-w-site mx-auto px-6 md:px-8 py-20">
        <div className="max-w-[56ch] mb-10">
          <h2 className="text-[2.2rem]">What we do</h2>
          <p className="mt-3.5 text-ink-soft text-[17px]">Six services, run as one operation, so your website and your Google presence never work against each other.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {services.map((s) => (
            <div key={s.title} className="bg-cream p-8 min-h-[190px] flex flex-col justify-between">
              <span className="font-display text-bronze text-sm font-semibold">{s.idx}</span>
              <div>
                <h3 className="text-xl mt-3">{s.title}</h3>
                <p className="mt-2.5 text-[15px] text-ink-soft">{s.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="max-w-site mx-auto px-6 md:px-8 py-20">
        <div className="max-w-[56ch] mb-10">
          <h2 className="text-[2.2rem]">Selected work</h2>
          <p className="mt-3.5 text-ink-soft text-[17px]">Real builds and their measured results. Case studies publish here as client work completes.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-7">
          <div className="bg-sand border border-ink/10 p-9 flex flex-col gap-4">
            <span className="inline-block self-start text-[12.5px] font-semibold text-ink bg-bronze/15 px-3 py-1.5 rounded-sm">Sample build</span>
            <h3 className="text-2xl">Plumbing services site rebuild</h3>
            <p className="text-[15px] text-ink-soft">Full rebuild from a five-year-old template: service pages by job type, click-to-call above the fold, suburb-level coverage pages.</p>
            <div className="mt-auto pt-4 border-t border-ink/10 text-[15px] text-ink-soft">
              <strong className="font-display text-bronze">98/100</strong> mobile performance score, measured on launch
            </div>
          </div>
          <div className="bg-sand border border-ink/10 p-9 flex flex-col gap-4">
            <span className="inline-block self-start text-[12.5px] font-semibold text-ink bg-bronze/15 px-3 py-1.5 rounded-sm">Sample build</span>
            <h3 className="text-2xl">Electrician, GBP and landing page</h3>
            <p className="text-[15px] text-ink-soft">Profile rebuilt with full service list, 40+ real job photos, and a matching landing page for emergency call-outs.</p>
            <div className="mt-auto pt-4 border-t border-ink/10 text-[15px] text-ink-soft">
              <strong className="font-display text-bronze">Now accepting</strong> founding clients to document this result live
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-ink text-cream py-20">
        <div className="max-w-site mx-auto px-6 md:px-8">
          <h2 className="text-cream text-[2.2rem] mb-10">Who this is for</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-display text-bronze-soft text-lg font-semibold mb-4">Good fit</h4>
              <ul>
                {[
                  'You do real, bookable work, such as plumbing, electrical, roofing, HVAC, and building.',
                  "Your Google listing exists but hasn't been touched in over a year",
                  'You want to track exactly what a website change does to your calls',
                  "You're ready to hand over real job photos and basic business details",
                ].map((t) => (
                  <li key={t} className="py-3.5 border-t border-cream/15 last:border-b text-[15.5px] text-cream/90">{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-bronze-soft text-lg font-semibold mb-4">Not a fit, yet</h4>
              <ul>
                {[
                  'You want a site live this week with no time for a call',
                  "You're looking for the cheapest possible build, not a measured result",
                  "You don't want any reporting on what's working",
                  'Your business operates outside the countries we currently serve',
                ].map((t) => (
                  <li key={t} className="py-3.5 border-t border-cream/15 last:border-b text-[15.5px] text-cream/90">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-sand border-y border-ink/10 text-center py-20">
        <div className="max-w-site mx-auto px-6 md:px-8">
          <h2 className="text-[2rem]">Find out what your site is costing you</h2>
          <p className="mt-3.5 text-ink-soft">A free audit of your website and Google Business Profile, with no obligation attached.</p>
          <Button to="/contact" variant="primary" className="mt-7">Book a free audit</Button>
        </div>
      </section>
    </>
  )
}
