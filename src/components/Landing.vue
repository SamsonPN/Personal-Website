<template>
    <div id="landing">
        <div id="navHeader">
            <p @click="scrollToPage('projects')" >Projects</p>
            <p @click="scrollToPage('skills')" >Skills</p>
        </div>
        <div id="infoWrapper">
            <p>Samson Nguyen</p>
            <p>Full-Stack Developer</p>
            <div id="socialMediaWrapper">
                <a href="https://github.com/SotaSamson96">
                    <img src="../assets/GITHUB.svg" alt="github icon" title="Github">
                </a>
                <a href="http://www.linkedin.com/in/samson-nguyen/">
                    <img src="../assets/LINKEDIN.svg" alt="linkedin icon" title="LinkedIn">
                </a>
                <a href="mailto:sapnguyen@ucdavis.edu">
                    <img src="../assets/GMAIL.svg" alt="gmail icon" title="Gmail">
                </a>
                <a href="https://google.com">
                    <img src="../assets/RESUME.svg" alt="resume icon" title="Resume">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',
    methods: {
        scrollToPage(element) {
            const page = document.getElementById(element);
            page.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style scoped lang="scss">
    #landing {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        background: {
            image: url('../assets/landing-image.jpg');
            size: cover;
            repeat: no-repeat;
            position: center;
        }
    }

    #infoWrapper {
        display: flex;
        flex-direction: column;
        > p {
            margin-bottom: 5px;
            &:first-child {
                font: {
                    size: 6.5em;
                    weight: 500;
                }
            }
            &:nth-child(2) {
                font: {
                    family: var(--secondary-font);
                    size: 4.5em;
                    weight: 300;
                    style: italic;
                }
            }
        }
    }

    #socialMediaWrapper {
        display: flex;
        align-items: center;
        > a {
            height: 100%;
            width: 12.5%;
            &:not(:last-child) {
                margin-right: 10px;
            }
            &:hover {
                opacity: 0.75;
            }
            > img {
                max-width: 100%;  
            }
        }
    }

    #navHeader {
        width: 100%;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 25px;
        > p {
            color: white;
            cursor: pointer;
            font: {
                size: 2.5em;
                weight: 200;
                style: italic;
            }
            &:first-child {
                margin-right: 25px;
            }
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>