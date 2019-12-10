export default {
  nuxtServerInit({ commit }, { req }) {
    let user = null;
    const cookie = req.headers.cookie || 'jwt_auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJkODZkYWE1OC1lNDY1LTQxM2EtODE0MS1iZWYxMjk3NzRiOGYiLCJleHAiOjE1NzU5ODk5ODEsImlzcyI6ImlpcyJ9.bP1uub-Cp-utrBMyWz73WiUzY5JOe-CbLbXPVAEsWtc'
    /* istanbul ignore else */
    if (cookie) {
      const cookieparser = require('cookieparser');
      const parsed = cookieparser.parse(cookie);
      /* istanbul ignore else */
      if (parsed.jwt_auth) {
        try {
          const jwtDecode = require('jwt-decode');
          user = jwtDecode(parsed.jwt_auth);
          console.log(user)
        } catch (err) {
          // No valid cookie found
        }
      }
    }
    commit('setUser', user);
  },
  books() {
    console.log('here')
  }
}
