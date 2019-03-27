export const getRequestConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${typeof window !== 'undefined' ? window.localStorage.getItem('ko_token') : ''}`
    }
  }
}
