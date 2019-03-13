const state = {
  selectedCamera: ""
};

const mutations = {
  CHANGE_DEVICE_CAMERA(state, payload) {
    state.selectedCamera = payload.selectedDevice;
  }
};

const actions = {
  changeDeviceCamera({ commit }, payload) {
    // do something async
    commit("CHANGE_DEVICE_CAMERA", payload);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
