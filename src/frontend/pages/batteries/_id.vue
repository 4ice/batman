<template>
  <h1>{{ this.battery.name }}</h1>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const battery = await $axios.$get('http://localhost:3333/batteries/' + params.id)
    return { battery }
  }
}
</script>