<template>
    <div class="polaroid" :style="{ transform: `rotate(${tilt}deg)` }">
        <img src="~/assets/img/thumbtack.png" class="polaroid__hanger" />
        <div class="polaroid__img">
            <img :src="getImage(imageName)" />
            <a v-if="venmo" class="polaroid__venmo" href="#" target="_blank">
                <img src="~/assets/img/venmo.png" />
                <p>{{ venmo }}</p>
            </a>
            <a v-else-if="!venmo && website" class="polaroid__venmo" href="#" target="_blank">
                <!-- <img src="~/assets/img/venmo.png" /> -->
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
            <a v-else-if="!instagram && website" class="polaroid__instagram" :href="instagramLink" target="_blank">
                <!-- <img src="~/assets/img/instagram.svg" /> -->
                <a :href="website" target="_blank">{{ website }}</a>
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

    // @include breakpoint-down(xl) {
    //     padding: 28px 24px 24px;
    // }
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
    &__soundcloud {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        display: flex;
        justify-content: center;
        img {
            max-width: 42px;
            display: inline;
            margin-right: 8px;
            align-self: center;
        }
        p {
            display: inline;
            color: #444;
            font-family: var(--chalkitup);
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 1px;
        }
    }
    &__instagram {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        display: flex;
        justify-content: center;
        img {
            max-width: 24px;
            display: inline;
            margin-right: 8px;
            align-self: center;
        }
        p,
        a {
            display: inline;
            color: #444;
            font-family: var(--chalkitup);
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 1px;
        }
        a {
            cursor: pointer;
        }
    }
    &__venmo {
        position: absolute;
        bottom: 12%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        display: flex;
        justify-content: center;
        img {
            max-width: 24px;
            display: inline;
            margin-right: 8px;
            align-self: center;
        }
        p,
        a {
            display: inline;
            color: #444;
            font-family: var(--chalkitup);
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 1px;
        }
        a {
            cursor: pointer;
        }
    }
}
</style>
