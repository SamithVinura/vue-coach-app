export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didLogout = false;
  },
  setDidLogout(state) {
    state.didLogout = true;
  },
};
