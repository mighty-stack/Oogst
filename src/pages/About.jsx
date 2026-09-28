import Button from '../components/Button.jsx'

export default function About() {
  return (
    <>
      <div className="max-w-site mx-auto px-6 md:px-8 pt-16 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-center">
        <div>
          <div className="text-bronze font-semibold text-[14.5px]">About</div>
          <h1 className="mt-3 text-[2.1rem] md:text-[2.9rem]">Built by one person, run like a real operation</h1>
          <p className="mt-4 text-ink-soft text-[18px]">Oogst is early. Here's exactly who's behind it and how we work.</p>
        </div>
        <div className="mx-auto w-full max-w-[320px] md:max-w-none">
          <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-sand p-3 shadow-[0_18px_48px_rgba(31,58,46,0.08)]">
            <img
              src="/My%20headshot.webp"
              alt="Founder portrait"
              className="aspect-[4/5] w-full rounded-[22px] object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-8 py-16 max-w-[68ch]">
        <h2 className="text-2xl">Why Oogst</h2>
        <p className="mt-4 text-ink-soft text-[17px]">
          Oogst is Dutch for harvest, meaning what a business becomes after the work is done right. Not the promise, but the result: more calls, better rankings, and a site that keeps performing after launch.
        </p>
        <h2 className="mt-14 text-2xl">How we work</h2>
        <p className="mt-4 text-ink-soft text-[17px]">
          Every project starts with a measurement, not a guess. We look at your current speed score, ranking, and profile completeness, then fix what the numbers say is broken and report back monthly on what moved.
        </p>
        <p className="mt-4 text-ink-soft text-[17px]">
          We are currently taking on a small number of founding clients directly, with full attention on each build. As that grows, this page will say so plainly, so you will always know who is actually doing the work.
        </p>
      </div>

      <section className="bg-sand border-y border-ink/10 py-16">
        <div className="max-w-site mx-auto px-6 md:px-8">
          <h2 className="text-[1.8rem]">What we hold to</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-9">
            <div><h4 className="font-display text-lg font-semibold mb-2">Measured, not promised</h4><p className="text-[15px] text-ink-soft">Every claim we make about your business comes from a number we can show you.</p></div>
            <div><h4 className="font-display text-lg font-semibold mb-2">Plain communication</h4><p className="text-[15px] text-ink-soft">Reports and updates written the way we'd explain them out loud, no jargon.</p></div>
            <div><h4 className="font-display text-lg font-semibold mb-2">Honest about scope</h4><p className="text-[15px] text-ink-soft">We tell you what we haven't done yet and what we're actively building.</p></div>
          </div>
        </div>
      </section>

      <div className="max-w-site mx-auto px-6 md:px-8 py-12 border-b border-ink/10">
        <p className="max-w-[60ch] text-[16px] text-ink-soft">
          Oogst is part of Netzer, a small group of independently run businesses built on one idea: steady growth from the ground up. <a href="#" className="text-bronze font-semibold">Read more about Netzer</a>.
        </p>
      </div>

      <section className="text-center py-20">
        <div className="max-w-site mx-auto px-6 md:px-8">
          <h2 className="text-[2rem]">Want to work together?</h2>
          <p className="mt-3.5 text-ink-soft">Start with a free audit, with no obligation attached.</p>
          <Button to="/contact" variant="primary" className="mt-7">Book a free audit</Button>
        </div>
      </section>
    </>
  )
}
