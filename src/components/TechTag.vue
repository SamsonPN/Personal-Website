<template>
  <div id="tag">
      {{tag}}
  </div>
</template>

<script>
export default {
    name: 'TechTag',
    props: ['tag']
}
</script>

<style scoped lang="scss">
    #tag {
        display: flex;
        justify-content: center;
        border: 1.5px solid black;
        border-radius: 5px;
        padding: 7.5px 15px;
        background-color: white;
        color: var(--primary-color);
        font: {
            size: 2em;
            weight: 200;
            style: italic;
        }
    }
</style>