<template>
  <div id="skills">
        <h1>Skills</h1>
        <div class="skillsBar">
            <button
                class="skillBtn"
                v-for="skill in skills"
                :id="skill + 'Btn'"
                :key="skill"
                @click="selectSkill(skill)">
                {{skill}}
            </button>
        </div>
        <div class="tagsWrapper">

        </div>
  </div>
</template>

<script>
import Tag from './TechTag';

export default {
    name: 'Skills',
    data() {
        return {
            skills: ['All', 'Front-End', 'Back-End', 'Cloud', 'Other'],
            current: 'All'
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
            //pass
            console.log(skill)
        }
    },
    mounted() {
        document.getElementById(this.current + 'Btn').classList.add('skillSelected');
    }
}
</script>


<style scoped lang="scss">
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
        > button {
            outline: none;
            background-color: white;
            border: 2px solid #707070;
            border-radius: 50px;
            margin: 5px 14px;
            padding: 5px 30px;
            color: var(--secondary-color);
            cursor: pointer;
            font: {
                size: 4em;
                weight: 200;
                style: italic
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
</style>