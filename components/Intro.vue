<template>
    <div class="intro">
        <h1 class="header">
            <span>i create <span class="text-gradient">magic</span></span> <br>
            <span>that lives on </span> <br>
             the web.
        </h1>

        <div class="project-link-div">
            <nuxtLink to="#projects" class="projects">VIEW PROJECTS</nuxtLink>
        </div>

        <div class="socials">
            <a class="brand" href="https://github.com/HoodieDan" target="__blank"><span class="github"><i class="link fa-brands fa-github"></i></span>GH</a>
            <a class="brand" href="https://instagram.com/the.7th.kind" target="__blank"><span class="instagram"><i class="link fa-brands fa-instagram"></i></span>IG</a>
            <a class="brand" href="https://twitter.com/osemuu" target="__blank"><span class="twitter"><i class="link fa-brands fa-twitter"></i></span>TW</a>
            <a class="brand" href="https://www.linkedin.com/in/daniel-obode-334144195/" target="__blank"><span class="linkedin"><i class="link fa-brands fa-linkedin"></i></span>IN</a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.intro {
    padding: 5rem 3.5rem;
    position: relative;
}
.header {
    font-size: 6rem;
    line-height: 100%;
    letter-spacing: -.03em;
}

.text-gradient {
    color: transparent;
    background: linear-gradient(to left, #6bc5f8, #cf59e6, #8000ff);
    background-size: 10000px 100%;
    animation: bg 15s linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
}

.project-link-div {
    position: relative;
}

.projects {
    font-size: 1.1rem;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}

.projects::before {
    content: "";
    background: #fff;
    height: 1px;
    width: 5%;
    position: absolute;
    top: 105%;
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);    
    -moz-transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.projects:hover:before {
    width: 11%;
}

.socials {
    width: 100%;
    padding-top: 3rem;
    position: relative;
    text-align: right;
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
}

.brand::before {
    content: "";
    background: #fff;
    height: 1px;
    width: 2%;
    position: absolute;
    top: 105%;
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);    
    -moz-transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: width 450ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.brand:hover:before {
    width: 4.5%;
}

@keyframes bg {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 10000px;
  }
}

@media (max-width: 768px) {
    .intro {
        padding: 6rem 1.5rem;
    }
    .header {
        font-size: 4.5rem;
    }
    .brand {
        padding-right: 1rem;
    }
}
</style>