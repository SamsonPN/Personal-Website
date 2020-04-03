<template>
  <div id="app">
    <LandingPage />
    <ProjectsPage />
  </div>
</template>

<script>
import LandingPage from './components/Landing';
import ProjectsPage from './components/Projects';
export default {
  name: 'App',
  components: {
    LandingPage,
    ProjectsPage
  }
}
</script>

<style lang="scss">
  :root {
    --primary-font: Nunito, sans-serif;
    --secondary-font: Roboto, sans-serif;
    --primary-color: #013581;
    --secondary-color: #810175;

  }
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
    font-family: var(--primary-font);
  }

</style>
