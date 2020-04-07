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

export default {
    name: 'Skills',
    components: {
        Tag
    },
    data() {
        return {
            skills: ['All', 'Front-End', 'Back-End', 'Cloud', 'Other'],
            current: 'All',
            stack: {
                'React': 'Front-End',
                'Node.js': 'Back-End',
                'Express': 'Back-End',
                'Vue.js': 'Front-End',
                'JavaScript': ['Front-End', 'Back-End'],
                'HTML': 'Front-End',
                'CSS': 'Front-End',
                'MongoDB': 'Back-End',
                'PostgresQL': 'Back-End',
                'SQLite': 'Back-End',
                'SCSS': 'Front-End',
                'Jest': 'Other',
                'Vuex': 'Front-End',
                'Netlify': 'Cloud',
                'Heroku': 'Cloud',
                'Firebase': 'Back-End',
                'Bootstrap': 'Front-End',
                'jQuery': 'Front-End',
                'Python': 'Back-End',
                'MongoDB Atlas': 'Cloud',
                'Cloudinary API': 'Cloud',
                'Adobe XD': 'Other',
                'React Context API': 'Front-End'
            }
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

    #tagsGrid {
        width: calc(100% - 50px);
        display: flex;
        flex-wrap: wrap; // as long as a height isn't set, this will wrap it
        padding: 5px;
        border: 2px solid white;
        border-radius: 10px;
        margin-top: 25px;
        background-color: #358101;
        > .tag {
            font-size: 3.5em;
            margin: 5px;
        }
    }
</style>