<template>
  <nav class="bg-white px-8 pt-2 shadow-md">
    <div class="-mb-px flex justify-center">
      <NuxtLink class="nav-link" to="/">
        Home
      </NuxtLink>
      <NuxtLink class="nav-link" to="/batteries">
        Batteries
      </NuxtLink>
      <NuxtLink class="nav-link" to="/other">
        Other
      </NuxtLink>
    </div>
  </nav>
</template>


<style scoped>
.nav-link {
    @apply no-underline border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8
}
.nuxt-link-exact-active {
    @apply text-teal-500 border-teal-500 
}

h1 {
  font-size: 20px;
}
</style>