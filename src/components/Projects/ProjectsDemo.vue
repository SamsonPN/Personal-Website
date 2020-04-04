<template>
    <div id="demo">
        <a :href="demo" >
            Youtube Demo
        </a>
        <a :href="source" >
            &lt;/&gt; View Source
        </a>
    </div>
</template>

<script>
export default {
    name: 'Demo',
    props: ['demo', 'source']
}
</script>

<style scoped lang="scss">

    #demo {
        display: flex;
        justify-content: space-evenly;
        > a {
            color: white;
            text-decoration: none;
            border: 1.5px solid white;
            border-radius: 15px;
            padding: 10px;
            cursor: pointer;
            font: {
                size: 2em;
                weight: 200;
                style: italic;
            }
            &:first-child {
                background-color: #0D0181;
            }
            &:last-child {
                background-color: var(--secondary-color);
            }
            &:hover {
                opacity: 0.85;
            }
        }
    }
</style>