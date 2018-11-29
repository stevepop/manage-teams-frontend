<template>
  <section class="bg-blue min-h-screen flex justify-center items-center">
    <div class="flex justify-center">
      <div class="intro">
          <h1 class="text-center text-grey-light text-5xl p-6">Website of Shenstone FC</h1>
          <h2 class="text-center text-white text-4xl p-6">Coming soon...</h2>
      </div>
    </div>
  </section>
</template>

<script>

export default {
 
}
</script>

<style>

/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
