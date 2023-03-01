<template>
	<div class="body">

    <nav>
      <div class="logo-container nav-logo-container">
        <svg class="logo-border" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="59" width="5" height="22" transform="rotate(-90 1 59)" fill="white" stroke="white" stroke-width="2" />
          <rect x="6" y="59" width="5" height="22" transform="rotate(180 6 59)" fill="white" stroke="white" stroke-width="2" />
          <rect x="1" y="1" width="5" height="22" fill="white" stroke="white" stroke-width="2" />
          <rect x="1" y="6" width="5" height="22" transform="rotate(-90 1 6)" fill="white" stroke="white" stroke-width="2" />
          <rect x="37" y="59" width="5" height="22" transform="rotate(-90 37 59)" fill="white" stroke="white" stroke-width="2" />
          <rect x="54" y="37" width="5" height="22" fill="white" stroke="white" stroke-width="2" />
          <rect x="59" y="23" width="5" height="22" transform="rotate(180 59 23)" fill="white" stroke="white" stroke-width="2" />
          <rect x="37" y="6" width="5" height="22" transform="rotate(-90 37 6)" fill="white" stroke="white" stroke-width="2" />
        </svg>

        <div class="logo nav-logo">
          <div class="d-container">
            <div class="d"></div>
          </div>
          <div class="o"></div>
        </div>
      </div>

      
      <div class="nav-items">
          <nuxt-link class="nuxt-link projects-link" to="#projects">PROJECTS</nuxt-link>
          <nuxt-link class="nuxt-link about-link" to="#about">ABOUT</nuxt-link>
          <nuxt-link class="nuxt-link contact-link" to="#contact">CONTACT</nuxt-link>
      </div>
    </nav>

		<div class="welcome">
      <div class="loader-container">
        <svg class="logo-border bord" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="59" width="5" height="22" transform="rotate(-90 1 59)" fill="white" stroke="white" stroke-width="2" />
          <rect x="6" y="59" width="5" height="22" transform="rotate(180 6 59)" fill="white" stroke="white" stroke-width="2" />
          <rect x="1" y="1" width="5" height="22" fill="white" stroke="white" stroke-width="2" />
          <rect x="1" y="6" width="5" height="22" transform="rotate(-90 1 6)" fill="white" stroke="white" stroke-width="2" />
          <rect x="37" y="59" width="5" height="22" transform="rotate(-90 37 59)" fill="white" stroke="white" stroke-width="2" />
          <rect x="54" y="37" width="5" height="22" fill="white" stroke="white" stroke-width="2" />
          <rect x="59" y="23" width="5" height="22" transform="rotate(180 59 23)" fill="white" stroke="white" stroke-width="2" />
          <rect x="37" y="6" width="5" height="22" transform="rotate(-90 37 6)" fill="white" stroke="white" stroke-width="2" />
        </svg>

        <div class="logo nav-logo">
          <div class="d-container">
            <div class="d"></div>
          </div>
          <div class="o"></div>
        </div>
      </div>
			<h1 class="heading">Daniel Obode</h1>
			<h3 class="sub-heading">Frontend Developer</h3>
			<!-- <div class="loader-wrapper">
				<div class="loader"></div>
			</div> -->
		</div>

		<div class="content">
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>

	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const timeline = gsap.timeline({ ease: 'Expo.easeOutIn', duration: 1.8, delay:0 })
onMounted(() => {
	timeline.play(0)
	timeline.fromTo(
		'.welcome',
		{
			width: '0vw',
			opacity: 0,
		},
		{
			width: '100vw',
			opacity: 1,
			duration: 0.8,
		}
	)

	timeline.to('.loading', { display:'none' })
  timeline.to('.body', { alignItems: 'start', justifyContent: 'flex-start' })
	timeline.fromTo('.logo', { y: '-30px', opacity: 0 }, { y: 0, opacity: 1 })
	timeline.fromTo('.heading', { y: '-30px', opacity: 0 }, { y: 0, opacity: 1 })
	timeline.fromTo('.sub-heading', { y: '-30px', opacity: 0 }, { y: 0, opacity: 1 })
  timeline.fromTo('.bord', { animation: 'none' }, { animationName: 'spin', animationDuration: '1.5s', animationDirection: 'forwards' })
	timeline.fromTo('.loader-wrapper',{y: '-30px', opacity: 0}, {y:0, opacity: 1 })
	timeline.fromTo('.loader', { width: '0%' }, { width: '100%', duration: 2.3 })
	timeline.fromTo('.welcome',{x:0, display:'flex'}, { x: '100vw', display: 'none' })
	timeline.fromTo('.content', { y: '-30px' }, { y: 0, opacity: 1, stagger: 0.35 })
  timeline.fromTo('.nav-items', { width: '4.4rem', borderRadius: '50%',opacity: 0 }, { width: '55vw', borderRadius: '32px',opacity: 1 })
  timeline.fromTo('.nuxt-link', { y: '-30px', opacity: 0 }, { y: 0, opacity: 1, stagger: 0.35 })
  timeline.fromTo('.nav-logo-container', { opacity: 0 }, { opacity: 1 })
})

const replay = () => timeline.seek(0)
</script>

<style>
*::-webkit-scrollbar {
  width: 0.3em;
}
 
*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.body {
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow-x: hidden;
	background: #101010;
	font-family: 'Poppins';
	color: #fff;
}

nav {
  width: 100vw;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: relative;
}

.nav-items {
    height: 4.4rem;
    width: 55vw;
    display: flex;
    justify-content: space-around;
    align-self: flex-start;
    backdrop-filter: blur(10px);
    background-color: #10101a; /* Fallback color */
    background-color: rgba(240, 224, 224, 0.1); 
    border: 1px solid #252525;
    position: fixed;
    right: 3.5rem;
    border-radius: 32px;
    z-index: 9;
}

.nav-logo-container {
  transform: scale(0.8);
}

.nuxt-link {
  align-self: center;
  display: inline-block;
  letter-spacing: 0.1rem;
  font-size: 0.7rem;
}

.nuxt-link::before {
    content: "";
    background: #fff;
    height: 1px;
    width: 30%;
    position: absolute;
    top: 100%;
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);    
    -moz-transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.nuxt-link:hover:before {
    width: 60%;
}

.welcome {
	height: 100vh;
	width: 100vw;
	position: absolute;
	background: linear-gradient(to left, #cf59e6, #8000ff);
  /* background: #10101a; */
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	letter-spacing: 2px;
	color: #fff;
  z-index: 10;
  background-size: 10000px 100%;
  animation: bg 15s linear infinite;
}

.heading {
	font-size: 2rem;
	margin-bottom: 0px;
	opacity: 0;
}

.sub-heading {
	font-size: 1rem;
	font-weight: 100;
	letter-spacing: 2px;
	margin-bottom: 1.2rem;
	opacity: 0;
}

.loader-wrapper {
	height: 2px;
	width: 10rem;
	background: #ededed;
	border-radius: 100px;
	opacity: 0;
}

.loader {
	height: 0.2rem;
	width: 10rem;
	background: #fff;
	border-radius: 100px;
	background: #585858;
}

.content {
	opacity: 0;
  width: 100vw;
}

div.circle {
  width: 5rem;
  height: 5rem;
  border-radius: 1px;
  
}

.logo-container {
  cursor: pointer;
  position: relative;
}

.logo-border {
  transform: rotate(45deg);
}

.logo-container:hover > .logo-border {
  animation: spin 1.5s forwards;
}

div.logo {
  display: flex;
}

.nav-logo {
  transform: scale(0.6);
  position: relative;
  bottom: 3.5rem;
  right: 0.4rem;
}

div.d-container {
  transform: rotate(90deg);
}

.d {
    display: block ;
    position: relative;
    box-sizing: border-box;
    width: 2.3rem ;
    height: 1.5rem;

    /*  01  */
    border-left-width: 6px;    
    border-left-style: solid;
    border-left-color: transparent;

    /*  02  */
    border-right-width: 6px;
    border-right-style: solid;
    border-right-color: transparent;

    /*  03  */
    border-bottom-width: 6px;
    border-bottom-style: solid;
    border-bottom-color: initial;

}

.d::before {
    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 2rem;
    height: 2rem;

    /*  Left Border */
    border-left-width: 6px;
    border-left-style: solid;
    border-left-color: initial;

    /*  Top Border */
    border-top-width: 6px;
    border-top-style: solid;
    border-top-color: initial;

    /*  Bottom Border */
    border-bottom-width: 6px;
    border-bottom-style: solid;
    border-bottom-color: transparent;

    /*  Rotate it to 45deg and skew  */
    transform: rotate(45deg) skew(10deg,10deg);

    /*  Position it until you meet the corners  */
    left: -2px;
    bottom: -16px
}

.d {
    position: relative;
    transform: scale(var(--ggs,1));
    width: 2.5rem;
    height: 1.5rem;
    border-left: 6px solid transparent;
    border-bottom: 6px solid
}
.d,
.d::before {
    display: block;
    box-sizing: border-box;
    border-right: 6px solid transparent
}
.d::before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-left: 6px solid;
    border-top: 6px solid;
    border-bottom: 6px solid transparent;
    transform: rotate(45deg) skew(10deg,10deg);
    left: -2px;
    bottom: -20px
}

.o {
  border: 6px solid #fff;
  /* border-radius: 3px; */
  height: 2.3rem;
  width: 1.5rem;
}

@keyframes nebulahero {
	0% {-webkit-filter: hue-rotate(0deg);}
	100% {-webkit-filter: hue-rotate(-360deg);}
}

@keyframes spin {
	0% {transform: rotate(45deg) scale(1);}
    50%{transform: rotate(135deg) scale(1.5);}
    100%{transform: rotate(225deg) scale(1); }
}

@media (max-width: 575px) {
  nav {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .nav-items {
    width: 70vw;
    right: 1rem;
  }

  .logo-container {
    transform: scale(0.7);
  }

  .heading {
    font-size: 1.2rem;
  }

  .sub-heading {
    font-size: 0.6rem;
  }

  .loader-logo {
    transform: scale(0.9);
  }
}
</style>
