<template>
 <table class="text-left m-4" style="border-collapse:collapse">
    <thead>
        <tr>
            <th class="py-2 px-2 font-sans text-sm  text-grey border-b border-grey-light">Date</th>
            <th class="py-2 px-2 font-sans text-sm  text-grey border-b border-grey-light">Time</th>
            <th class="py-2 px-2 font-sans text-sm  text-grey border-b border-grey-light">Venue</th>
            <th class="py-2 px-2 font-sans text-sm  text-grey border-b border-grey-light"></th>
        </tr>
    </thead>
      <tbody>
         <tr is="training-list-item" 
          :training="training" 
           v-for="training in trainings" 
           :key="training.id">
        </tr>
      </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import TrainingListItem from './TrainingListItem'

  export default {
   computed: {
     ...mapGetters({
       trainings: 'training/traininigSchedules'
     })
   },
   components: {
      TrainingListItem
   }
  }
</script>

<style scoped>

</style>