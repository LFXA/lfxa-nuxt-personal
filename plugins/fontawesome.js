import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faLinkedin,
  faStackOverflow,
  faMediumM,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faDev,
  faLinkedin,
  faStackOverflow,
  faMediumM,
  faGithub,
  faSun,
  faMoon,
  faBars,
  faClose,
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
