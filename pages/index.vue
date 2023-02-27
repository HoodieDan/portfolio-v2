<template>
	<div class="body px-5">

		<div class="welcome">
			<h1 class="heading">Daniel Obode</h1>
			<h3 class="sub-heading">Frontend Developer</h3>
			<div class="loader-wrapper">
				<div class="loader"></div>
			</div>
		</div>

		<div class="content">
      <Intro />
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
	timeline.fromTo('.heading', { y: '-30px', opacity: 0 }, { y: 0, opacity: 1 })
	timeline.fromTo('.sub-heading', { y: '-30px', opacity: 0 }, { y: 0, opacity: 1 })
	timeline.fromTo('.loader-wrapper',{y: '-30px', opacity: 0}, {y:0, opacity: 1 })
	timeline.fromTo('.loader', { width: '0%' }, { width: '100%', duration: 2.3 })
	timeline.fromTo('.welcome',{x:0, display:'flex'}, { x: '100vw', display: 'none' })
	timeline.fromTo('.content', { y: '-30px' }, { y: 0, opacity: 1, stagger: 0.35 })
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
	height: 100vh;
	width: 100vw;
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

.welcome {
	height: 100vh;
	width: 100vw;
	position: absolute;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	letter-spacing: 2px;
	color: #323232;
}

.heading {
	font-size: 3rem;
	margin-bottom: 0px;
	opacity: 0;
}

.sub-heading {
	font-size: 1.5rem;
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
  width: 100%;
}
</style>
