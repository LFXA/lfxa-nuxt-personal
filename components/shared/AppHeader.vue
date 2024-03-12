<template>
  <nav id="nav" class="sticky z-10 top-0 bg-slate-200 dark:bg-secondary-dark">
    <!-- Header -->
    <div class="z-10 sticky sm:flex sm:justify-between sm:items-center px-8">
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-6 sm:px-0">
        <!-- Header logos -->
        <div>
          <NuxtLink :to="localePath({ name: 'index' })">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="170px"
              height="70px"
              class="text-primary-dark hover:text-slate-400 dark:text-primary-light dark:hover:text-cyan-700"
              fill="currentColor"
              viewBox="0 -0.010574018582701683 400 103.02114868164062"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect
                id="svgEditorBackground"
                x="0"
                y="0"
                width="400"
                height="103"
                style="fill: none; stroke: none"
              />

              <path
                d="M464,887c-12,-6,-50,-34,-85,-61c-62,-47,-158,-98,-212,-111c-14,-4,-33,-15,-42,-25c-17,-19,-68,-270,-59,-293c3,-8,53,-41,112,-74c59,-34,151,-86,204,-117c65,-38,108,-56,130,-56c25,0,87,30,233,115c110,64,204,120,209,125c11,11,-32,280,-48,297c-6,6,-90,57,-187,112c-179,102,-212,114,-255,88Zm235,-113c91,-53,170,-100,175,-105c33,-31,-231,-198,-340,-215c-39,-6,-50,-2,-126,44c-46,27,-125,73,-176,102c-51,28,-92,56,-90,62c2,5,37,23,78,39c65,27,124,62,239,145c19,13,43,24,54,24c11,0,95,-43,186,-96Zm-379,-249c92,-53,176,-95,191,-95c65,0,221,74,319,151c28,22,54,39,56,36c6,-6,34,-166,34,-194c0,-17,-20,-33,-97,-77c-54,-30,-141,-79,-192,-110c-52,-31,-106,-56,-120,-56c-13,0,-81,33,-150,73c-69,41,-156,91,-193,112c-38,22,-68,44,-68,50c-1,37,35,205,44,205c6,0,85,-43,176,-95Z"
                transform="matrix(0.1 0 0 -0.1 0 103)"
              />
              <path
                id="e1_path"
                d="M240,656c24-16,9-10,20-16c11-6,20-17,20-6c-15,0-21,16-20,16c4-21-20,8-20,6Z"
                transform="matrix(0.1 0 0 -0.1 0 103)"
              />
              <path
                d="M1455,888c-11,-6,-44,-31,-73,-55c-55,-45,-131,-87,-215,-118c-27,-10,-54,-28,-61,-39c-19,-30,-61,-285,-50,-296c5,-5,101,-62,214,-126c139,-80,215,-118,236,-118c20,0,93,36,225,112c108,62,204,118,214,126c18,13,18,18,-5,153c-12,78,-26,146,-29,152c-4,6,-90,58,-191,116c-187,107,-221,118,-265,93Zm247,-120c98,-56,178,-108,178,-114c0,-16,-133,-116,-195,-147c-93,-46,-172,-70,-198,-61c-46,17,-356,199,-357,210c0,6,21,19,48,29c84,32,156,72,232,129c40,31,83,56,94,56c11,0,100,-46,198,-102Zm-517,-176c28,-16,102,-59,165,-96c63,-37,129,-70,145,-73c57,-9,235,72,340,156c27,22,51,39,52,37c6,-5,33,-170,33,-196c0,-23,-22,-39,-194,-138c-112,-64,-206,-112,-221,-112c-15,0,-109,48,-222,112l-195,113l5,45c10,83,29,180,36,180c3,0,29,-13,56,-28Z"
                transform="matrix(0.1 0 0 -0.1 0 103)"
              />
              <g id="e12_group">
                <path
                  id="e16_path"
                  d="M1242,661c-11,-6,-10,-10,0,-19c11,-8,14,-7,14,9c0,10,0,19,-1,19c0,0,-6,-4,-13,-9Z"
                  transform="matrix(0.1 0 0 -0.1 0 103)"
                />

                <text
                  id="e18_text"
                  dy="-0.5em"
                  style="font-family: Arial; font-size: 20px"
                  transform="matrix(0.696444 0.540017 -0.564777 0.665911 75.7626 -44.5141)"
                >
                  <textPath id="e17_textPath" xlink:href="#e16_path">
                    F
                  </textPath>
                </text>
              </g>
              <path
                d="M2390,844c-75,-57,-174,-111,-243,-133c-20,-7,-41,-20,-46,-29c-12,-24,-54,-271,-48,-286c8,-21,411,-246,441,-246c15,0,46,10,69,21c94,48,353,203,368,220c15,16,14,28,-6,149c-16,96,-27,136,-41,149c-10,10,-95,61,-187,114c-118,68,-178,97,-201,97c-24,0,-52,-15,-106,-56Zm291,-69c90,-52,171,-99,179,-104c12,-8,12,-12,-5,-31c-60,-66,-289,-189,-354,-190c-14,0,-70,26,-125,59c-56,32,-134,77,-173,100c-40,23,-73,46,-73,52c0,5,12,14,28,21c100,41,177,82,241,132c41,31,84,56,96,56c11,0,95,-43,186,-95Zm-338,-272c60,-35,121,-66,137,-69c55,-11,223,61,317,135c29,22,57,42,64,43c8,2,18,-32,30,-97l19,-100l-26,-21c-14,-12,-60,-40,-102,-63c-42,-22,-120,-66,-172,-96c-52,-30,-103,-55,-115,-55c-11,0,-52,18,-90,41c-39,23,-122,70,-185,106c-63,36,-120,69,-126,74c-11,9,-8,36,21,197l6,33l57,-32c31,-18,106,-61,165,-96Z"
                transform="matrix(0.1 0 0 -0.1 0 103)"
              />
              <path
                id="e19_path"
                d="M2331,688c-1,-27,-3,-28,-58,-30l-58,-2l52,-3c47,-4,52,-6,56,-31l4,-27l2,28c1,26,4,27,54,29l52,2l-47,3c-42,4,-47,7,-51,31l-4,27l-2,-27Z"
                transform="matrix(0.1 0 0 -0.1 0 103)"
              />
              <path
                d="M3369 843 c-65 -50 -239 -143 -266 -143 -22 0 -34 -32 -58 -165 -25 -133 -25 -139 -8 -156 10 -10 106 -68 213 -130 151 -88 203 -113 230 -112 25 0 88 31 230 113 107 61 202 120 211 130 15 17 14 29 -7 154 -12 75 -25 140 -28 145 -4 5 -89 57 -191 115 -133 76 -195 106 -218 106 -25 0 -52 -14 -108 -57z m296 -68 c216 -125 200 -113 178 -137 -54 -61 -228 -162 -323 -187 -32 -9 -53 -9 -70 -2 -51 21 -343 196 -343 206 0 5 7 12 14 16 8 4 58 28 111 53 54 26 126 69 160 97 52 42 68 50 93 46 17 -3 98 -44 180 -92z m-383 -255 c95 -55 182 -100 194 -100 60 0 220 75 318 150 41 30 68 45 70 37 2 -6 11 -55 20 -107 13 -75 13 -97 3 -106 -31 -30 -386 -224 -408 -224 -14 0 -81 32 -150 71 -115 66 -259 149 -268 156 -7 5 32 223 40 223 4 0 85 -45 181 -100z"
                transform="matrix(0.1 0 0 -0.1 0 103)"
              />
              <path
                id="e26_path"
                d="M3251,685c0,-5,11,-30,25,-55c13,-25,22,-35,19,-24c-4,17,1,24,25,34c38,16,48,30,20,30c-12,0,-19,-4,-16,-9c3,-4,-5,-13,-18,-19c-20,-9,-25,-8,-30,4c-8,22,-8,22,12,27c9,2,7,3,-5,2c-12,-1,-24,3,-27,9c-2,6,-5,7,-5,1Z"
                transform="matrix(0.1 0 0 -0.1 0 103)"
              />

              <text
                id="e11_text"
                dy="-0.5em"
                style="font-family: Arial; font-size: 20px"
                transform="matrix(0.618177 -0.760792 0.760792 0.618177 39.7479 52.2402)"
              >
                L
              </text>

              <text
                id="e28_text"
                dy="-0.5em"
                style="font-family: Arial; font-size: 20px"
                transform="matrix(-0.2801 -0.930689 0.930689 -0.2801 396.43 366.261)"
              >
                <textPath id="e27_textPath" xlink:href="#e26_path">A</textPath>
              </text>
              <text
                id="e30_text"
                dy="-0.5em"
                style="font-family: Arial; font-size: 20px"
                transform="matrix(-0.7367 0.741795 -0.741795 -0.7367 442.236 -92.89)"
              >
                <textPath id="e29_textPath" xlink:href="#e19_path">X</textPath>
              </text>
            </svg>
          </NuxtLink>
        </div>

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
            @click="openMenu()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-7 w-7 mt-1 fill-current text-secondary-dark dark:text-ternary-light"
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Header links -->
      <AppNavigation :is-open="isOpen" />

      <!-- Header right section buttons -->
      <div
        class="sm:flex-row justify-between items-center flex-col md:flex-row"
      >
        <!-- Theme switcher large screen -->
        <button
          class="m-6 bg-primary-light dark:bg-ternary-dark w-8 h-8 px-1 py-0 shadow-sm rounded-lg cursor-pointer"
          :class="
            colorMode.value == 'light'
              ? `text-liText-ternary-dark
                hover:text-gray-400
                dark:text-liText-ternary-light
                dark:hover:text-liBorder-primary-light
                w-6
                h-6`
              : 'text-gray-200 hover:text-gray-50 w-6 h-6'
          "
          @click="themeSwitcher"
        >
          <!-- Dark mode icon -->
          <client-only>
            <font-awesome-icon
              v-if="colorMode.value == 'light'"
              icon="moon"
              class="text-xl w-4 sm:w-4 h-3 sm:h-2"
            />

            <!-- Light mode icon -->
            <font-awesome-icon
              v-else
              icon="sun"
              class="text-xl w-4 sm:w-4 h-3 sm:h-2"
            />
          </client-only>
        </button>

        <select
          class="content-wrapper bg-primary-light dark:bg-ternary-dark text-ternary-dark dark:text-ternary-light dark:hover:text-primary-light"
          @change="$i18n.setLocale($event.target.value)"
        >
          <option
            v-for="local in $i18n.locales"
            :key="local.code"
            :value="local.code"
            :selected="$i18n.locale == local.code"
          >
            {{ $t(local.name) }}
          </option>
        </select>
      </div>
    </div>
  </nav>
</template>
<script setup>
import AppNavigation from "./AppNavigation.vue";
const localePath = useLocalePath();
const colorMode = useColorMode();
</script>
<script>
export default {
  components: {
    AppNavigation,
  },

  data: () => {
    return {
      isOpen: false,
    };
  },
  methods: {
    themeSwitcher() {
      useColorMode().preference =
        useColorMode().value === "light" ? "dark" : "light";
    },
    openMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
