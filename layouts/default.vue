<template>
<div class="wrapper bg-grey-lighter">
   <TheNavBar />
    <AppModal /> 
   <div class="flex justify-center">
    <nuxt/>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheNavBar from '@/components/TheNavBar'
import AppModal from '@/components/AppModal'

export default {
  head() {
      return {
        bodyAttrs: {
        class: this.modalVisible ? ' ext-webkit ext-chrome ext-mac overflow-hidden': ' ext-webkit ext-chrome ext-mac'
      }
    }
  },
  computed: {
    ...mapGetters({
      modalVisible: 'modal/modalVisible'
    })
  },
  components: {
    TheNavBar,
    AppModal
  }
}

</script>
