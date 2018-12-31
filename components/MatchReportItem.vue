<template>
   <tr class="hover:bg-blue-lightest" v-if="matchReport">
      <td class="py-2 px-2 border-b border-grey-light"> {{ matchReport.player.position }}</td>
      <td class="py-2 px-2 border-b border-grey-light">
        {{ matchReport.player.first_name }} {{ matchReport.player.last_name }}
      </td>
       <td class="py-2 px-3 border-b border-grey-light">
           <a href=""
              @click.prevent="viewReport"
              class="no-underline text-sm text-blue"
              >
              View report
            </a>
      </td>
  </tr>
</template>


<script>

export default {
  props: {
    matchReport: {
      type: Object
    }
  },
  methods: {
    viewReport() {
      this.$store.commit('team/setMatchReport', this.matchReport)
      this.$store.commit('team/setShowReport', true)
    }
  }
}
</script>

<style scoped>

</style>