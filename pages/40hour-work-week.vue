<template>
    <div class="work-week-page" :style="{ backgroundImage: `url('${wall}')` }">
        <div class="container mx-auto">
            <div class="flex justify-center">
                <img src="~/assets/img/40HWW-HEADER.png" class="work-week-page__title" />
            </div>
            <Paper />
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center work-week-page__intro">
                <Pinned tilt="0" paper-color="yellow">
                    <p>
                        <span>Dates:</span> April 20 - 24, 9am-5pm PDT
                        <br />
                        <span>Location:</span> twitch.tv/subsetgetsit
                        <br />
                        <span>Hosted by:</span> Subset
                    </p>
                </Pinned>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque title="Daily Schedule" />
            </div>
            <div class="flex justify-center work-week-page__schedule">
                <Pinned tilt="0.3" class="work-week-page__schedule-pinned">
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6S6-_yUnP6vndrRfnReOslcCYTt3orld8lWyzXbhwCInJ_W9DI6-UMraNa8id_a5nCaZUe6UxhQSl/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                </Pinned>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque title="Guest DJs" />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 work-week-page__djs">
                <ArtistPolaroid v-for="dj in djs" :key="dj.id" :name="dj.name" :image-name="dj.imageName" :venmo="dj.venmo" :soundcloud="dj.soundcloud" :paypal="dj.paypal" :bio="dj.bio" />
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque title="Arts & Crafts" />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 work-week-page__arts-crafts"></div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque title="Performers" />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 work-week-page__performers"></div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque title="Themes" />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 work-week-page__themes"></div>
        </div>
    </div>
</template>

<script>
import wall from '@/assets/img/wall-light.jpg'
import Paper from '@/components/Paper'
import Pinned from '@/components/Pinned'
import Plaque from '@/components/Plaque'
import ArtistPolaroid from '@/components/ArtistPolaroid'
export default {
    name: '40hrWorkWeek',
    components: {
        Paper,
        Pinned,
        Plaque,
        ArtistPolaroid,
    },
    data() {
        return {
            wall,
            djs: [
                {
                    name: 'Buku',
                    imageName: 'djs/buku.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/buku',
                    paypal: 'placeholder',
                    bio: '',
                },
                {
                    name: 'Codes',
                    imageName: 'djs/codes.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/codeshouse',
                    paypal: 'placeholder',
                    bio: '',
                },
                {
                    name: 'Dunks',
                    imageName: 'djs/dunks.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/dunks',
                    paypal: 'placeholder',
                    bio: '',
                },
                {
                    name: 'Golf Clap',
                    imageName: 'djs/golfclap.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/golfclapdet',
                    paypal: 'placeholder',
                    bio: '',
                },
                {
                    name: 'Honeycomb',
                    imageName: 'djs/honeycomb.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/honeycomb',
                    paypal: 'placeholder',
                    bio: '',
                },
                {
                    name: 'Saltus',
                    imageName: 'djs/saltus.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'placeholder',
                    paypal: 'placeholder',
                    bio: '',
                },
                {
                    name: 'Skiitour',
                    imageName: 'djs/skiitour.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/skiitour',
                    paypal: 'placeholder',
                    bio: '',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.work-week-page {
    min-height: calc(100vh - var(--nav-height));
    background-size: cover;
    background-attachment: fixed;
    &__content {
        background: #fff;
        padding: 80px 40px 20px;
        font-size: 20px;
    }
    &__title {
        width: 740px;
        max-width: 90%;
    }
    &__intro {
        font-size: 30px;
        p {
            margin-top: -20px;
            font-family: var(--marydale);
            span {
                font-weight: 900;
            }
        }
    }
    &__schedule {
        &-pinned {
            width: 100%;
        }
        iframe {
            width: 100%;
            min-height: 640px;
        }
    }
}
</style>
