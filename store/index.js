import Prismic from "prismic-javascript";

export const state = () => ({});

export const actions = {
  async nuxtServerInit({ dispatch }) {
    return Promise.resolve(dispatch("settings/getSettings"));
  }
};
