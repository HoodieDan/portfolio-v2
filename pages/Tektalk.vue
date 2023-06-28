<template>
    <div class="body">
        <h1 class="tektalk-gradient">TEKTALK</h1>

        <div class="about-site">
            <div class="left">

                <h3>About Tektalk</h3>
                <p>Tektalk is a social network aimed at but not limited to individuals in the tech industry. It was created 
                    by me, <span class="tektalk-gradient">Daniel Obode</span> who worked on the frontend and <span class="tektalk-gradient">Ndujekwu Ugochukwu</span> who worked on the backend of the website.
                    We got the idea when we needed to collaborate with a couple developers on a particular project and we weren't able 
                    to find any in short notice. This got us thinking then we decided to create a platform for people involved in or interested in any of the
                    vast areas of the tech industry.
                </p>

                <br>

                <h3>Features of Tektalk</h3>
                <p>Tektalk includes features such as: <br>
                    - Status Updates. <br>
                    - Uploading of images. <br>
                    - User Authentication. <br>
                    - Liking of posts. <br>
                    - Commenting on posts. <br>
                    - Profile updates. <br>
                    - Following and unfollowing of users. <br>
                    - Creation of <span class="tektalk-gradient">Events</span>. <br>
                    - Joining <span class="tektalk-gradient">Talks</span> (<span class="tektalk-gradient"> Talks</span> in tektalk refer to a particular niche in the tech industry.)
                </p>

                <br>

                <h3>Technologies used in Tektalk</h3>
                <p>Technologies used in tektalk include: <br>
                    - Vue.js <br>
                    - Vee-Validate <br>
                    - Pinia. <br>
                    - Cypress. <br>
                    - Javascript. <br>
                    - Bootstrap. <br>
                    - Vueuse motion.
                </p>

                <br>

                <p>View the site live at <a href="https://tektalk.vercel.app" class="tektalk-gradient" target="_blank">Tektalk</a></p>
            </div>
            <div class="right">
                <img src="../assets/images/Tektalk-logo.jpeg" alt="tektalk logo">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
const lerp = (start: number, end: number, amount: number) => {
	return (1 - amount) * start + amount * end
}

const overscrollOptions = {
  effect: 'bounce',
  damping: 0.1,
}

const options = {
  damping: 0.06,
  alwaysShowTracks: false,
  thumbMinSize: 5,
  plugins: {
    overscroll: overscrollOptions,
  },
}

const cursor = document.createElement('div')
cursor.className = 'cursor'

const cursorF = document.createElement('div')
cursorF.className = 'cursor-f'
let cursorX = 0
let cursorY = 0
let pageX = 0
let pageY = 0
const size = 8
const sizeF = 36
const followSpeed = 0.16

document.body.appendChild(cursor)
document.body.appendChild(cursorF)

if ('ontouchstart' in window) {
    cursor.style.display = 'none'
    cursorF.style.display = 'none'
}

cursor.style.setProperty('--size', size + 'px')
cursorF.style.setProperty('--size', sizeF + 'px')

window.addEventListener('mousemove', function (e) {
    pageX = e.pageX
    pageY = e.pageY
    cursor.style.left = e.pageX - size / 2 + 'px'
    cursor.style.top = e.pageY - size / 2 + 'px'
})

function loop() {
    cursorX = lerp(cursorX, pageX, followSpeed)
    cursorY = lerp(cursorY, pageY, followSpeed)
    cursorF.style.top = cursorY - sizeF / 2 + 'px'
    cursorF.style.left = cursorX - sizeF / 2 + 'px'
    requestAnimationFrame(loop)
}
loop()

// Cursor Invent Target Touches
let startY: any
let endY: any
let clicked = false

//Mouse Wheel Scroll Transition
let scrollTimeout: any
function wheel(e: any) {
    clearTimeout(scrollTimeout)
}
window.addEventListener('mousewheel', wheel, false)
window.addEventListener('wheel', wheel, false)

</script>

<style scoped>
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
    padding: 2rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow-x: hidden;
	background: #101010;
	font-family: 'Poppins';
	color: #fff;
}
.cursor {
    background-color: #FFF;
}
.about-site {
    display: flex;
}
.left {
    width: 70%;
}
.right {
    padding: 1rem;
    width: 30%;
    position: relative;
}
.right img {
    border-radius: 1rem;
    position: relative;
    width: 100%;
    height: auto;
}

@media (max-width: 768px) {
    .about-site {
        flex-direction: column-reverse;
    }
    .left {
        width: 100%;
    }
    .right {
        padding: 1rem;
        width: 100%;
        text-align: center;
        position: relative;
    }
    .right img {
        border-radius: 1rem;
        position: relative;
        width: 50%;
        height: auto;
    }
}
</style>