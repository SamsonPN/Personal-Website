<template>
    <div id="projects">
        <h1>Projects</h1>
        <ProjectOne />
        <ProjectTwo />
  </div>
</template>

<script>
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';

export default {
    name: 'Landing',
    components: {
        ProjectOne,
        ProjectTwo
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

    @media only screen and (max-width: 28.125em) {
        #projects {
            align-items: center;
            > h1 {
                width: calc(100% - 10px);
            }
        }
    }
</style>