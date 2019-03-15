export const resolveUri = () => {
  if (typeof window !== 'undefined') {
    const host = window.location.host
    return host === 'matikkaprojekti.github.io' ? 'https://ko-interface.herokuapp.com' : 'http://localhost:8080'
  }
  return 'http://localhost:8080'
}
