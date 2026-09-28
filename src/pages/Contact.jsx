import { useState } from 'react'

const initialState = { name: '', business: '', url: '', location: '', problem: '' }

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/send-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Try again.')
      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  const inputClass =
    'w-full px-3 py-2.5 border border-ink/10 bg-cream text-[15px] rounded-sm focus:outline focus:outline-2 focus:outline-bronze focus:outline-offset-1'

  return (
    <>
      <div className="max-w-site mx-auto px-6 md:px-8 pt-16">
        <div className="text-bronze font-semibold text-[14.5px]">Contact</div>
        <h1 className="mt-3 text-[2.4rem] md:text-[3rem] max-w-[16ch]">Find out what your site is costing you</h1>
        <p className="mt-4 text-[18px] text-ink-soft max-w-[56ch]">
          A free audit of your website and Google Business Profile, with specific fixes ranked by impact and no obligation attached.
        </p>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-8 pb-20 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 mt-4">
        <div>
          <h2 className="text-[1.4rem]">What's included</h2>
          <ul className="mt-5 text-[15px] text-ink-soft space-y-2.5">
            {[
              'Site speed and mobile experience, tested and scored',
              'Google Business Profile completeness and photo coverage',
              'Local ranking position for your top three search terms',
              'Delivered as a short written report within five business days',
            ].map((t) => (
              <li key={t} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-bronze">{t}</li>
            ))}
          </ul>
          <div className="mt-9 pt-7 border-t border-ink/10">
            <h4 className="text-sm font-semibold text-ink mb-2">Prefer to reach out directly?</h4>
            <p className="text-[15.5px] text-ink-soft">
              Email <a href="mailto:hello@oogst.com" className="text-bronze font-semibold">hello@oogst.com</a> or find us on{' '}
              <a href="#" className="text-bronze font-semibold">X</a>. We reply within one business day.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-sand border border-ink/10 p-9">
          <label className="block text-[13.5px] font-semibold text-ink mb-1.5" htmlFor="name">Name</label>
          <input className={inputClass} id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />

          <label className="block text-[13.5px] font-semibold text-ink mb-1.5 mt-4" htmlFor="business">Business name</label>
          <input className={inputClass} id="business" name="business" value={form.business} onChange={handleChange} placeholder="Business name" required />

          <label className="block text-[13.5px] font-semibold text-ink mb-1.5 mt-4" htmlFor="url">Website (if you have one)</label>
          <input className={inputClass} id="url" name="url" value={form.url} onChange={handleChange} placeholder="yourbusiness.com" />

          <label className="block text-[13.5px] font-semibold text-ink mb-1.5 mt-4" htmlFor="location">City / area you serve</label>
          <input className={inputClass} id="location" name="location" value={form.location} onChange={handleChange} placeholder="e.g. Cork, Ireland" required />

          <label className="block text-[13.5px] font-semibold text-ink mb-1.5 mt-4" htmlFor="problem">What's your biggest problem right now?</label>
          <textarea className={`${inputClass} min-h-[90px] resize-y`} id="problem" name="problem" value={form.problem} onChange={handleChange} placeholder="A sentence or two is fine" />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full mt-6 bg-ink text-cream font-semibold py-3 rounded-sm hover:bg-ink-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending…' : 'Send my free audit'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-[14px] text-ink-soft text-center">Got it, and we will send your audit within five business days.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-[14px] text-red-700 text-center">{errorMsg}</p>
          )}

          <p className="mt-3 text-[13px] text-ink-soft text-center">No obligation. We'll never share your details.</p>
        </form>
      </div>
    </>
  )
}
