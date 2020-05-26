<template>
    <div class="about-page">
        <div class="container mx-auto pb-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 about-page__content">
                <div>
                    <Pinned :tilt="$store.state.isMobile ? -0.3 : -2" v-html="aboutData ? aboutData.cardLeft : ''" />
                </div>
                <div>
                    <Pinned :tilt="$store.state.isMobile ? 0.7 : 1.5">Our show currently airs on Twitch every Tuesday and Thursday from 9am to 5pm PT. We are expanding our content, first with a full week of music, art, crafts, comedy, and wellness workshops. Join us for the first 40 Hour Work Week April 20-24.</Pinned>
                    <Caption title="What are you thankful for?" :tilt="5" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import pinBoard from '@/assets/img/pinboard.jpg'
import Pinned from '@/components/Pinned'
import Caption from '@/components/Caption'

export default {
    name: 'About',
    components: {
        Pinned,
        Caption,
    },
    computed: {
        aboutData() {
            return this.$store.state.aboutPage ? this.$store.state.aboutPage : null
        },
    },
    beforeMount() {
        this.$store.dispatch('getAboutPage')
    },
}
</script>

<style lang="scss" scoped>
.about-page {
    min-height: calc(100vh - var(--nav-height));
    background-size: cover;
    background-attachment: fixed;
    background-color: #9a6030;
    background-image: url('../assets/img/pinboard.jpg');

    .container {
        padding: 80px 0;
        @include breakpoint-down(sm) {
            padding: 40px 0 60px;
        }
    }
    &__content {
        font-size: 25px;
        font-family: 'chalkitup', helvetica, sans-serif;
        @include breakpoint-down(sm) {
            font-size: 18px;
        }
    }
}
</style>
