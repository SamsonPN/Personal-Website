<template>
    <div id="ProjectsDemo">
        <a :href="demo" >
             &#9654; Demo
        </a>
        <a :href="source" >
            &lt;/&gt; Source
        </a>
    </div>
</template>

<script>
export default {
    name: 'ProjectsDemo',
    props: {
        demo: {
            type: String,
            required: true
        },
        source: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mixins.scss';

    #ProjectsDemo {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1.5rem;
        > a {
            width: 100%;
            border: 1.5px solid white;
            border-radius: 1rem;
            padding: 0.625rem;
            color: white;
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
                margin-bottom: 0.75rem;
            }
            &:last-child {
                background-color: var(--secondary-color);
            }
            &:hover {
                opacity: 0.75;
            }
        }
    }

    @include for-desktop-large {
        #ProjectsDemo > a {
            font-size: 2.75vw;
            border: {
                radius: 1.25rem;
                width: 2.5px;
            }
            &:first-child {
                margin-bottom: 1.5rem;
            }
        }
    }

    @include for-desktop-xlarge {
        #ProjectsDemo > a {
            font-size: 2.75vw;
            border: {
                radius: 1.75rem;
                width: 5px;
            }
            &:first-child {
                margin-bottom: 1.5rem;
            }
        }
    }

    @include for-desktop-only {
        #ProjectsDemo {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            > a {
                padding: 0.625rem 0.3rem;
                width: 48%;
                white-space: nowrap;
                &:first-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    @include for-mobile-only {
        #ProjectsDemo {
            flex-direction: column;
            > a {
                width: 100%;
                font-size: 6vw;
                &:first-child {
                    margin-bottom: 1rem;
                }
            }
        }
    }

    
</style>