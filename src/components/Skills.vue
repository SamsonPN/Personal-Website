<template>
  <div id="skills">
        <h1>Skills</h1>
        <div class="skillsBar">
            <div
                class="skillBtn"
                v-for="skill in skills"
                :id="skill + 'Btn'"
                :key="skill"
                @click="selectSkill(skill)">
                {{skill}}
            </div>
        </div>
        <div id="tagsGrid">
            <Tag 
                v-for="(category, tech) in stack"
                :class="[category]"
                :key="tech"
                :tag="tech"
            />
        </div>
  </div>
</template>

<script>
import Tag from './TechTag';
import Isotope from 'isotope-layout';
import Info from './info.js';

export default {
    name: 'Skills',
    components: {
        Tag
    },
    data() {
        return {
            skills: ['All', 'Front-End', 'Back-End', 'Cloud', 'Other'],
            current: 'All'
        }
    },
    computed: {
        stack: function() {
            return Info['stack'];
        }
    },
    methods: {
        selectSkill(skill) {
            const className = 'skillSelected';
            const previousBtn = document.getElementById(this.current + 'Btn');
            previousBtn.classList.remove(className);
            this.current = skill;
            const currentBtn = document.getElementById(skill + 'Btn');
            currentBtn.classList.add(className);
            this.sortTags(skill);
        },
        sortTags(skill) {
            let category = skill === 'All' ? '' : skill;
            this.iso.arrange({
                filter: (itemElem) => {
                    return itemElem.classList.value.includes(category);
                }
            })
        }
    },
    mounted() {
        const grid = document.getElementById('tagsGrid');
        const iso = new Isotope(grid, {
            itemSelector: '.tag',
            layoutMode: 'fitRows'
        });
        this.iso = iso;
        document.getElementById(this.current + 'Btn').classList.add('skillSelected');
    }
}
</script>


<style scoped lang="scss">
    @import '../assets/sass/mixins.scss';

    #skills {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
        color: white;
        background-color: var(--primary-color);
        > h1 {
            width: calc(100% - 50px);
            margin: 0 25px;
            border-bottom: 3px solid white;
            font: {
                size: 4em;
                weight: 200;
                style: italic;
            }
        }
    }

    .skillsBar {
        width: calc(100% - 50px);
        display: flex;
        flex-wrap: wrap;
        margin-top: 25px;
        > div {
            outline: none;
            background-color: white;
            border: 2px solid #707070;
            border-radius: 50px;
            margin-left: 15px;
            margin-bottom: 10px;
            padding: 5px 30px;
            color: var(--secondary-color);
            cursor: pointer;
            font: {
                size: 3.5em;
                weight: 200;
                style: italic
            }
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                opacity: 0.85;
            }
        }
        > .skillSelected {
            border-color: white;
            background-color: var(--secondary-color);
            color: white;
        } 
    }

    #tagsGrid {
        position: relative;
        width: calc(100% - 50px);
        display: flex;
        flex-wrap: wrap;
        border: 2px solid white;
        border-radius: 10px;
        margin-top: 15px;
        padding: 10px;
        background-color: #358101;
        transition: height 0.25s;
        > .tag {
            font-size: 3em;
            margin: 7.5px;
        }
    }

    @include for-desktop-large {
        #skills > h1 {
            font-size: 5vw;
        }

        .skillsBar > div {
            font-size: 4vw;
            border-radius: 75px;
            border-width: 3px;
        }

        #tagsGrid > .tag {
            font-size: 4vw;
            margin: 15px;
            border-radius: 10px;
        }
    }

    @media only screen and (max-width: 80.938em) {
        .skillsBar {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            > div {
                text-align: center;
            }
        }
    }

    @media only screen and (max-width: 65.313em) {
        .skillsBar {
            grid-template-columns: repeat(2, 1fr);
            > div {
                font-size: 5.5vw;
            }
        }

        #tagsGrid > .tag {
            font-size: 2em;
        }
    }

    @media only screen and (max-width: 34.688em) {
        .skillsBar {
            margin-top: 10px;
            grid-template-columns: repeat(1, 1fr);
            justify-items: center;
            > div {
                width: 100%;
                margin-left: 0;
            }
        }
        #tagsGrid {
            margin-top: 0px;
            > .tag {
                font-size: 1.5em;
            }
        }
    }


    @media only screen and (max-width: 28.125em) {
        #skills {
            align-items: center;
            > h1 {
                width: calc(100% - 10px);
            }
        }

        .skillsBar, #tagsGrid {
            width: calc(100% - 10px);
        }
    }
</style>