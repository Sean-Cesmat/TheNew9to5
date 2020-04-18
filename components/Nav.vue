<template>
    <div class="nav fixed w-full">
        <div class="container mx-auto px-4 nav-container">
            <div class="flex w-full">
                <div class="w-1/2">
                    <img src="~/assets/img/9-to-5-SOLO.png" class="nav__logo py-1" @click="$router.push('/')" />
                </div>
                <div v-if="!$store.state.isMobile" class="w-1/2 flex items-center justify-end">
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/about">About</nuxt-link>
                    <!-- <nuxt-link to="/schedule">Schedule</nuxt-link> -->
                    <nuxt-link to="/40hour-work-week">40h Work Week</nuxt-link>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                </div>
                <div v-else class="w-1/2 flex items-center justify-end">
                    <button>|||</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.nav {
    background: var(--nav-bg);
    z-index: 990 !important;
    top: 0;
    height: var(--nav-height);

    &__logo {
        max-width: 100px;
        cursor: pointer;
    }
    a {
        color: var(--nav-color);
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
        &:not(:last-child) {
            margin-right: 16px;
        }
        &.nuxt-link-exact-active {
            color: var(--nav-active);
        }
    }
}
</style>
