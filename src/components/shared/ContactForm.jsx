import { useState } from 'react'
import styles from './ContactForm.module.css'
import FormField from './FormField'
import Button from '../primitives/Button'

// Replace with your Formspree form ID — https://formspree.io/forms
const FORMSPREE_ID = 'YOUR_FORM_ID'

const budgetOptions = [
  { value: '25-50k',   label: '$25k – $50k' },
  { value: '50-100k',  label: '$50k – $100k' },
  { value: '100-250k', label: '$100k – $250k' },
  { value: '250k+',    label: '$250k+' },
]

const serviceOptions = [
  { value: 'brand-people',        label: 'Brand & People' },
  { value: 'customer-community',  label: 'Customer & Community' },
  { value: 'industry-platform',   label: 'Industry & Platform' },
  { value: 'not-sure',            label: 'Not sure yet' },
]

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

function getUTMs() {
  const utms = {}
  UTM_KEYS.forEach(k => {
    const val = sessionStorage.getItem(k)
    if (val) utms[k] = val
  })
  return utms
}

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: '', company: '', email: '', service: '', budget: '', message: '',
  })
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle') // idle | submitting | success | error

  const set = key => e => setFields(f => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!fields.name.trim())    e.name    = 'Your name is required.'
    if (!fields.email.trim())   e.email   = 'Email address is required.'
    if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = 'Enter a valid email address.'
    if (!fields.message.trim()) e.message = 'Tell us a bit about your project.'
    return e
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('submitting')

    const payload = {
      ...fields,
      ...getUTMs(),
      _subject: `New inquiry from ${fields.name}${fields.company ? ` — ${fields.company}` : ''}`,
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Message sent.</h3>
        <p className={styles.successBody}>
          Thanks, {fields.name.split(' ')[0]}. We'll be in touch within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <FormField label="Your name" name="name" placeholder="Jane Smith"
          value={fields.name} onChange={set('name')} error={errors.name} required />
        <FormField label="Company" name="company" placeholder="Acme Corp"
          value={fields.company} onChange={set('company')} />
      </div>

      <FormField label="Email" name="email" type="email" placeholder="jane@acme.com"
        value={fields.email} onChange={set('email')} error={errors.email} required />

      <div className={styles.row}>
        <FormField label="Service interest" name="service" type="select"
          placeholder="Choose one" options={serviceOptions}
          value={fields.service} onChange={set('service')} />
        <FormField label="Budget range" name="budget" type="select"
          placeholder="Choose one" options={budgetOptions}
          value={fields.budget} onChange={set('budget')} />
      </div>

      <FormField label="Tell us about your project" name="message" type="textarea"
        placeholder="What are you trying to say? Who are you trying to reach? What's at stake?"
        value={fields.message} onChange={set('message')} error={errors.message} required
        hint="The more context you give us, the better we can tell you if there's a film in it." />

      {status === 'error' && (
        <p className={styles.errorMsg}>
          Something went wrong — please try again or email us directly at{' '}
          <a href="mailto:hello@deepdivefilms.com">hello@deepdivefilms.com</a>.
        </p>
      )}

      <div className={styles.footer}>
        <Button type="submit" variant="primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        <p className={styles.note}>We respond within 48 hours.</p>
      </div>
    </form>
  )
}
