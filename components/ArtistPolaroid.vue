<template>
    <div class="polaroid" :style="{ transform: `rotate(${tilt}deg)` }">
        <img src="~/assets/img/thumbtack.png" class="polaroid__hanger" />
        <div class="polaroid__img">
            <img :src="getImage(imageName)" />
        </div>
        <div class="polaroid__main">
            <h2>{{ name }}</h2>
            <a v-if="soundcloud" class="polaroid__soundcloud" :href="soundcloud" target="_blank">
                <img src="~/assets/img/soundcloud.svg" />
            </a>
        </div>
    </div>
</template>

<script>
import fileLoaders from '@/mixins/fileLoaders'
export default {
    name: 'Polaroid',
    mixins: [fileLoaders],
    props: {
        name: {
            type: String,
            required: true,
        },
        imageName: {
            type: String,
            required: true,
        },
        venmo: {
            type: String,
            default: null,
        },
        paypal: {
            type: String,
            default: null,
        },
        soundcloud: {
            type: String,
            default: null,
        },
        bio: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            tilt: 0,
        }
    },
    mounted() {
        let num = Math.floor(Math.random() * 2) / 10 + 1 // this will get a number between 1 and 99;
        num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1 // this will add minus sign in 50% of cases
        this.tilt = num
    },
}
</script>
<style lang="scss" scoped>
.polaroid {
    margin-top: 40px;
    position: relative;
    padding: 44px 40px 40px;
    background: #fff;
    z-index: 1;
    max-width: 90%;
    &__hanger {
        position: absolute;
        top: -12px;
        max-width: 60px;
        left: 50%;
        transform: translateX(-65%);
    }
    &__img {
        width: 100%;
    }
    &__main {
        h2 {
            font-family: var(--marydale);
        }
    }
    &__soundcloud {
        img {
            max-width: 48px;
        }
    }
}
</style>
