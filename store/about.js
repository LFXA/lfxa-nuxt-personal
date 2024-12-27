import { v4 as uuidv4 } from "uuid";
import { aboutMeTools } from "./aboutMeTools.js";

const state = () => ({
  aboutMe: [
    {
      id: uuidv4(),
      bio: "about.text1",
    },
    {
      id: uuidv4(),
      bio: "about.text2",
    },
    {
      id: uuidv4(),
      bio: "about.text3",
    },
    {
      id: uuidv4(),
      bio: "about.text4",
    },
  ],
  aboutMeTools,
});

const getters = {
  // @todo
};

const mutations = {
  // @todo
};

const actions = {
  // @todo
};

export const useAboutStore = defineStore("about", {
  state,
  mutations,
  actions,
  getters,
});
