import { v4 as uuidv4 } from "uuid";
import { createStore } from "vuex";
import { aboutMeTools } from "./aboutMeTools.js";

const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [],
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
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/LFXA",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://linkedin.com/in/lucasfaquino",
    },
    {
      id: uuidv4(),
      name: "SatckOverflow",
      icon: "stack-overflow",
      url: "https://stackoverflow.com/users/11226027/lfxa",
    },
    {
      id: uuidv4(),
      name: "Medium",
      icon: "medium",
      url: "https://medium.com/@lucasfaquino",
    },
    {
      id: uuidv4(),
      name: "Dev.to",
      icon: "dev",
      url: "https://dev.to/lfxa",
    },
  ],
  categories: [],
});

const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id === id);
  },
};

const mutations = {
  // @todo
};

const actions = {
  // @todo
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
