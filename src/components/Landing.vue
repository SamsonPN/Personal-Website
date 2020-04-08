<template>
    <div id="landing">
        <div id="navHeader">
            <p @click="scrollToPage('projects')">Projects</p>
            <p @click="scrollToPage('skills')">Skills</p>
        </div>
        <div id="infoWrapper">
            <p>Samson Nguyen</p>
            <p>Full-Stack Developer</p>
            <div id="socialMediaWrapper">
                <a href="https://github.com/SotaSamson96">
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
                <a href="https://google.com">
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
    #landing {
        width: 100%;
        height: 100vh;
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
        > p {
            animation: {
                duration: 1.25s;
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
        from {
            transform: translateY(-500%);
        }
    }

    #socialMediaWrapper {
        display: flex;
        align-items: center;
        animation: {
            duration: 1.25s;
            name: slideright;
        }
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

    @keyframes slideright {
        from {
            transform: translateX(-100%);
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
                margin-right: 25px;
            }
            &:hover {
                text-decoration: underline;
            }
        }
    }

    @media only screen and (max-width: 50em) {
        #infoWrapper > p{
            &:first-child {
                font-size: 5em;
            }
            &:nth-child(2) {
                font-size: 3em;
            }
        }

        #navHeader > p{
            font-size: 2.25em;
        }
    }

    @media only screen and (max-width: 37.188em) {
        #infoWrapper {
            align-items: center;
            > p {
                text-align: center;
                &:first-child {
                    font-size: 3.5em;
                }
                &:nth-child(2) {
                    font-size: 1.5em;
                }
            }
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

    @media only screen and (max-width: 26em) {
        #infoWrapper > p {
            &:first-child {
                font-size: 25vw;
            }
            &:nth-child(2) {
                font-size: 10vw;
            }
        }

        #socialMediaWrapper > a {
            width: 17.5%;
        }
    }

    @media only screen and (max-width: 20em) {
        #navHeader {
            justify-content: center;
        }
    }
</style>