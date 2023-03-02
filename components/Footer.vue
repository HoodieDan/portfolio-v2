<template>
    <div class="foot">
        <div class="cont">
            <div class="logo-container">
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
            <p>Top 10% VueJS Developer.</p>
        </div>

        <div>
            <a href="https://github.com/HoodieDan" target="__blank" class="link"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.cont {
    display: flex;
}

.cont p {
    font-size: 0.7rem;
    align-self: center;
}
.logo-container {
    height: 3.5rem;
}
.foot {
    border-top: 1px solid #fff;
    padding: 0.75rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-container {
    transform: scale(0.6);
}

h2 {
    margin-top: 0;
    margin-bottom: 0;
}

p {
    font-weight: 300;
}

.link {
    align-self: center;
    font-size: 1.3rem;
    color: #A9A9A9;
    transition: all 0.8s;
}

.link:hover {
    color: #fff;
}

@media (max-width:575px) {
    .logo-container {
        transform: scale(0.4);
    }

    .foot {
        padding-left: 0;
    }
}
</style>