<template>
    <div id="demo">
        <a :href="demo" >
             YouTube Demo
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
        width: 100%;
        display: flex;
        margin-bottom: 25px;
        > a {
            color: white;
            border: 1.5px solid white;
            border-radius: 15px;
            padding: 10px;
            text: {
                align: center;
                decoration: none;
            }
            cursor: pointer;
            font: {
                size: 2.25em;
                weight: 200;
                style: italic;
            }
            &:first-child {
                background-color: #0D0181;
                margin-right: 15px;
            }
            &:last-child {
                background-color: var(--secondary-color);
            }
            &:hover {
                opacity: 0.75;
            }
        }
    }
</style>