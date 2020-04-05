<template>
    <div id="projects">
        <h1>Projects</h1>
        <ProjectOne />
  </div>
</template>

<script>
import ProjectOne from './ProjectOne';
export default {
    name: 'Landing',
    components: {
        ProjectOne
    }
}
</script>

<style scoped lang="scss">
    #projects {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: white;
        background-color: var(--primary-color);
        > h1 {
            width: calc(100% - 50px);
            margin: 0 25px;
            border-bottom: 3px solid white;
            font: {
                size: 4em;
                weight: 200;
                style: italic;
            }
        }
    }
</style>