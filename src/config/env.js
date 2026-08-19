const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  apiTimeoout: Number(import.meta.env.VITE_API_TIMEOUT ?? 1000),
}

if (!config.apiBaseUrl) {
  throw new Error('Missing VITE_API_BASE_URL - Check your .env file.')
}

export default config
