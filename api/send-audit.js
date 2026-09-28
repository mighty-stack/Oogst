import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })

  const { name, business, url, location, problem } = req.body || {}

  if (!process.env.RESEND_API_KEY || !process.env.NOTIFY_EMAIL) {
    return res.status(500).json({
      error: 'Email service is not configured for this deployment. Add RESEND_API_KEY and NOTIFY_EMAIL in the live environment.',
    })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
      from: 'Oogst Audit <onboarding@resend.dev>',
      to: [process.env.NOTIFY_EMAIL],
      subject: `New audit request: ${business || 'Unknown business'}`,
      html: `
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Business:</strong> ${business || 'Not provided'}</p>
        <p><strong>Website:</strong> ${url || 'None'}</p>
        <p><strong>Location:</strong> ${location || 'Not provided'}</p>
        <p><strong>Problem:</strong> ${problem || 'Not provided'}</p>
      `,
    })

    if (error) {
      return res.status(500).json({ error: error.message || 'Failed to send audit email.' })
    }

    return res.status(200).json({ success: true, id: data?.id })
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Unexpected error while sending audit email.' })
  }
}
