<template>
    <div class="ProjectSections">
        <div class="projectWrapper">
            <div class="vidWrapper">
                <video :src="video" autoplay loop muted></video>
            </div>
            <div class="projectInfo">
                <a 
                    :href="website" 
                    :title="'Go to ' + name">
                    {{name}}
                </a>
                <p>{{description}}</p>
                <Demos 
                    :demo="demo" 
                    :source="source" 
                />
                <div class="tagWrapper">
                    <Tag 
                        v-for="tech in stack" 
                        :key="tech" 
                        :tag="tech"
                    />
                </div>
            </div>
        </div>
        <div class="listWrapper">
            <h3>Features</h3>
            <ul class="featuresList">
                <li
                    v-for="feature in features"
                    :key="feature">
                    {{feature}}
                </li>
            </ul>
            <h3>Challenges</h3>
            <ul class="challengesList">
                <li
                    v-for="challenge in challenges"
                    :key="challenge">
                    {{challenge}}
                </li>
            </ul>
            <h3>Solutions</h3>
            <ul class="solutionsList">
                <li
                    v-for="solution in solutions"
                    :key="solution">
                    {{solution}}
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import Demos from './ProjectsDemo';
import Tag from '../TechTag';
import Info from '../info.js';

export default {
    name: 'ProjectSections',
    props: {
        project: {
            type: String,
            required: true,
        }
    },
    components: {
        Demos,
        Tag
    },
    computed: {
        name: function() {
            return Info[this.project].name
        },
        description: function() {
            return Info[this.project].description
        },
        website: function() {
            return Info[this.project].website
        },
        demo: function() {
            return Info[this.project].demo
        },
        source: function() {
            return Info[this.project].source
        },
        video: function() {
            return Info[this.project].video
        },
        stack: function() {
            return Info[this.project].stack
        },
        features: function() {
            return Info[this.project].features
        },
        challenges: function() {
            return Info[this.project].challenges
        },
        solutions: function() {
            return Info[this.project].solutions
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../mixins.scss';

    .ProjectSections {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        > .projectWrapper {
            width: calc(100% - 50px);
            display: flex;
            justify-content: space-between;
            margin: 25px 0px;
            > .vidWrapper {
                width: 54%;
                > video {
                    max-width: 100%;
                    border-radius: 10px;
                }
            }
        }
    }

    .projectInfo {
        width: 44%;
        display: flex;
        flex-direction: column;
        > a {
            margin-bottom: 10px;
            line-height: 0.775;
            text-decoration: none;
            letter-spacing: 2px;
            font-size: 5em;
            color: white;
            &:hover {
                text-decoration: underline;
            }
        }
        > p {
            margin-bottom: 25px;
            font: {
                family: var(--secondary-font);
                size: 2.5em;
                weight: 300;
                style: italic;
            }
        }
    }

    .tagWrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        border: 2px solid white;
        border-radius: 10px;
        background-color: #358101;
        > .tag {
            margin: 5px;
        }
    }

    .listWrapper {
        width: calc(100% - 50px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 25px;
        padding: 10px;
        border: 3px solid white;
        border-radius: 10px;
        list-style-position: inside;
        background-color: rgba(0,0,0, 0.5);
        > h3 {
            font-size: 2.25em;
        }
        > ul {
            list-style-image: url('../../assets/terminal.svg');
            margin-left: 15px;
            margin-bottom: 10px;
            font: {
                family: var(--secondary-font);
                size: 1.75em;
                weight: 100;
                style: italic;
            }
            width: 100%;
            > li {
                width: calc(100% - 20px);
                margin-bottom: 10px;
            }
        }
    }

    @include for-projects-desktop;
</style>