<template>
    <div class="about-page">
        <div class="container mx-auto pb-12">
            <div v-if="aboutPage" class="grid grid-cols-1 lg:grid-cols-2 about-page__content">
                <div>
                    <Pinned :tilt="$store.state.isMobile ? -0.3 : -2">
                        <!-- eslint-disable-next-line -->
                        <span v-html="aboutPage.acf.card1"></span>
                    </Pinned>
                </div>
                <div>
                    <!-- eslint-disable-next-line -->
                    <Pinned :tilt="$store.state.isMobile ? 0.7 : 1.5"><span v-html="aboutPage.acf.card2"></span></Pinned>
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
        aboutPage() {
            return this.$store.state.pages.filter((page) => page.title.rendered === 'About')[0]
        },
    },
    // data() {
    //     return {
    //         pinBoard,
    //     }
    // },
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
