import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, business, url, location, problem } = req.body

  const { data, error } = await resend.emails.send({
    from: 'Oogst Audit <onboarding@resend.dev>',
    to: [process.env.NOTIFY_EMAIL], // must be your own Resend account email until a domain is verified
    subject: `New audit request: ${business || 'Unknown business'}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Business:</strong> ${business}</p>
      <p><strong>Website:</strong> ${url || 'None'}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Problem:</strong> ${problem}</p>
    `,
  })

  if (error) return res.status(500).json({ error: error.message })
  return res.status(200).json({ success: true, id: data?.id })
}
