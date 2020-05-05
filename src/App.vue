<template>
  <div id="app">
    <LandingPage />
    <ProjectsPage />
    <SkillsPage />
  </div>
</template>

<script>
import LandingPage from './components/Landing';
import ProjectsPage from './components/Projects/Projects';
import SkillsPage from './components/Skills';

export default {
  name: 'App',
  components: {
    LandingPage,
    ProjectsPage,
    SkillsPage
  }
}
</script>

<style lang="scss">
  :root {
    --primary-font: 'Nunito Sans', sans-serif;
    --secondary-font: 'Roboto', sans-serif;
    --primary-color: #013581;
    --secondary-color: #810175;
  }
  
  html, body {
    font-size: 100%;
    background-color: var(--primary-color);
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
    align-items: center;
    font-family: var(--primary-font);
    cursor: url('./assets/images/WD.png'), auto;
  }

</style>
