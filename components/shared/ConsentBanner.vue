<template>
    <div v-if="!consentGiven" class="fixed bottom-0 w-full p-4 text-center z-50 dark:bg-ternary-dark dark:text-ternary-light bg-slate-300 ">
      <p class="mb-4">
        {{  $t("consentCookiesMessage") }}
      </p>
      <button class="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="acceptCookies">{{  $t("Accept") }}</button>
      <button class="mx-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" @click="declineCookies">{{  $t("Decline") }}</button>
    </div>
  </template>
  
  <script>
  import Cookies from 'js-cookie';
  
  export default {
    data() {
      return {
        consentGiven: false,
      };
    },
    mounted() {
      this.consentGiven = Cookies.get('user_consent') === 'true';
    },
    methods: {
      acceptCookies() {
        Cookies.set('user_consent', 'true', { expires: 365 });
        this.consentGiven = true;
        const { gtag } = useGtag()
        gtag('consent', 'update',
           {
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                ad_storage: 'granted',
                analytics_storage: 'granted'
           }) 
      },
      declineCookies() {
        Cookies.set('user_consent', 'false', { expires: 365 });
        this.consentGiven = true;
      },
        consentGrantedAdStorage() {
            const { gtag } = useGtag()
            gtag('consent', 'update', {
                ad_storage: 'granted'
            })
    }
    },
  };
  </script>