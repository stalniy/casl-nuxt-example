export default {
  nuxtServerInit({ commit }, { req }) {
    let user = null;
    const cookie = req.headers.cookie || 'jwt_auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
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
