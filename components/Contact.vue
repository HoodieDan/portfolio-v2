<template>
	<div>
        <div class="bod center" id="contact">
        
            <h1 class="header">Get in <span class="text-gradient">touch</span>!</h1>
            <p class="text-center header-baby">I am currently looking for new opportunities. If you think we can make magic together, contact me and let's talk!</p>
            <p class="text-center">Click on <strong class="text-gradient">the card!</strong></p>

            <div class="contain" @click.self="onClick">
                <p class="card-name" @click="onClick">Frontend Developer</p>
                <h1 class="card-balance" @click="onClick">Daniel O. Obode</h1>
                <div class="logo-contain card-logo" @click="onClick">
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

                    <div class="logo">
                        <div class="d-container">
                            <div class="d"></div>
                        </div>
                        <div class="o"></div>
                    </div>
                </div>

                <a class="sim" href="mailto:obodedaniel3@gmail.com"><i class="fa-regular fa-envelope"></i></a>

                <a href="tel:+2349039335002" class="card-number">+234 903 933 5002</a>
                <p class="due-date">04/05</p>

                <img src="../assets/images/pattern.png" class="card-logo" alt="" @click="onClick" />
            </div>

        </div>
        <div class="connect">
            <h2 class="text-gradient">Don't be shy!</h2>
            <p>Connect with me on my socials!</p>

            <div class="socials">
                <a class="brand" href="https://github.com/HoodieDan" target="__blank"><span class="github"><i class="link fa-brands fa-github"></i></span><span class="network">GITHUB</span><span class="sf">GH</span></a>
                <a class="brand" href="https://instagram.com/the.7th.kind" target="__blank"><span class="instagram"><i class="link fa-brands fa-instagram"></i></span><span class="network">INSTAGRAM</span><span class="sf">IG</span></a>
                <a class="brand" href="https://twitter.com/osemuu" target="__blank"><span class="twitter"><i class="link fa-brands fa-twitter"></i></span><span class="network">TWITTER</span><span class="sf">TW</span></a>
                <a class="brand" href="https://www.linkedin.com/in/daniel-obode-334144195/" target="__blank"><span class="linkedin"><i class="link fa-brands fa-linkedin"></i></span><span class="network">LINKEDIN</span><span class="sf">IN</span></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {gsap} from 'gsap'
import { onMounted } from 'vue'

const t1 = gsap.timeline({ paused: true, reversed: true })
let watch = false


const onClick = () => {
	if (!watch) {
		t1.play()
		watch = true
	} else {
		t1.reverse()
		watch = false
	}
}
onMounted(()=>{
	t1.to('.contain', {ease: 'power1.inOut',height: 280,},0)
	t1.to('.sim', {	ease: 'power1.inOut', bottom: 40, opacity: 0.5,}, 0.5)
	t1.to('.card-logo',	{ease: 'power1.inOut',right: -170,},0.6)
	t1.to('.logo-contain', { ease: 'power1.inOut',left: 30,	top: 45,},0.5)
	t1.to('.card-balance',{ease: 'power1.inOut',y: 80,x: 20,scale: 1.1,},0.5)
	t1.to('.card-name', { ease: 'power1.inOut',	y: 80,},0.5)
	t1.to('.card-number',{ease: 'power1.inOut',	right: 40,opacity: 0.5,},0.5)
	t1.to( '.due-date', { ease: 'power1.inOut', right: 40, opacity: 0.5, }, 0.5 )
})



</script>

<style scoped>

.bod {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	font-family: 'poppins', sans-serif;
	line-height: 1.7;
    padding: 1rem !important;
	position: relative;
	background: transparent;
	height: 40rem;
    max-width: 96vw !important;
}

.header {
    text-align: center;
    margin-top: 3rem;
}

.contain {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: linear-gradient(to right bottom, #323941, #061018);
	width: 520px;
    max-width: 98%;
	height: 120px;
	border-radius: 20px;
	box-shadow: 0px 56px 72px -30px rgba(50, 55, 63, 0.66);
	padding: 30px;
	cursor: pointer;
	overflow: hidden;
    margin-top: 3.5rem;
}

.contain -container {
	width: 50px;
	position: absolute;
	right: 30px;
	top: 45px;
}

.contain .card-name {
	font-size: 14px;
	color: rgba(255, 255, 255, 0.473);
    margin-bottom: 0;
}

.contain .card-balance {
	color: #fff;
	font-size: 22px;
    margin-top: 0;
}

.contain .sim {
	width: 40px;
	position: absolute;
	bottom: -40px;
	opacity: 0;
    color: #FFFFFF79;
    transition: all 0.8s ease-out;
    font-size: 1.5rem;
}

.sim:hover {
    color: #fff;
}

.logo {
    position: relative;
    transform: scale(0.6);
    bottom: 4.2rem;
    right: 6.6rem;
}

.logo-border {
    position: relative;
    right: -20px;
    bottom: 10px;
}

div.logo-contain.card-logo {
    top: 40px;
    right: -520px;
    left: 400px;
}

.logo-contain:hover > .logo-border {
  animation: none;
}

.contain .card-logo {
	position: absolute;
	top: -40px;
	right: -550px;
	height: 200px;
	/* transform: rotate(-12deg); */
}

.contain .card-number {
	right: -200px;
	position: absolute;
	font-size: 16px;
	color: rgba(255, 255, 255, 0.473);
	bottom: 56px;
    margin-bottom: 0.5rem;
    transition: all 0.8s ease-out;
}

.card-number:hover {
    color: #fff;
}

.contain .due-date {
	right: -100px;
	position: absolute;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.473);
	bottom: 30px;
}

.connect {
    padding: 3.5rem;
    position: relative;
    bottom: 4.5rem;
    margin-bottom: 2rem;
}

.socials {
    width: 100%;
    padding-top: 1rem;
    /* padding-left: 3rem; */
    position: relative;
}

.sf {
    display: none;
}

.link {
    /* font-size: 1.5rem; */
    padding-right: 0.3rem;
    padding-left: 0.3rem;
    /* color: #fff; */
}

.github {
    background: #323232 ;
    margin-right: 0.3rem;
    border-radius: 5px;
}

.instagram {
    position: relative;
    border-radius: 5px;
    margin-right: 0.3rem;
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}

.twitter {
    background: #00acee ;
    margin-right: 0.3rem;
    border-radius: 5px;
}

.linkedin {
    margin-right: 0.3rem;
    border-radius: 5px;
    background-color: #0072b1 ;
}

.brand {
    padding-right: 2rem;
    color: #fff;
    font-size: 0.8rem;
}

.brand::before {
    content: "";
    background: #fff;
    height: 1px;
    width: 2%;
    position: absolute;
    top: 108%;
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);    
    -moz-transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.brand:hover:before {
    width: 6%;
}

@media (max-width: 575px) {
    .bod {
        height: 40rem;
    }
    .logo {
        right: 6.1rem;
    }

    .header-baby {
        font-size: 0.8rem;
    }

    .connect {
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .brand::before {
        width: 7%;
    }

    .brand:hover:before {
        width: 15%;
    }

    .brand {
        font-size: 0.7rem;
    }

    .brand:nth-of-type(1) {
        display: none;
    }

    p {
        font-size: 0.8rem;
    }
}

@media (max-width: 420px) {
    .logo {
        right: 4.9rem;
    }

    .contain {
        padding: 1.5rem;
        top: 55%;
    }
}

@media (max-width: 400px) {
    .logo {
        right: 4.3rem;
    }
    .network {
        display: none;
    }
    .sf {
        display: inline-block;
    }
}

@media (max-width: 360px) {
    .contain.card-logo {
        right: -250px;
    }

    .logo {
        right: 4.2rem;
    }
}

</style>
