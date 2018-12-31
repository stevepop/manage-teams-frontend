<template>
   <tr class="hover:bg-blue-lightest" v-if="player">
      <td class="py-2 px-2 border-b border-grey-light text-sm"> {{ player.position }}</td>
      <td class="py-2 px-2 border-b border-grey-light text-sm">
          {{ player.first_name }} {{ player.last_name }}
        </td>
      <td>
         <div class="actions ml-4">
           <button 
              class="mb-2 md:mb-0 text-sm py-2 px-3 border  rounded"
              :class="{'text-red border-red': isSelected, 'text-green border-green': !isSelected}"
              @click.prevent="toggleSelectPlayer">
              {{ isSelected ? 'unselect' : 'select' }}
            </button>
            <button
              v-show="isSelected" 
              class="text-sm text-blue py-2 px-3 border border-blue home:bg-blue-light rounded"
              @click.prevent="showModal('PlayerTarget')"
              >
              Edit rating
            </button>
         </div>
      </td>
  </tr>
</template>

<script>
 import { mapGetters } from 'vuex'


  export default {
    props: {
      player: {
        type: Object
      }
    },
    computed: {
      ...mapGetters({
        match: 'team/match',
        selectedPlayers: 'team/selectedPlayers'
      }),
      isSelected() {
        let checkSelected = this.selectedPlayers.find(player => {
          return player._id.toString() === this.player._id.toString()
        })
        return checkSelected
      }
    },
    methods: {
       showModal (componentName) {
         this.$store.commit('team/setPlayer', this.player)
         this.$store.commit('modal/showModal', componentName)
      },
      toggleSelectPlayer() { 
        this.$store.commit('team/updateSelectedPlayers', this.player)
      }
    }
  }
</script>

<style scoped>

</style>