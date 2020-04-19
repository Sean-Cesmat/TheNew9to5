<template>
    <div class="work-week-page" :style="{ backgroundImage: `url('${wall}')` }">
        <div class="container mx-auto">
            <div class="flex justify-center">
                <img src="~/assets/img/40HWW-HEADER.png" class="work-week-page__title" />
            </div>
            <Paper />
        </div>
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 work-week-page__intro">
                <Pinned :tilt="-0.2" paper-color="var(--yellow)">
                    <p><span>Dates:</span> April 20 - 24, 9am-5pm PDT</p>
                    <p><span>Location:</span> twitch.tv/subsetgetsit</p>
                    <p><span>Hosted by:</span> Subset & The Instigators</p>
                </Pinned>

                <Pinned :tilt="0.3" class="work-week-page__intro-themes">
                    <p>
                        <span>Daily Themes</span>
                        <br />
                    </p>
                    <p><span>Mon -</span> Spa Day</p>
                    <p><span>Tue -</span> Flower Power</p>
                    <p><span>Wed -</span> Weirdos</p>
                    <p><span>Thu -</span> Holidays</p>
                    <p><span>Fri -</span> Old Skool Rave</p>
                </Pinned>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="schedule" title="Daily Schedule" />
            </div>
            <div class="flex justify-center work-week-page__schedule">
                <Pinned :tilt="0.3" class="work-week-page__schedule-pinned">
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6S6-_yUnP6vndrRfnReOslcCYTt3orld8lWyzXbhwCInJ_W9DI6-UMraNa8id_a5nCaZUe6UxhQSl/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                </Pinned>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="musicians" title="Guest Musicians" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm work-week-page__djs p-4">
                <ArtistPolaroid v-for="dj in djs" :key="dj.id" :name="dj.name" :image-name="dj.imageName" :venmo="dj.venmo" :soundcloud="dj.soundcloud" :paypal="dj.paypal" :genre="dj.genre" />
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="arts-and-crafts" title="Arts & Crafts" />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 work-week-page__arts-crafts"></div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="performers" title="Performers" />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 work-week-page__performers"></div>
        </div>
        <!-- <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="themes" title="Themes" />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 work-week-page__themes"></div>
        </div>-->
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
                    genre: 'Techno',
                },
                {
                    name: 'Codes',
                    imageName: 'djs/codes.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/codeshouse',
                    paypal: 'placeholder',
                    genre: 'Jungle',
                },
                {
                    name: 'Dunks',
                    imageName: 'djs/dunks.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/dunks',
                    paypal: 'placeholder',
                    genre: 'Open Format Vinyl',
                },
                {
                    name: 'Golf Clap',
                    imageName: 'djs/golfclap.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/golfclapdet',
                    paypal: 'placeholder',
                    genre: 'Tech House',
                },
                {
                    name: 'Honeycomb',
                    imageName: 'djs/honeycomb.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/honeycomb',
                    paypal: 'placeholder',
                    genre: 'Beatbox Bass',
                },
                {
                    name: 'Saltus',
                    imageName: 'djs/saltus.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'placeholder',
                    paypal: 'placeholder',
                    genre: 'Bass',
                },
                {
                    name: 'SkiiTour',
                    imageName: 'djs/skiitour.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'https://soundcloud.com/skiitour',
                    paypal: 'placeholder',
                    genre: 'Bass House',
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
        margin-top: 20px;
    }
    &__intro {
        font-size: 28px;
        p {
            font-family: var(--marydale);
            line-height: 1;
            &:not(:last-child) {
                margin-bottom: 12px;
            }
            &:first-of-type {
                margin-top: -20px;
            }
            span {
                font-weight: 900;
            }
        }
        .work-week-page__intro-themes {
            p {
                font-family: var(--chalkitup);
                text-align: center;
                text-transform: uppercase;
                &:not(:last-child) {
                    margin-bottom: 4px;
                }
                &:first-of-type {
                    margin-bottom: 24px;
                }
            }
        }
        @include breakpoint-down(lg) {
            font-size: 24px;
        }
        @include breakpoint-down(sm) {
            font-size: 18px;
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
