<template>
    <div id="projects">
        <h1>Projects</h1>
        <ProjectSections project="legion" />
        <ProjectSections project="abetteru" />
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
    @import '../../assets/sass/mixins.scss';
    
    #projects {
        width: calc(100% - 50px);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: white;
        background-color: var(--primary-color);
        > h1 {
            width: 100%;
            border-bottom: 3px solid white;
            font: {
                size: 5em;
                weight: 200;
                style: italic;
            }
        }
    }

    @include for-desktop-large {
        #projects > h1 {
            font-size: 7vw;
        }
    }

    @include for-desktop-xlarge {
        #projects > h1 {
            border-width: 5px;
        }
    }

    @include for-mobile-only {
        #projects {
            width: 95%;
            align-items: center;
            > h1 { font-size: 15vw; }
        }
    }
</style>