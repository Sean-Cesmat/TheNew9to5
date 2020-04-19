<template>
    <div class="mobile-nav w-full">
        <div class="flex flex-col items-end justify-center">
            <nuxt-link to="/">
                <span @click="closeNav">Home</span>
            </nuxt-link>
            <nuxt-link to="/about">
                <span @click="closeNav">About</span>
            </nuxt-link>
            <!-- <nuxt-link to="/schedule">Schedule</nuxt-link> -->
            <nuxt-link to="/40hww">
                <span @click="closeNav">40h Work Week</span>
            </nuxt-link>
            <nuxt-link to="/contact">
                <span @click="closeNav">Contact</span>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MobileNav',
    methods: {
        closeNav() {
            this.$store.dispatch('updateIsNavOpen', false)
        },
    },
}
</script>
<style lang="scss" scoped>
.mobile-nav {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(6px);
    z-index: 990 !important;
    top: var(--nav-height);
    right: 0;
    height: calc(100vh - var(--nav-height));
    position: fixed;
    padding: 30px 60px;
    width: auto;

    a {
        color: var(--nav-color);
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 8px;
        white-space: nowrap;
        &.nuxt-link-exact-active {
            color: var(--nav-active);
        }
    }
    button {
        color: #fff;
    }
}
</style>
