<template>
    <div id="projects">
        <h1>Projects</h1>
        <ProjectSections project="abetteru" />
        <ProjectSections project="legion" />
        <ProjectSections project="wordsearch" />
  </div>
</template>

<script>
import ProjectSections from './ProjectSections';

export default {
    name: 'Landing',
    components: {
        ProjectSections
    }
}
</script>

<style scoped lang="scss">
    @import '../mixins.scss';
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

    @include for-desktop-large {
        #projects > h1 {
            font-size: 5vw;
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