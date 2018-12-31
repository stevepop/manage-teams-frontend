<template>
  <div class="bg-white relative">
    <nav class="flex items-center justify-between flex-wrap bg-green-darker p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <nuxt-link to="/" class="no-underline text-white block flex items-center">
           <img src="/img/football.png" class="h-8 w-8 mr-2" alt="">
          <span class="font-semibold text-xl tracking-tight">Shenstone FC</span>
        </nuxt-link>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div :class="openNav ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow"></div>
        <div class="mt-8 md:mt-0">
          <div v-if="authenticated">
            <nuxt-link to="/players" class="nav-item sm:inline-block sm:mt-0 hover:text-green">
            Team
          </nuxt-link>
          <nuxt-link to="/matches" class="nav-item sm:inline-block sm:mt-0 hover:text-green">
            Matches
          </nuxt-link>
           <nuxt-link to="/trainings" class="nav-item sm:inline-block sm:mt-0 hover:text-green">
            Training Schedule
          </nuxt-link>
          <a href="/"
            @click.prevent="logout"
            class="nav-item sm:inline-block sm:mt-0 hover:text-green">
            Logout
          </a>
          </div>
          <div v-else>
            <nuxt-link to="/auth/login" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-grey-lighter hover:text-green mr-4">
            Login
          </nuxt-link>
          </div>
        
        </div>
      </div>
  </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      openNav: false,
      menu: [
        {
          title: 'Home',
          link: "/"
        },
        {
          title: 'Team',
          link: '/players'
        },
        {
          title: 'Matches',
          link: '/matches'
        }
      ]
    }
  },
  methods: {
    toggle() {
    	this.openNav = !this.openNav
    },
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>
.menu-mobile {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms;
}

.menu-mobile  .open {
  max-height: 1000px;
}
</style>
