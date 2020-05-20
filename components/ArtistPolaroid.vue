<template>
    <div class="polaroid" :style="{ transform: `rotate(${tilt}deg)` }" @click="$emit('modal', { performerId, performerType })">
        <img src="~/assets/img/thumbtack.png" class="polaroid__hanger" />
        <div class="polaroid__img">
            <img :src="getImage(imageName)" />
            <div class="polaroid__socials">
                <a v-if="venmo" class="polaroid__venmo" href="#" target="_blank">
                    <img src="~/assets/img/venmo.png" />
                    <p>{{ venmo }}</p>
                </a>
                <a v-else-if="!venmo && website" class="polaroid__website" :href="website" target="_blank">
                    <a :href="website" target="_blank">{{ website }}</a>
                </a>
                <a v-if="soundcloud" class="polaroid__soundcloud" :href="soundcloudLink" target="_blank">
                    <img src="~/assets/img/soundcloud.svg" />
                    <p>{{ soundcloud }}</p>
                </a>
                <a v-if="instagram" class="polaroid__instagram" :href="instagramLink" target="_blank">
                    <img src="~/assets/img/instagram.svg" />
                    <p>{{ instagram }}</p>
                </a>
                <a v-else-if="!instagram && website" class="polaroid__website" :href="website" target="_blank">
                    <a :href="website" target="_blank">{{ website }}</a>
                </a>
                <a v-if="venmo && (soundcloud || instagram) && website" class="polaroid__website" :href="website" target="_blank">
                    <a :href="website" target="_blank">{{ website }}</a>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import fileLoaders from '@/mixins/fileLoaders'
export default {
    name: 'Polaroid',
    mixins: [fileLoaders],
    props: {
        performerId: {
            type: Number,
            default: 0,
        },
        performerType: {
            type: String,
            default: '',
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
        soundcloudLink: {
            type: String,
            default: null,
        },
        instagram: {
            type: String,
            default: null,
        },
        instagramLink: {
            type: String,
            default: null,
        },
        website: {
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
    margin: 40px auto 0px;
    position: relative;
    z-index: 1;
    max-width: 90%;
    transform-origin: top center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

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
            line-height: 1;
            margin-bottom: 4px;
        }
        h4 {
            font-family: var(--marydale);
            line-height: 1;
            margin-bottom: 20px;
        }
    }
    &__socials {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        height: 20%;
        bottom: 4px;
        position: absolute;
        width: 100%;
    }

    &__soundcloud,
    &__instagram,
    &__venmo,
    &__website {
        img {
            max-width: 24px;
            display: inline;
            margin-right: 8px;
            align-self: center;
            @include breakpoint-down(xl) {
                max-width: 20px;
                margin-right: 7px;
            }
            @include breakpoint-down(md) {
                max-width: 18px;
                margin-right: 6px;
            }
            @include breakpoint-down(sm) {
                max-width: 24px;
                margin-right: 8px;
            }
        }
        p,
        a {
            display: inline;
            color: #444;
            font-family: var(--chalkitup);
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 1px;
            @include breakpoint-down(xl) {
                font-size: 18px;
            }
            @include breakpoint-down(md) {
                font-size: 16px;
            }
            @include breakpoint-down(sm) {
                font-size: 20px;
            }
        }
        a {
            cursor: pointer;
        }
    }
    &__soundcloud {
        img {
            max-width: 42px;
            display: inline;
            margin-right: 8px;
            align-self: center;
            @include breakpoint-down(xl) {
                max-width: 38px;
            }
            @include breakpoint-down(md) {
                font-size: 32px;
            }
            @include breakpoint-down(sm) {
                font-size: 42px;
            }
        }
    }
}
</style>
