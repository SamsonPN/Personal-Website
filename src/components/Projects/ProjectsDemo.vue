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
        align-items: center;
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

    @media only screen and (max-width: 84.625em) {
        #demo {
            flex-direction: column;
            > a {
                width: 100%;
                &:first-child{
                    margin-right: 0;
                    margin-bottom: 20px;
                }
            }
        }
    }

    @media only screen and (max-width: 66.313em) {
        #demo {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            > a {
                padding: 10px 5px;
                width: 48%;
                white-space: nowrap;
                &:first-child {
                    margin-bottom: 0;
                }
            }
        }
    }


    @media only screen and (max-width: 42.375em) {
        #demo {
            flex-direction: column;
            > a {
                width: 100%;
                &:first-child {
                    margin-bottom: 15px;
                }
            }
        }
    }

    
</style>