<template>
    <div class="container">
        <h1>Some Cool Stuff I've Built.</h1>

        <div class="projects">
            <div class="project">
                <div class="project-left">
                    <div class="distortion"></div>
                </div>
                <div class="project-right">
                    <h2>Tektalk</h2>

                    <div class="link-div">
                        <a class="project-link" href="https://tektalk.vercel.app" target="__blank">VISIT WEBSITE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import hoverEffect from 'hover-effect'
import { onMounted } from 'vue'

// const img_1 = new URL('../assets/images/Tektalk.png', import.meta.url) as any
// const img_2 = new URL('../assets/images/Tektalk-logo.jpeg', import.meta.url) as any
// const diss = new URL('../assets/images/diss.png', import.meta.url) as any
onMounted(()=>{
	new hoverEffect({
		parent: document.querySelector('.distortion'),
		intensity: .25,
		image1: require('../assets/images/Tektalk.png'),
		image2: require('../assets/images/Tektalk-logo.jpeg'),
		displacementImage: require('../assets/images/diss.png'),
		// imagesRatio: 380 / 300
	})
})
</script>

<style scoped>
.container {
}

h1 {
    padding-left: 3.5rem;
    padding-bottom: 1rem;
    font-size: 2.5rem;
}

.projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project::before {
    content: "";
    display: block;
    position: absolute;
    top: -3rem;
    right: -2rem;
    width: 8rem;
    height: 8rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('../assets/images/one.svg');
}

.project {
    margin-top: 5rem;
    padding: 3rem;
    border: 1px solid #252525;
    width: 60%;
    border-radius: 32px;
    backdrop-filter: blur(45px);
    background: linear-gradient(180deg, #101212 , #101010);
    display: flex;
}

.project-left {
    width: 40%;
    height: 50vh;
    padding-right: 2rem;
}

.project-left.distortion {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.project-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.link-div {
    position: relative;
}

.project-link {
    font-size: 1rem;
    color: #fff;
    font-weight: 400;
    text-decoration: none;
}

.project-link::before {
    content: "";
    background: #fff;
    height: 1px;
    width: 50%;
    position: absolute;
    top: 105%;
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);    
    -moz-transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.project-link:hover:before {
    width: 100%;
}
</style>