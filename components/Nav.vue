<template>
    <div class="nav fixed w-full">
        <div class="container mx-auto px-4 nav-container">
            <div class="flex w-full">
                <div class="w-1/3">
                    <img src="~/assets/img/the-new-9to5-logo.png" class="nav__logo py-1" @click="$router.push('/')" />
                </div>
                <div class="w-2/3 flex items-center justify-end nav__desktop">
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/about">About</nuxt-link>
                    <!-- <nuxt-link to="/schedule">Schedule</nuxt-link> -->
                    <Dropdown>
                        <nuxt-link to="/40hww">40h Work Week</nuxt-link>
                    </Dropdown>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                    <nuxt-link to="/email-list">Email List</nuxt-link>
                </div>
                <div class="w-2/3 flex items-center justify-end nav__mobile">
                    <button @click="$store.dispatch('updateIsNavOpen', !$store.state.isNavOpen)">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.9 39.2">
                            <path d="M71,63.6H41.1a3,3,0,1,0,0,6H71a3,3,0,1,0,0-6Z" transform="translate(-26.1 -30.4)" />
                            <path d="M41.2,36.4H71a3,3,0,0,0,0-6H41.1a2.9465,2.9465,0,0,0-3,3A3.0312,3.0312,0,0,0,41.2,36.4Z" transform="translate(-26.1 -30.4)" />
                            <path d="M29.2,53H71a3,3,0,0,0,0-6H29.1a2.9465,2.9465,0,0,0-3,3A3.0312,3.0312,0,0,0,29.2,53Z" transform="translate(-26.1 -30.4)" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Dropdown from '@/components/Dropdown'
export default {
    name: 'Nav',
    components: {
        Dropdown,
    },
}
</script>
<style lang="scss" scoped>
.nav {
    background: var(--nav-bg);
    z-index: 990 !important;
    top: 0;
    height: var(--nav-height);
    align-items: center;
    display: flex;

    &__logo {
        max-width: 80px;
        cursor: pointer;
    }
    a {
        color: var(--nav-color);
        font-size: 14px;
        font-family: var(--helv);
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: -6px;
        line-height: 1;
        cursor: pointer;
        &:hover {
            color: var(--nav-active);
        }
        &:not(:last-child) {
            margin-right: 20px;
        }
        &.nuxt-link-exact-active {
            color: var(--nav-active);
        }
    }

    .nav__desktop {
        display: flex;
        @include breakpoint-down(md) {
            display: none;
        }
    }
    .nav__mobile {
        display: none;
        @include breakpoint-down(md) {
            display: flex;
        }
        svg {
            height: 28px;
            fill: #fff;
        }
    }
    button {
        color: #fff;
    }
}
</style>
