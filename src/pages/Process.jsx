import Button from '../components/Button.jsx'

const steps = [
  {
    num: '01', title: 'Audit',
    copy: "We review your current site, your Google Business Profile, and your top three local competitors. You get a plain-language report ranking what's costing you enquiries.",
    takes: 'Three to five business days', from: 'your website URL and business name, nothing else', receive: 'a written audit with ranked findings',
  },
  {
    num: '02', title: 'Build',
    copy: 'We design and build the site and profile fixes around the jobs you actually want more of, instead of a generic template with your logo swapped in.',
    takes: 'Two to four weeks depending on scope', from: 'job photos, service list, one round of feedback', receive: 'a staging link to review before launch',
  },
  {
    num: '03', title: 'Launch',
    copy: 'We publish the site, connect analytics, and confirm everything works cleanly on the phones your customers actually use.',
    takes: 'One to two days', from: 'domain and hosting access, if you already have them', receive: 'the live site and a short walkthrough call',
  },
  {
    num: '04', title: 'Report',
    copy: 'Every month, a short report on calls, clicks and ranking movement, showing what changed and what we are doing next.',
    takes: 'delivered on the same date each month', from: 'nothing ongoing', receive: 'a one-page report in plain language, with no jargon',
  },
]

const faqs = [
  { q: "What if I don't have good photos of my work?", a: 'We can work with what you have and tell you exactly what to shoot on your phone to fill the gaps, with no professional photographer needed.' },
  { q: 'Do I need to sign a long contract?', a: 'The build is a one-off project. Maintenance and reporting are month-to-month, and you can cancel any time with notice.' },
  { q: 'What if the audit finds nothing wrong?', a: "Then we tell you that. The audit is not a sales pitch. If your presence is solid, we will say so and suggest only what is actually worth doing." },
]

export default function Process() {
  return (
    <>
      <div className="max-w-site mx-auto px-6 md:px-8 pt-16">
        <div className="text-bronze font-semibold text-[14.5px]">Process</div>
        <h1 className="mt-3 text-[2.4rem] md:text-[3rem] max-w-[18ch]">The same four steps, every time</h1>
        <p className="mt-4 text-[18px] text-ink-soft max-w-[56ch]">
          No surprises about what happens after you say yes. Here's exactly what each stage involves, how long it takes, and what we need from you.
        </p>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-8 mt-4">
        {steps.map((s) => (
          <div key={s.num} className="border-t last:border-b border-ink/10 py-9 grid grid-cols-[56px_1fr] md:grid-cols-[96px_1fr] gap-5 md:gap-8">
            <div className="font-display text-2xl md:text-[2.2rem] text-bronze font-semibold">{s.num}</div>
            <div>
              <h2 className="text-xl md:text-[1.35rem]">{s.title}</h2>
              <p className="mt-2.5 text-ink-soft max-w-[62ch]">{s.copy}</p>
              <div className="mt-3.5 flex flex-wrap gap-6 text-[13.5px] text-ink-soft">
                <span><strong className="text-ink">Takes:</strong> {s.takes}</span>
                <span><strong className="text-ink">From you:</strong> {s.from}</span>
                <span><strong className="text-ink">You receive:</strong> {s.receive}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-ink text-cream py-20 mt-4">
        <div className="max-w-site mx-auto px-6 md:px-8">
          <h2 className="text-cream text-[2rem]">After launch</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-9">
            <div><h4 className="font-display text-bronze-soft text-lg font-semibold mb-2">Maintenance</h4><p className="text-[15px] text-cream/80">If you're on a retainer, updates and checks happen monthly without you needing to ask.</p></div>
            <div><h4 className="font-display text-bronze-soft text-lg font-semibold mb-2">Communication</h4><p className="text-[15px] text-cream/80">One point of contact throughout. Questions get answered within one business day.</p></div>
            <div><h4 className="font-display text-bronze-soft text-lg font-semibold mb-2">Changes</h4><p className="text-[15px] text-cream/80">Need something updated, like new photos, a new service, or a price change? It is a message away, not a ticket.</p></div>
          </div>
        </div>
      </section>

      <div className="max-w-site mx-auto px-6 md:px-8 py-20">
        <h2 className="text-[2rem]">Questions about working together</h2>
        <div className="mt-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-t last:border-b border-ink/10 py-6">
              <h3 className="text-lg">{f.q}</h3>
              <p className="mt-2 text-ink-soft max-w-[62ch]">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-sand border-y border-ink/10 text-center py-20">
        <div className="max-w-site mx-auto px-6 md:px-8">
          <h2 className="text-[2rem]">Ready to see where you stand?</h2>
          <p className="mt-3.5 text-ink-soft">Start with the free audit, with no obligation attached.</p>
          <Button to="/contact" variant="primary" className="mt-7">Book a free audit</Button>
        </div>
      </section>
    </>
  )
}
