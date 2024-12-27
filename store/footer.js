import { v4 as uuidv4 } from "uuid";

const state = () => ({
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

export const useFooterStore = defineStore("footer", {
  state,
  mutations,
  actions,
  getters,
});
