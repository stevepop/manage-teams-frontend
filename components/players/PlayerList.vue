<template>
 <table class="text-left m-4" style="border-collapse:collapse">
    <thead>
        <tr>
            <th class="py-2 px-2 font-sans text-sm  text-grey border-b border-grey-light">Position</th>
            <th class="py-2 px-2 font-sans text-sm  text-grey border-b border-grey-light">Player</th>
            <th class="py-2 px-2 font-sans text-sm  text-grey border-b border-grey-light"></th>
        </tr>
    </thead>
      <tbody>
         <tr is="player-list-item"
          :player="player" 
           v-for="player in players" 
           :key="player.id">
        </tr>
      </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import PlayerListItem from './PlayerListItem'

  export default {
   computed: {
     ...mapGetters({
       players: 'team/players'
     })
   },
   components: {
      PlayerListItem
   }
  }
</script>

<style scoped>

</style>