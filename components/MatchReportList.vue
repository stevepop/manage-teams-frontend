<template>
<div class="flex justify-center">
   <div class="bg-white m-4 w-full md:w-1/2" v-if="showReport">
      <div class="m-3">
          <div class="text-grey-dark text-center mb-4">
              Match Report - <span class="text-grey-darker">{{ playerName }}</span>
          </div>
          <div class="details pl-6">
            <div class="my-2">
              <span class="font-bold">Target:</span> 
              <span>{{ this.matchReport.target }}</span>
            </div>
            <div class="my-2">
              <span class="font-bold">Actual:</span> 
              <span>{{ this.matchReport.actual }}</span>
            </div>
          <div class="my-3">
            <p class="font-bold">Comment</p> 
            <p>
              {{ this.matchReport.comment }}
            </p>

          </div>
          <div class="flex justify-center">
              <button
            @click="$store.commit('team/setShowReport', false)" 
            class="px-3 py-2 text-gret-dark border border-grey-light hover:bg-grey-light">
            Back to list
          </button>
          </div>
          
        </div> 
      </div>
  </div>
  <div class="report-list p-2 md:p-6" v-else>
    <div class="bg-white rounded py-2">
        <table class="text-left m-4" style="border-collapse:collapse">
          <thead>
              <tr>
                  <th class="py-2 md:px-2 font-sans text-sm md:text-base text-grey border-b border-grey-light">Position</th>
                  <th class="py-2 md:px-2 font-sans text-sm md:text-base text-grey border-b border-grey-light">Player</th>
                  <th class="py-2 md:px-2 font-sans text-sm md:text-base text-grey border-b border-grey-light"></th>
              </tr>
          </thead>
            <tbody>
              <tr is="match-report-item"
                :matchReport="matchReport" 
                v-for="matchReport in matchReports" 
                :key="matchReport.id">
              </tr>
            </tbody>
        </table>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import MatchReportItem from '@/components/MatchReportItem'

  export default {
   computed: {
     ...mapGetters({
       matchReports: 'team/matchReports',
       matchReport: 'team/matchReport',
       showReport: 'team/showReport'
     }),
     playerName() {
       return `${this.matchReport.player.first_name} ${this.matchReport.player.last_name}`
     }
   },

   components: {
      MatchReportItem
   }
  }
</script>

<style scoped>

</style>.