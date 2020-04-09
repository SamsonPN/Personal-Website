<template>
    <div id="ProjectTwo" >
        <div class="projectWrapper">
            <div class="vidWrapper">
                <video :src="video" autoplay loop muted></video>
            </div>
            <div class="projectInfo">
                <a href="https://legion-board.netlify.com" title="Go to Legion Grid?">Legion Grid</a>
                <p>MapleStory Legion Simulator</p>
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
                    Allows players to drag and drop tetris pieces on the grid
                </li>
                <li>
                    Tetris pieces can be rotated clockwise and counterclockwise, as well
                    as flipped vertically and horizontally
                </li>
                <li>
                    Has a variety of options to change the color of the pieces and 
                    grid, add gridlines, and change the pieces' shapes
                </li>
                <li>
                    Positions of the pieces on the grid are saved and players
                    can have multiple presets to save to
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
    name: 'ProjectTwo',
    components: {
        Demos,
        Tag
    },
    data() {
        return {
            demo: 'https://youtu.be/lpfKuMfuXRI',
            source: 'https://github.com/SotaSamson96/Legion',
            stack: ['Vue.js', 'Node.js', 'Express', 'PostgresQL'],
            video: 'https://res.cloudinary.com/sotasamson96/video/upload/v1586145273/Personal%20Website/Legion_DEMO_bfosu6.mp4'
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../mixins.scss';

    #ProjectTwo {
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
                vertical-align: text-top;
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
        flex-wrap: wrap; // as long as a height isn't set, this will wrap it
        padding: 5px;
        border: 2px solid white;
        border-radius: 10px;
        background-color: #358101;
        > .tag {
            margin: 5px;
        }
    }

    @include for-projects-desktop;
</style>