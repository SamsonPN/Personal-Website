<template>
    <div id="ProjectOne" >
        <div class="projectWrapper">
            <div class="vidWrapper">
                <video :src="video" autoplay loop muted></video>
            </div>
            <div class="projectInfo">
                <a href="https://abetteruhealth.com" title="Go to A Better U?">A Better U</a>
                <p>Health and Fitness Application</p>
                <Demos :demo="demo" :source="source" />
                <div class="tagWrapper">
                    <Tag v-for="tech in stack" :key="tech" :tag="tech"/>
                </div>
            </div>
        </div>
        <div class="listWrapper">
            <h3>Features</h3>
            <ul class="featuresList">
                <li>
                    Create any workout routine from 1000 available exercises such as
                    the squat, bench press, and deadlift
                </li>
                <li>
                    Track workouts for the day by choosing a routine and putting in
                    weight, repetition, and set information
                </li>
                <li>
                    Provides Calorie and Macronutrient calculators for users 
                    to determine nutritional needs
                </li>
                <li>
                    Search for various foods and view full nutrition report
                </li>
                <li>
                    Create, update, or delete facebook-like status updates to track fitness journey
                </li>
                <li>
                    Able to upload photos/videos for each status that will
                    be delivered quickly through a CDN
                </li>
            </ul>
            <h3>Challenges</h3>
            <ul class="challengesList">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
            <h3>Solutions</h3>
            <ul class="solutionsList">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
  </div>
</template>

<script>
import Demos from './ProjectsDemo';
import Tag from '../TechTag';

export default {
    name: 'ProjectOne',
    components: {
        Demos,
        Tag
    },
    data() {
        return {
            demo: 'https://youtu.be/xnnKvFZoiVo',
            source: 'https://github.com/SotaSamson96/A-Better-U',
            stack: ['React', 'Node.js', 'Express', 'MongoDB'],
            video: 'https://res.cloudinary.com/sotasamson96/video/upload/v1586055782/Personal%20Website/ABU_Short_btkni4.mp4'
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../mixins.scss';

    #ProjectOne {
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