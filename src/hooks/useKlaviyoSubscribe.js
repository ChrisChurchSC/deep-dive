// Klaviyo newsletter subscribe hook
// Fill in your credentials when ready:
const KLAVIYO_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'   // pk_xxxxxxxxxxxxxxxx
const KLAVIYO_LIST_ID    = 'YOUR_LIST_ID'       // e.g. AbCdEf

export async function subscribeToKlaviyo(email) {
  const res = await fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_PUBLIC_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'revision': '2023-12-15',
    },
    body: JSON.stringify({
      data: {
        type: 'subscription',
        attributes: {
          list_id: KLAVIYO_LIST_ID,
          email,
        },
      },
    }),
  })

  // Klaviyo returns 202 on success
  if (!res.ok && res.status !== 202) {
    throw new Error(`Klaviyo error: ${res.status}`)
  }
}
