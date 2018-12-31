<template>
  <div class="block md:flex justify-center md:items-center h-screen w-full">
    <div class="w-full md:w-3/4 bg-white p-6 rounded-lg">
       <div class="player-profile mt-8">
          <div class="title mb-6">
              <h2 class="text-lg md:text-3xl text-center"> Edit Player Profile</h2>
          </div>
          <!-- Avatar -->
          <div class="flex justify-center my-6">
            <div class="avatar">
              <img :src="player.image" class="h-24 w-24 rounded-full" alt="" v-if="player.image !== undefined">
              <img src="/img/profile.png" class="rounded-full" alt="" v-else>
            </div>
          </div>
          <div class="flex justify-center">
            <form 
              class="mb-4 md:flex md:flex-wrap md:justify-between" 
              action="/" 
              method="post" 
              @submit.prevent="submit" enctype="multipart/form-data">
              <div class="flex flex-col mb-4 md:w-1/2">
                <label class="field-label" for="first_name">First Name</label>
                <input class="field md:mr-2" type="text" name="first_name" v-model="form.first_name">
              </div>
              <div class="flex flex-col mb-4 md:w-1/2">
                <label class="field-label" for="last_name">Last Name</label>
                <input class="field md:ml-2" type="text" name="last_name" v-model="form.last_name">
              </div>
               <div class="flex flex-col mb-4 md:w-full">
                <label class="field-label" for="position">Position</label>
                <input class="field" type="position" name="position" v-model="form.position">
              </div>
              <div class="flex flex-col mb-4 md:w-full">
                <label class="field-label" for="email">Email</label>
                <input class="field" type="email" name="email" v-model="form.email">
              </div>
               <div class="flex flex-col mb-4 md:w-full">
                <label class="field-label" for="email">Upload image</label>
                <input class="field" type="file" name="image" @change="onFileSelected">
              </div>
              <button class="btn btn-teal mx-auto" type="submit">Update Profile</button>
               <nuxt-link :to="{name: 'players'}"
                class="no-underline btn btn-outline mx-auto" type="submit">
                  Back To Players
                </nuxt-link>
            </form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: 'auth',
    
    async asyncData ({ params, app }) {
     const { data: {player} }  = await app.$axios.get(`/players/${params.id}`)

      return { player: player }
    },

    created() {
      this.form = {...this.player }
    },

    data () {
      return {
        form: {},
        selectedFile: null
      }
    },

    methods: {
      async submit() {
        const fd = new FormData()
        fd.append('first_name', this.form.first_name)
        fd.append('last_name', this.form.last_name)
        fd.append('email', this.form.email)
        fd.append('position', this.form.position.toUpperCase())
        if (this.selectedFile) {
            fd.append('image', this.selectedFile, this.selectedFile.name)
        }
      
        fd.append('ranking', 0)

        const response = await this.$axios.put(`/players/${this.player._id}`, fd)

        this.$router.push({
          path: '/players'
        })
      },
      onFileSelected(event) {
        this.selectedFile = event.target.files[0]
      }
    }
  }
</script>


