export const state = () => ({
  jobs: [],
});

export const mutations = {
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
};

export const actions = {
  nuxtServerInit({commit}) {
    return this.$axios.$get("localhost/jobs.json").then((res) => {
      commit.commit("SET_JOBS", res);
    });
  },
};
