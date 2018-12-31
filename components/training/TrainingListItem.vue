<template>
   <tr class="hover:bg-blue-lightest" v-if="training">
      <td class="py-2 px-2 border-b border-grey-light text-sm"> {{ training.date | formatDate }}</td>
      <td class="py-2 px-2 border-b border-grey-light text-sm"> {{ training.time }}</td>
      <td class="py-2 px-2 border-b border-grey-light text-sm">
          {{ training.venue }} 
      </td>
      <td>
        <nuxt-link 
          :to="{name: 'trainings-id-edit', params: {id: training._id }}"
          class="no-underline text-blue mx-2"
        >
          edit
          </nuxt-link>
        <a href="" @click.prevent="deleteSchedule" class="no-underline text-red">delete</a>
      </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    training: {
      type: Object
    }
  },
  methods: {
    async deleteSchedule() {
      await this.$store.dispatch('training/deleteTrainingSchedule', {id: this.training._id})
    }
  }
}
</script>
