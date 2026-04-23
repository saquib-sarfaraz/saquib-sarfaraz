const API_BASE_URL = 'https://xyxo-backend.onrender.com/api'

async function safeJson(response) {
  try {
    return await response.json()
  } catch {
    return null
  }
}

export async function sendGameEvent(event) {
  try {
    const response = await fetch(`${API_BASE_URL}/event`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event ?? {}),
    })

    const data = await safeJson(response)
    if (!response.ok) return { ok: false, status: response.status, data }
    return { ok: true, status: response.status, data }
  } catch (error) {
    return { ok: false, error }
  }
}

export async function fetchLeaderboard() {
  try {
    const response = await fetch(`${API_BASE_URL}/leaderboard`)

    const data = await safeJson(response)
    if (!response.ok) return { ok: false, status: response.status, data }
    return { ok: true, status: response.status, data }
  } catch (error) {
    return { ok: false, error }
  }
}

