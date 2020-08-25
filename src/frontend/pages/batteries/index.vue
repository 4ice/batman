<template>
  <div>
    <h1>Batteries</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Capacity (mAh)</th>
            <th>Manufacturer</th>
            <th>Charging cycles</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="battery in batteries">
              <th>{{ battery.id }}</th>
              <td>
              <a v-bind:href="'/batteries/'+ battery.id">{{ battery.name}}</a></td>
              <td>{{ battery.capacity }}</td>
              <td>{{ battery.manufacturer }}</td>
              <td>{{ battery.charging_cycles }}</td>
            </tr>
        </tbody>
      </table>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      loading: false,
      batteries: []
    };
  },
  methods: {
    getBatteries: async function () {
      this.batteries = await this.$axios.$get('http://localhost:3333/batteries')
      },
  },
  mounted() {
      this.loading = true;
      this.getBatteries()
  },
}
</script>