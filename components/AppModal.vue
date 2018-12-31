<template>
  <transition name="modal">
      <div class="modal-mask" v-if="visible">
        <component :is="component"></component>
      </div>
    </transition>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
  export default {
   computed: {
      ...mapGetters({
        visible: 'modal/modalVisible',
        modalComponent: 'modal/modalComponent',
      })
    },
     methods: {
      hideModal() {
        this.$store.commit('modal/hideModal')
      }
    },
    watch: {
      modalComponent(componentName) {
        if (!componentName) return;

        Vue.component(componentName, () => import(`./modals/${componentName}`));

        this.component = componentName;
      },
  },
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}
.modal-container {
    width: 300px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
</style>