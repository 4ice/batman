export default {
  /*
  ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
  */
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // proxyHeaders: false
  }
}