<template>
    <div class="about-page" :style="{ backgroundImage: `url('${pinBoard}')` }">
        <div class="container mx-auto pb-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 about-page__content">
                <div>
                    <Pinned :tilt="$store.state.isMobile ? -0.3 : -2">
                        Welcome to The New 9-to-5! After we lost our normal 9-to-5 jobs during the coronavirus quarantine, we were forced to pivot and find new outlets for our creativity.
                        <br />
                        <br />The New 9-to-5 is not an attempt to recreate the shows we can no longer attend, but our quest to explore and evolve the possibilities of an online music community and creative expression.
                    </Pinned>
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
import pinBoard from '@/assets/img/pinboard.jpg'
import Pinned from '@/components/Pinned'
import Caption from '@/components/Caption'

export default {
    name: 'About',
    components: {
        Pinned,
        Caption,
    },
    data() {
        return {
            pinBoard,
        }
    },
}
</script>

<style lang="scss" scoped>
.about-page {
    min-height: calc(100vh - var(--nav-height));
    background-size: cover;
    background-attachment: fixed;
    background-color: #9a6030;

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
