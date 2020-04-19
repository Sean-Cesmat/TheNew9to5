<template>
    <div class="dropdown" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
        <div class="dropdown__slot">
            <slot></slot>
        </div>
        <transition name="dropdown">
            <div v-show="isOpen" class="dropdown__main">
                <div class="flex flex-col">
                    <nuxt-link :to="$route.name === '40hww' ? '#schedule' : '/40hww/#schedule'">
                        <span @click="isOpen = false">Schedule</span>
                    </nuxt-link>
                    <nuxt-link :to="$route.name === '40hww' ? '#musicians' : '/40hww/#musicians'">
                        <span @click="isOpen = false">Guest Musicians</span>
                    </nuxt-link>
                    <nuxt-link :to="$route.name === '40hww' ? '#arts-and-crafts' : '/40hww/#arts-and-crafts'">
                        <span @click="isOpen = false">Arts & Crafts</span>
                    </nuxt-link>
                    <nuxt-link :to="$route.name === '40hww' ? '#performers' : '/40hww/#performers'">
                        <span @click="isOpen = false">Performers</span>
                    </nuxt-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;
    &__slot {
        margin-right: 20px;
        cursor: pointer;
        ::v-deep {
            a {
                &::after {
                    content: ' ▾';
                    color: currentColor;
                    font-family: Arial, Helvetica, sans-serif;
                }
                &.nuxt-link-active {
                    color: var(--nav-active);
                }
            }
        }
    }
    &__main {
        background: #000;
        position: absolute;
        padding: 24px 12px 12px;
        min-width: 100%;
        right: 8px;
        a {
            color: var(--nav-color);
            font-size: 14px;
            text-transform: uppercase;
            font-weight: bold;
            white-space: nowrap;
            font-family: var(--helv);
            text-align: right;
            margin: 4px 0px;
            &:hover {
                color: var(--nav-active);
            }

            &.nuxt-link-exact-active {
                color: var(--nav-active);
            }
        }
    }
}
</style>
