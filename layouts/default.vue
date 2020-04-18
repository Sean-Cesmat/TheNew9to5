<template>
    <div id="app" :class="[$route.name]">
        <Nav />
        <main>
            <nuxt />
        </main>
    </div>
</template>
<script>
import Nav from '~/components/Nav.vue'

export default {
    components: {
        Nav,
    },
    mounted() {
        window.addEventListener('resize', this.resizeHandler)
    },
    methods: {
        resizeHandler() {
            console.log('hi')
            if (window.innerWidth < 1023) {
                this.$store.dispatch('updateIsMobile', true)
            } else {
                this.$store.dispatch('updateIsMobile', false)
            }
        },
    },
}
</script>
<style>
:root {
    --blue: #62c6f8;

    --nav-bg: black;
    --nav-color: white;
    --nav-color-hover: tomato;
    --nav-active: var(--blue);

    --nav-height: 72px;
    --zindex-nav: 990;
}
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

#app {
    width: 100%;
}
main {
    margin-top: var(--nav-height);
}
h1 {
    font-size: 42px;
}
h2 {
    font-size: 36px;
}
h3 {
    font-size: 28px;
}
h4 {
    font-size: 20px;
}
h5 {
    font-size: 16px;
}
</style>
