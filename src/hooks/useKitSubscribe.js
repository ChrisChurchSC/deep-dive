// Kit (formerly ConvertKit) newsletter subscribe.
// Form ID matches the data-uid from the Kit embed script.
const KIT_FORM_ID = '8a1efc12cb'

export async function subscribeToKit(email) {
  if (!KIT_FORM_ID) {
    throw new Error('Kit form ID not configured')
  }

  const res = await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email_address: email }),
  })

  if (!res.ok) {
    throw new Error(`Kit subscribe failed: ${res.status}`)
  }

  return res.json().catch(() => ({}))
}
