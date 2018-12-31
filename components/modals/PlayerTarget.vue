<template>
  <div class="pin absolute flex items-center justify-center bg-transparent-black">
      <div class="bg-white rounded shadow p-8 m-4 w-full md:w-1/2 max-h-full text-center">
          <div class="mb-4 text-grey-darker">
              <h4>Match fixture: {{ match.fixture }}</h4>
              <p class="mt-2">Rating for {{ playerName }}</p>
              <p class="mt-2 mb-4">Position: {{ player.position }}</p>
          </div>
          <div class="mb-8">
              <div class="target-form">
                <form action="" class="w-full">
                   <div class="my-4 flex justify-center">
                      <div class="p-2">
                         <label for="target" class="mr-2">Target</label>
                        <input type="text" name="target" class="border border-grey w-6" v-model="form.target">
                      </div>
                       <div class="p-2">
                         <label for="actual" class="mr-2">Actual</label>
                        <input type="text" name="actual" class="border border-grey w-6" v-model="form.actual">
                      </div>
                   </div>
                   <div class="mb-4">
                      <div>
                        <label for="target" class="mr-6">Comments</label>
                     </div>
                     <div class="mt-2">
                        <textarea 
                          name="comments"  
                          cols="50"
                          rows="10"
                          class="border border-grey w-full" 
                          v-model="form.comment">
                        </textarea>
                     </div>   
                   </div>
                </form>
              </div>
          </div>
          <div>
              <button class="text-green border border-green hover:bg-green-lightest py-2 px-4 rounded" @click="save">Save</button>
              <button class="text-blue border border-blue hover:bg-blue-lightest py-2 px-4 rounded"  @click="hideModal">Dismiss</button>
          </div>
      </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    created () {
      const escapeHandler = (e) => {
         if (e.key === 'Escape') {
          this.hideModal()
        }
      }
      document.addEventListener('keydown', escapeHandler)
      this.$once('hook:destroyed', () => {
        document.removeEventListener('keydown', escapeHandler)
      })
     
       this.$axios.get(`http://localhost:4000/match-reports/${this.match._id}/player/${this.player._id}`)
       .then(({ data: {matchReport } }) => {
         if (matchReport) {
            this.form.target = matchReport.target
            this.form.actual = matchReport.actual
            this.form.comment = matchReport.comment
            this.edit = true
         }
       })
    },
  
    data () {
      return {
       form: {
        target: 0,
        actual: 0,
        comment: null
       },
       edit: false
      }
    },
    computed: {
      ...mapGetters({
        player: 'team/player',  
        match: 'team/match'
      }),
      playerName() {
        return `${this.player.first_name} ${this.player.last_name}`
      }
    },
    methods: {
      hideModal() {
        this.$store.commit('modal/hideModal', false)
      },
      async save () {
        const method = this.edit ? 'put' : 'post'
        await this.$axios[method]('http://localhost:4000/match-reports', {
          match_id: this.match._id,
          player_id: this.player._id,
          target: this.form.target,
          actual: this.form.actual,
          comment: this.form.comment
        })

        this.hideModal()
      }
    }
  }
</script>

<style scoped>

</style>