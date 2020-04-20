<template>
    <div class="work-week-page">
        <div class="container mx-auto">
            <div class="flex justify-center work-week-page__title">
                <img src="~/assets/img/40HWW-HEADER.png" class />
            </div>
        </div>
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 work-week-page__intro">
                <Pinned :tilt="-0.2" paper-color="var(--yellow)" class="work-week-page__intro-pinned">
                    <p><span>Dates:</span> April 20-24, 9am-5pm PDT</p>
                    <p><span>Location:</span> twitch.tv/subsetgetsit</p>
                    <p><span>Hosted by:</span> Subset & The Instigators</p>
                </Pinned>

                <Pinned :tilt="0.3" class="work-week-page__intro-themes">
                    <p>
                        <span>Daily Themes</span>
                    </p>
                    <p class="work-week-page__intro-themes-spacer"></p>
                    <p><span>Mon -</span> Spa Day</p>
                    <p><span>Tue -</span> Flower Power</p>
                    <p><span>Wed -</span> Weirdos Unite</p>
                    <p><span>Thu -</span> Holiday Party</p>
                    <p><span>Fri -</span> Old Skool Rave</p>
                    <p class="work-week-page__intro-themes-spacer"></p>
                </Pinned>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="schedule" title="Daily Schedule" />
            </div>
            <div class="flex justify-center work-week-page__schedule">
                <Pinned :tilt="0.3" class="work-week-page__schedule-pinned">
                    <div class="work-week-page__schedule-img-cont">
                        <img src="~/assets/img/40hww-schedule.jpg" />
                    </div>
                    <!-- <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6S6-_yUnP6vndrRfnReOslcCYTt3orld8lWyzXbhwCInJ_W9DI6-UMraNa8id_a5nCaZUe6UxhQSl/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> -->
                    <div class="flex justify-center">
                        <a :href="fullSchedule" download="40hrWorkWeekSchedule.jpg" class="work-week-page__schedule-download">Download Schedule</a>
                    </div>
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
import Pinned from '@/components/Pinned'
import Plaque from '@/components/Plaque'
import ArtistPolaroid from '@/components/ArtistPolaroid'
import fullSchedule from '@/assets/img/40hrWorkWeek.jpg'

export default {
    name: '40hww',
    components: {
        Pinned,
        Plaque,
        ArtistPolaroid,
    },
    data() {
        return {
            fullSchedule,
            djs: [
                {
                    name: 'Buku',
                    imageName: 'artists/djs/buku.jpg',
                    venmo: 'placeholder',
                    soundcloud: '/buku',
                    soundcloudLink: 'https://soundcloud.com/buku',
                    paypal: 'placeholder',
                    genre: 'Techno',
                },
                {
                    name: 'Codes',
                    imageName: 'djs/codes.jpg',
                    venmo: 'placeholder',
                    soundcloud: '/codeshouse',
                    soundcloudLink: 'https://soundcloud.com/codeshouse',
                    paypal: 'placeholder',
                    genre: 'Jungle',
                },
                {
                    name: 'Dunks',
                    imageName: 'djs/dunks.jpg',
                    venmo: 'placeholder',
                    soundcloud: '/dunks',
                    soundcloudLink: 'https://soundcloud.com/dunks',
                    paypal: 'placeholder',
                    genre: 'Open Format Vinyl',
                },
                {
                    name: 'Golf Clap',
                    imageName: 'djs/golfclap.jpg',
                    venmo: 'placeholder',
                    soundcloud: '/golfclapdet',
                    soundcloudLink: 'https://soundcloud.com/golfclapdet',
                    paypal: 'placeholder',
                    genre: 'Tech House',
                },
                {
                    name: 'Honeycomb',
                    imageName: 'djs/honeycomb.jpg',
                    venmo: 'placeholder',
                    soundcloud: '/honeycomb',
                    soundcloudLink: 'https://soundcloud.com/honeycomb',
                    paypal: 'placeholder',
                    genre: 'Beatbox Bass',
                },
                {
                    name: 'Saltus',
                    imageName: 'djs/saltus.jpg',
                    venmo: 'placeholder',
                    soundcloud: 'placeholder',
                    soundcloudLink: 'placeholder',
                    paypal: 'placeholder',
                    genre: 'Bass',
                },
                {
                    name: 'SkiiTour',
                    imageName: 'djs/skiitour.jpg',
                    venmo: 'placeholder',
                    soundcloud: '/skiitour',
                    soundcloudLink: 'https://soundcloud.com/skiitour',
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
    background-position: -99999px -99999px;
    background-repeat: no-repeat;
    background-color: transparent;
    background-image: url('../assets/img/wall-light.jpg');

    &::before {
        content: '';
        background-image: inherit;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        -webkit-background-size: cover !important;
        -moz-background-size: cover !important;
        -o-background-size: cover;
        background-size: cover !important;
        z-index: auto;
    }
    &__content {
        background: #fff;
        padding: 80px 40px 20px;
        font-size: 20px;
    }
    &__title {
        z-index: 1;
        position: relative;
        img {
            align-self: flex-start;
            width: 740px;
            max-width: 90%;
            margin-top: 20px;
        }
    }
    &__intro {
        font-size: 28px;
        ::v-deep {
            .pinned {
                align-self: center;
            }
        }
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
        &-pinned {
            p {
                white-space: nowrap;
                span {
                    white-space: normal;
                }
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
                // &:first-of-type {
                //     margin-bottom: 24px;
                // }
                border-bottom: 1px solid var(--blue-lines);
                &:first-of-type {
                    border-top: 1px solid var(--blue-lines);
                    padding-top: 4px;
                }
                &.work-week-page__intro-themes-spacer {
                    height: 28px;
                    @include breakpoint-down(lg) {
                        height: 24px;
                    }
                    @include breakpoint-down(sm) {
                        height: 18px;
                    }
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
            min-height: 720px;
        }
    }
    &__schedule-img-cont {
        width: 100%;
        height: 600px;
        overflow-x: scroll;
        img {
            width: 100%;
            min-width: 1000px;
        }
    }
    &__schedule-download {
        background: #000000;
        padding: 8px 40px;
        font-size: 23px;
        font-weight: 600;
        text-transform: uppercase;
        max-width: 100%;
        color: #62c6f8;
        margin: 20px auto 8px;
        white-space: nowrap;
        cursor: pointer;
        @include breakpoint-down(md) {
            font-size: 18px;
        }
    }
}
</style>
