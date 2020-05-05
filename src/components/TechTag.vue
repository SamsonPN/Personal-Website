<template>
  <div class="tag">
      {{tag}}
  </div>
</template>

<script>
export default {
    name: 'TechTag',
    props: {
        tag: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/sass/mixins.scss';

    .tag {
        display: flex;
        justify-content: center;
        border: 1.5px solid black;
        border-radius: 0.375rem;
        padding: 0.5rem 1rem;
        background-color: white;
        color: var(--primary-color);
        font: {
            size: 2em;
            weight: 200;
            style: italic;
        }
    }

    @include for-desktop-xlarge {
        .tag {
            border: {
                radius: 1rem;
                width: 3px;
            }
        }
    }
</style>