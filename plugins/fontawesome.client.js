import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Icon } from "@iconify/vue";
import {
  faSun,
  faMoon,
  faBars,
  faClose,
  faShareNodes
} from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faLinkedin,
  faStackOverflow,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faDev,
  faLinkedin,
  faStackOverflow,
  faMedium,
  faGithub,
  faSun,
  faMoon,
  faBars,
  faClose,
  faShareNodes
);

// This is important, we are going to let Nuxt worry about the CSS
// config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
  nuxtApp.vueApp.component("Icon", Icon);
});
