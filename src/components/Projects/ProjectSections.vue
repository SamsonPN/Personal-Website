<template>
    <div class="ProjectSections">
        <div class="projectDesc">
            <span>
                <a 
                    :href="website" 
                    :title="'Go to ' + name">
                    {{name}}
                    <img 
                        src="../../assets/images/link.svg" 
                        alt="Link" 
                    />
                </a>
            </span>
            <p>{{description}}</p>
        </div>

        <div class="projectWrapper">
            <div class="vidWrapper">
                <video :src="video" autoplay loop muted></video>
            </div>
            <div class="projectInfo">
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
import Info from '../../info.js';

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
    @import '../../assets/sass/mixins.scss';

    .ProjectSections {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .projectDesc {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 1.5rem 0;
        > span > a {
            margin-bottom: 1rem;
            text-decoration: none;
            letter-spacing: 2px;
            font-size: 5em;
            color: white;
            > img {
                max-width: 2rem;
                vertical-align: baseline;
                filter: grayscale(100%) opacity(0.5);
                transition: 0.5s ease;
            }
            &:hover > img {
                filter: grayscale(0%) opacity(1);
            }
        }
        > p {
            font: {
                family: var(--secondary-font);
                size: 2.5em;
                weight: 300;
                style: italic;
            }
        }
    }

    .projectWrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        > .vidWrapper {
            width: 54%;
            > video {
                max-width: 100%;
                border: 3px solid white;
                border-radius: 10px;
            }
        }
    }

    .projectInfo {
        width: 44%;
        display: flex;
        flex-direction: column;
    }

    .tagWrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0.3rem;
        border: 2px solid white;
        border-radius: 10px;
        background-color: #358101;
        > .tag {
            margin: 5px;
        }
    }

    .listWrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        padding: 10px;
        border: 3px solid white;
        border-radius: 0.625rem;
        list-style-position: inside;
        background-color: rgba(0,0,0, 0.5);
        > h3 {
            font-size: 2.25em;
        }
        > ul {
            width: 100%;
            list-style-image: url('../../assets/images/terminal.svg');
            margin: 0 0 0.625rem 1rem;
            font: {
                family: var(--secondary-font);
                size: 1.75em;
                weight: 100;
                style: italic;
            }
            > li {
                width: calc(100% - 20px);
                margin-bottom: 0.625px;
            }
        }
    }


    @include for-desktop-large {
        .projectDesc {
            > span > a {
                font-size: 6.25vw;
                margin-bottom: 1.5rem;
                > img { max-width: 3rem; }
            }
            > p { font-size: 3vw; }
        }

        .tagWrapper {
            border-width: 2.5px;
            > .tag{
                font-size: 2.5vw;
                border-width: 2px;
            }
        }

        .listWrapper {
            padding: 1rem;
            > h3 {
                font-size: 2.75vw;
            }
            > ul {
                font-size: 2.25vw;
                list-style-image: url('../../assets/images/terminal-large.svg');
            }
        }
    }

    @include for-desktop-xlarge {
        .projectWrapper > .vidWrapper > video,
        .listWrapper,
        .tagWrapper {
            border: {
                radius: 1.75rem;
                width: 5px;
            }
        }

        .listWrapper > ul {  list-style-image: url('../../assets/images/terminal-xlarge.svg'); }

        .tagWrapper { 
            padding: 0.625rem; 
            > .tag {
                margin: 0.625rem;
            }
        }
    }

    @include for-desktop-only { 
        .ProjectSections {
            > .projectWrapper {
                flex-direction: column-reverse;
                align-items: center;
                > .vidWrapper { width: 100%; }
            }
        }

        .projectInfo {
            width: 100%;
            > a { font-size: 6em; }
            > p { font-size: 3em; }
        }

        .tagWrapper { margin-bottom: 1.5rem; }

        .listWrapper {
            > h3 { font-size: 2.75em; }
            > ul { font-size: 2em; }
        }
    }

    @include for-tablet-small-only {
        .projectDesc {
            > span > a {  
                font-size: 12.5vw; 
                > img { max-width: 1.5rem; }
            }
            > p { font-size: 7vw;  }
        }  

        .listWrapper {
            > h3 { font-size: 8vw; }
            > ul {
                margin-left: 0.5rem; 
                padding: 0;
                font-size: 6.75vw; 
            }
        }
    }

    @include for-mobile-only { 
        .tagWrapper > .tag {
            font-size: 4vw;
        }
    }
</style>