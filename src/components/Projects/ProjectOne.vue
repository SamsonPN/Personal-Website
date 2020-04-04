<template>
  <div id="ProjectOne" >
      <div class="projectInfo">
          <a href="https://abetteruhealth.com">A BETTER U</a>
          <p>Health and Fitness Application</p>
          <div class="tagWrapper">
              <Tag v-for="tech in stack" :key="tech" :tag="tech"/>
          </div>
      </div>
  </div>
</template>

<script>
import Tag from '../TechTag';

export default {
    name: 'ProjectOne',
    components: {
        Tag
    },
    data() {
        return {
            stack: ['React', 'Node.js', 'Express', 'MongoDB']
        }
    }
}
</script>

<style scoped lang="scss">
    #ProjectOne {
        display: flex;
        justify-content: space-between;
    }

    .tagWrapper {
        display: flex;
        flex-wrap: wrap; // as long as a height isn't set, this will wrap it
    }
</style>