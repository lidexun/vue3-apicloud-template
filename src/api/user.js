import http from '@/utils/axios'

export function login(params) {
  return http.post('/login', params)
}
