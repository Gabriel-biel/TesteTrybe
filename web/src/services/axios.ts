import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
  const { '@ng_trybe.token-1.0.0': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333',
  })

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  return api
}
