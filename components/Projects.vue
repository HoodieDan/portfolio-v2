<template>
    <div class="" id="projects">
        <h1 class="header">Some <span class="text-gradient">Cool Stuff</span> I've Built.</h1>

        <div class="projects">
            
            <!-- Project one -->
            <div class="project row">
                <div class="project-left col-5" data-displacement="../assets/images/diss.png">
                    <!-- <div class="distortion"></div> -->
                    <img src="https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tektalk">
                    <img class="img-fluid project-image" src="../assets/images/Tektalk-logo.jpeg" alt="Tektalk Logo">
                    <img src="../assets/images/diss.png" alt="displacement image">
                </div>
                <div class="project-right col-7">
                    <div>
                        <h1 class="tektalk-gradient">Tektalk</h1>
                        <p>Meet people in the tech space just like you!</p>
                    </div>

                    <div>
                        <div class="link-div">
                            <a class="project-link" href="https://tektalk.vercel.app" target="__blank">VISIT WEBSITE</a>
                        </div>
                    </div>

                    <div class="links">
                        <a href="https://github.com/HoodieDan/Tektalk" target="__blank" class="link"><i class="fa-brands fa-github"></i></a>

                        <button class="info"><i class="fa-solid fa-info"></i></button>
                    </div>
                </div>
            </div>

            <!-- Project two -->
            <div class="project row">
                <div class="project-left col-5" data-displacement="../assets/images/diss.png">
                    <!-- <div class="distortion"></div> -->
                    <img src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Real Estate">
                    <img class="img-fluid project-image" src="../assets/images/real-estate-logo.png" alt="Real Estate Logo">
                    <img src="../assets/images/diss.png" alt="displacement image">
                </div>
                <div class="project-right col-7">
                    <div>
                        <h1 class="real-estate-color">Real Estate</h1>
                        <p>Turn your dream house to your home!</p>
                    </div>

                    <div>
                        <div class="link-div">
                            <a class="project-link" href="https://realest-estate.netlify.app" target="__blank">VISIT WEBSITE</a>
                        </div>
                    </div>

                    <div class="links">
                        <a href="https://github.com/HoodieDan/Real-Estate" target="__blank" class="link"><i class="fa-brands fa-github"></i></a>

                        <button class="info"><i class="fa-solid fa-info"></i></button>
                    </div>
                </div>
            </div>

            <!-- Project three -->
            <div class="project row">
                <div class="project-left col-5" data-displacement="../assets/images/diss.png">
                    <!-- <div class="distortion"></div> -->
                    <img src="https://images.pexels.com/photos/4709825/pexels-photo-4709825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Drew Music">
                    <img class="img-fluid project-image" src="../assets/images/drew-music-logo.png" alt="Drew Music Logo">
                    <img src="../assets/images/diss.png" alt="displacement image">
                </div>
                <div class="project-right col-7">
                    <div>
                        <h1 class="drew-music-color">Drew Music</h1>
                        <p>There is a sound for everyone, find yours!</p>
                    </div>

                    <div>
                        <div class="link-div">
                            <a class="project-link" href="https://drew-music.vercel.app" target="__blank">VISIT WEBSITE</a>
                        </div>
                    </div>

                    <div class="links">
                        <a href="https://github.com/HoodieDan/Drew-Music" target="__blank" class="link"><i class="fa-brands fa-github"></i></a>

                        <button class="info"><i class="fa-solid fa-info"></i></button>
                    </div>
                </div>
            </div>

            <!-- Project four -->
            <div class="project row">
                <div class="project-left col-5"  data-displacement="../assets/images/diss.png">
                    <!-- <div class="distortion"></div> -->
                    <img src="https://images.pexels.com/photos/9129527/pexels-photo-9129527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Twitter">
                    <img class="img-fluid project-image" src="../assets/images/twitter-logo.jpg" alt="Twitter Logo">
                    <img src="../assets/images/diss.png" alt="displacement image">
                </div>
                <div class="project-right col-7">
                    <div>
                        <h1 class="twitter-color">Twitter Clone</h1>
                        <p>No, it's not actually Twitter but don't worry, I had a hard time differentiating it too.</p>
                    </div>

                    <div>
                        <div class="link-div">
                            <a class="project-link" href="https://hoodietwitter.vercel.app" target="__blank">VISIT WEBSITE</a>
                        </div>
                    </div>

                    <div class="links">
                        <a href="https://github.com/HoodieDan/nuxtjs-twitter-clone" target="__blank" class="link"><i class="fa-brands fa-github"></i></a>

                        <button class="info"><i class="fa-solid fa-info"></i></button>
                    </div>
                </div>
            </div>

            <p>Check out the rest of them on my <span class="link-div"><a href="https://www.github.com/hoodiedan" target="__blank" class="project-link">Github</a></span> <i class="fa-regular fa-heart"></i></p>

        </div>

    </div>
</template>

<script setup lang="ts">
import hoverEffect from 'hover-effect';
import { onMounted } from 'vue';

onMounted(()=>{
    // image hover effect
    Array.from(document.querySelectorAll(".project-left")).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll("img"));
        console.log(imgs);
        
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].attributes.src.nodeValue,
          image2: imgs[1].attributes.src.nodeValue,
          displacementImage: imgs[2].attributes.src.nodeValue,
        });
      }
    );
})
</script>

<style scoped>
.container {
    max-width: 100vw;
}

h1.header {
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
}

.project:nth-of-type(1)::before {  
    background-image: url('../assets/images/one.svg');
}

.project:nth-of-type(2)::before {  
    background-image: url('../assets/images/two.svg');
}

.project:nth-of-type(3)::before {  
    background-image: url('../assets/images/three.svg');
}

.project:nth-of-type(4)::before {  
    background-image: url('../assets/images/four.svg');
}

.project {
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 3rem;
    border: 1px solid #252525;
    width: 60%;
    border-radius: 32px;
    backdrop-filter: blur(54px);
    background: linear-gradient(180deg, rgba(240, 224, 224, 0.1) , #101010);
    display: flex;
}

.project-left {
    width: 40%;
    height: 25rem;
    margin-right: 2rem;
    border-radius: 16px;
    position: relative;
}

.project-left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 32px;
    border: 1px solid #252525;
    position: absolute;
    display: none;
}

.project-left.distortion {
    max-width: 100%;
    max-height: 100%;
    width: 20rem;
    height: 40rem;
    /* object-fit: cover; */
}

.project-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.link-div {
    position: relative;
    display: inline-block;
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

.links {
    display: flex;
    position: relative;
}

.link {
    font-size: 1.2rem;
    color: #A9A9A9;
    transition: all 0.8s ease-out;
    margin-right: 1rem;
}

.fa-github::before {
    position: relative;
    top: 0.3rem;
}

.link:hover {
    color: #fff;
}

button.info {
    background: transparent;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 1px solid #A9A9A9;
    color: #A9A9A9;
    align-self: flex-end;
    transition: all 0.8s ease-out;
    cursor: pointer;
}

button.info:hover {
    color: #fff;
    border-color: #fff;
}

button.info i {
    font-size: 0.8rem;
}

canvas {
    position: absolute;
}

@media (max-width:575px) {
    h1.header {
        padding-left: 1rem;
        padding-right: 1rem;
        text-align: center;
        font-size: 1.9rem;
    }

    div.projects {
        max-width: 95vw !important;
        padding-left: 1rem;
        padding-right: 1rem;
        /* display: block; */
    }

    div.project::before {
        top: -3rem;
        right: 0rem;
        width: 7rem;
        height: 7rem;
    }

    div.project {
        width: 90%;
        display: block;
        /* backdrop-filter: blur(0px); */
    }

    div.project-left {
        width: 100%;
        margin-right: 0;
    }

    div.links {
        margin-top: 1rem;
    }
}
</style>