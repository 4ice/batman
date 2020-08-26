export default {
  /*
  ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
  */
  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  modules: [
    '@nuxtjs/axios',
  ],

  vuetify: {
    /* module options */
  },

  axios: {
    // proxyHeaders: false
  }
}