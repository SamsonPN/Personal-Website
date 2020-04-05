<template>
    <div id="ProjectOne" >
        <div>
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
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
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
    #ProjectOne {
        width: calc(100% - 24.5);
        margin-top: 25px;
        margin-left: 24.5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
            width: 100%;
            display: flex;
            justify-content: space-between;
            > .vidWrapper {
                width: 54%;
                > video {
                    max-width: 100%;
                }
            }
        }
    }

    .listWrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 25px;
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
        width: 94.5%;
        display: flex;
        flex-wrap: wrap; // as long as a height isn't set, this will wrap it
        padding: 5px;
        border: 2px solid white;
        border-radius: 10px;
        background-color: green;
        > #tag {
            margin: 5px;
        }
    }
</style>