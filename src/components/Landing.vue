<template>
    <div id="landing">
        <div id="navHeader">
            <p @click="scrollToPage('projects')">Projects</p>
            <p @click="scrollToPage('skills')">Skills</p>
        </div>
        <div id="infoWrapper">
            <p>Samson Nguyen</p>
            <p>Software Engineer</p>
            <div id="socialMediaWrapper">
                <a href="https://github.com/SamsonPN">
                    <img 
                        src="https://res.cloudinary.com/sotasamson96/image/upload/v1586300978/Personal%20Website/GITHUB_a6qbr3.svg" 
                        alt="github icon" 
                        title="Github">
                </a>
                <a href="http://www.linkedin.com/in/samson-nguyen/">
                    <img 
                        src="https://res.cloudinary.com/sotasamson96/image/upload/v1586300978/Personal%20Website/LINKEDIN_qvmoab.svg" 
                        alt="linkedin icon" 
                        title="LinkedIn">
                </a>
                <a href="mailto:sapnguyen@ucdavis.edu">
                    <img 
                        src="https://res.cloudinary.com/sotasamson96/image/upload/v1586300978/Personal%20Website/GMAIL_t8tle1.svg" 
                        alt="gmail icon" 
                        title="Gmail">
                </a>
                <a href="https://drive.google.com/file/d/1ddpJK9V1CE_4rZKhtzLoOe6xSYaJnlh8/view?usp=sharing">
                    <img 
                        src="https://res.cloudinary.com/sotasamson96/image/upload/v1586300978/Personal%20Website/RESUME_kgzpmp.svg" 
                        alt="resume icon" 
                        title="Resume">
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
    @import '../assets/sass/mixins.scss';

    #landing {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        background: {
            image: url('https://res.cloudinary.com/sotasamson96/image/upload/v1586053573/Personal%20Website/landing-image_sniipd.jpg');
            size: cover;
            repeat: no-repeat;
            position: center;
        }
    }

    #infoWrapper {
        display: flex;
        flex-direction: column;
        margin-top: 75px;
        > p {
            animation: {
                duration: 2s;
                name: slidein;
            }
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

    @keyframes slidein {
        0% {
            transform: translateY(-1500%);
        }
        20% {
            transform: translateY(-1500%);
        }
    }

    #socialMediaWrapper {
        display: flex;
        align-items: center;
        animation: {
            duration: 2s;
            name: slideright;
        }
        > a {
            height: 100%;
            width: 12.5%;
            > img {
                max-width: 100%;
            }
            &:not(:last-child) {
                margin-right: 10px;
            }
            &:hover {
                opacity: 0.75;
            }
        }
    }

    @keyframes slideright {
        0% {
            transform: translateX(-300%);
        }
        20% {
            transform: translateX(-300%);
        }
    }

    #navHeader {
        width: 100%;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 1.5rem;
        z-index: 1;
        animation: {
            duration: 1s;
            name: slidein;
        }
        > p {
            color: white;
            cursor: pointer;
            font: {
                size: 2.75em;
                weight: 200;
                style: italic;
            }
            &:first-child {
                margin-right: 1.5rem;
            }
            &:hover {
                text-decoration: underline;
            }
        }
    }

    @include for-desktop-large {
        #infoWrapper {
            > p {
                &:first-child {
                    font-size: 8.5vw;
                }
                &:nth-child(2) {
                    font-size: 6vw;
                }
            }
        }
        #navHeader > p {
            font-size: 3vw;
            &:first-child {
                margin-right: 2.25rem;
            }
        }
    }

    @include for-desktop-only {
        #infoWrapper > p{
            &:first-child {
                font-size: 12vw;
            }
            &:nth-child(2) {
                font-size: 8vw;
            }
        }

        #navHeader > p{
            font-size: 5.5vw;
        }
    }

    @include for-tablet-small-only {
        #infoWrapper {
            align-items: center;
            text-align: center;
        }

        #socialMediaWrapper {
            justify-content: space-around;
            width: 100%;
            > a {
                margin: 0;
            }
        }

        #navHeader {
            padding: 0 10px;
        }
    }

    @include for-mobile-only {
        #socialMediaWrapper > a {
            width: 17.5%;
        }

        #navHeader > p:first-child{
            margin-right: 0.75rem;
        }
    }
</style>