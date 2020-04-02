<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from './components/Landing';

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style lang="scss">

  html, body {
    font-size: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
</style>
