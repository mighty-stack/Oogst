import Button from '../components/Button.jsx'

const services = [
  {
    tag: '01. Website', title: 'Website development', engagement: 'project',
    problem: 'A slow, outdated or template site turns visitors away before they ever call.',
    what: 'Design and build a fast, mobile-first site around the jobs you actually want more of.',
    get: 'A site that loads in under two seconds, ranks locally, and makes calling or messaging easy.',
    timeline: 'Two to four weeks from kickoff to launch, depending on scope.',
  },
  {
    tag: '02. Local', title: 'Google Business Profile', engagement: 'project + ongoing',
    problem: 'Most trades profiles are unclaimed, incomplete, or untouched for years, leaving them invisible in the map pack.',
    what: 'Rebuild categories, services, photos and posts the way Google actually ranks them.',
    get: 'A complete profile that shows up for the searches your customers actually use.',
    timeline: 'One to two weeks to set up, with ranking movement visible over four to six weeks.',
  },
  {
    tag: '03. Email', title: 'Email marketing', engagement: 'monthly retainer',
    problem: 'Past customers and quoted leads go cold with no follow-up system in place.',
    what: 'Set up quote follow-ups and seasonal reminders that read as a real business, not spam.',
    get: 'A simple sequence that brings past customers back without you writing a word.',
    timeline: 'One week to set up, running from then on.',
  },
  {
    tag: '04. Words', title: 'Copywriting', engagement: 'project',
    problem: 'Service pages written for the business owner, not for how a customer actually searches.',
    what: 'Rewrite service and area pages around real search terms and real objections.',
    get: 'Pages that read plainly, rank for local search, and make the next step obvious.',
    timeline: 'Bundled into the build, or one week standalone.',
  },
  {
    tag: '05. Upkeep', title: 'Maintenance retainers', engagement: 'monthly retainer',
    problem: "Sites break, go out of date, or slow down quietly once nobody's watching.",
    what: 'Handle security updates, content changes and speed checks every month.',
    get: 'A site that keeps performing without you needing to think about it.',
    timeline: 'Starts the month after launch and continues on an ongoing basis.',
  },
  {
    tag: '06. Proof', title: 'Analytics reporting', engagement: 'included with retainer',
    problem: 'Most businesses have no idea whether their website or Google listing is actually working.',
    what: 'Track calls, clicks and ranking position, and summarise it in plain language.',
    get: 'A short monthly report, showing what changed and what we are doing next.',
    timeline: 'Delivered on the same date every month.',
  },
]

export default function Services() {
  return (
    <>
      <div className="max-w-site mx-auto px-6 md:px-8 pt-16">
        <div className="text-bronze font-semibold text-[14.5px]">Services</div>
        <h1 className="mt-3 text-[2.4rem] md:text-[3rem] max-w-[16ch]">Six services, run as one operation</h1>
        <p className="mt-4 text-[18px] text-ink-soft max-w-[56ch]">
          Your website and your Google presence are built and maintained together, so they never work against each other.
        </p>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-8 mt-12">
        {services.map((s) => (
          <div key={s.title} className="border-t last:border-b border-ink/10 py-12 grid md:grid-cols-[0.9fr_1.6fr] gap-8">
            <div>
              <span className="font-display text-bronze text-[15px] font-semibold">{s.tag}</span>
              <h2 className="mt-2.5 text-[1.7rem]">{s.title}</h2>
            </div>
            <div>
              <div className="grid sm:grid-cols-2 gap-7">
                <div><h4 className="text-[13.5px] font-semibold text-ink mb-2">The problem</h4><p className="text-[15px] text-ink-soft">{s.problem}</p></div>
                <div><h4 className="text-[13.5px] font-semibold text-ink mb-2">What we do</h4><p className="text-[15px] text-ink-soft">{s.what}</p></div>
                <div><h4 className="text-[13.5px] font-semibold text-ink mb-2">What you get</h4><p className="text-[15px] text-ink-soft">{s.get}</p></div>
                <div><h4 className="text-[13.5px] font-semibold text-ink mb-2">Typical timeline</h4><p className="text-[15px] text-ink-soft">{s.timeline}</p></div>
              </div>
              <div className="mt-5 text-[13.5px] text-ink-soft">
                <strong className="text-ink">Engagement:</strong> {s.engagement}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-sand border-y border-ink/10 text-center py-20 mt-4">
        <div className="max-w-site mx-auto px-6 md:px-8">
          <h2 className="text-[2rem]">Not sure where to start?</h2>
          <p className="mt-3.5 text-ink-soft">The free audit tells you exactly which of these six matters most for your business right now.</p>
          <Button to="/contact" variant="primary" className="mt-7">Book a free audit</Button>
        </div>
      </section>
    </>
  )
}
