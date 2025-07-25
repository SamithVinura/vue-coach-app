import getters from './getters';
import mutations from './mutation';
import actions from './action';

export default {
  state() {
    return {
      userId: null,
      token: null,
      didLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};
