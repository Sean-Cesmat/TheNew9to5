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
    background: #111;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>
