<template>
    <div id="app" :class="[$route.name]">
        <Nav />
        <transition name="navdrawer">
            <MobileNav v-if="$store.state.isNavOpen" />
        </transition>
        <main>
            <nuxt />
        </main>
    </div>
</template>
<script>
import Nav from '~/components/Nav.vue'
import MobileNav from '~/components/MobileNav.vue'
import fileLoaders from '@/mixins/fileLoaders'
import wallPreload from '~/assets/img/wall-light.jpg'
import pinboardPreload from '~/assets/img/pinboard.jpg'

export default {
    components: {
        Nav,
        MobileNav,
    },
    mixins: [fileLoaders],
    created() {
        this.$store.dispatch('getPages')
    },
    mounted() {
        this.resizeHandler()
        window.addEventListener('resize', this.resizeHandler)
        this.preloadImage(wallPreload)
        this.preloadImage(pinboardPreload)
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
