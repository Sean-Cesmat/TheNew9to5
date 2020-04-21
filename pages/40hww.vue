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
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm work-week-page__djs p-4">
                <ArtistPolaroid v-for="dj in djs" :key="dj.id" :image-name="dj.imageName" :venmo="dj.venmo" :soundcloud="dj.soundcloud" :soundcloud-link="dj.soundcloudLink" />
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="arts-and-activities" title="Arts & Activities" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 work-week-page__arts-crafts">
                <ArtistPolaroid v-for="artist in artists" :key="artist.id" :image-name="artist.imageName" :venmo="artist.venmo" :soundcloud="artist.soundcloud" :soundcloud-link="artist.soundcloudLink" :instagram="artist.instagram" :instagram-link="artist.instagramLink" :website="artist.website" />
            </div>
        </div>
        <!-- <div class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="dancers" title="Dancers" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 work-week-page__dancers">
                <ArtistPolaroid v-for="dancer in dancers" :key="dancer.id" :image-name="dancer.imageName" :venmo="dancer.venmo" :soundcloud="dancer.soundcloud" :soundcloud-link="dancer.soundcloudLink" :instagram="dancer.instagram" :instagram-link="dancer.instagramLink" :website="dancer.website" />
            </div>
        </div> -->
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
    name: 'FourtyHWW',
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
                    imageName: 'artists/djs/buku.jpg',
                    venmo: '@bukudatdude',
                    soundcloud: '/buku',
                    soundcloudLink: 'https://soundcloud.com/buku',
                },
                {
                    imageName: 'artists/djs/codes.jpg',
                    venmo: '@codeshouse',
                    soundcloud: '/codeshouse',
                    soundcloudLink: 'https://soundcloud.com/codeshouse',
                },
                {
                    imageName: 'artists/djs/dunks.jpg',
                    venmo: null,
                    soundcloud: '/dunks',
                    soundcloudLink: 'https://soundcloud.com/dunks',
                },
                {
                    imageName: 'artists/djs/golf-clap.jpg',
                    venmo: null,
                    soundcloud: '/golfclapdet',
                    soundcloudLink: 'https://soundcloud.com/golfclapdet',
                },
                {
                    imageName: 'artists/djs/honeycomb.jpg',
                    venmo: '@honeycombeatbox',
                    soundcloud: '/honeycomb',
                    soundcloudLink: 'https://soundcloud.com/honeycomb',
                },
                {
                    imageName: 'artists/djs/saltus.jpg',
                    venmo: null,
                    soundcloud: '/saltusmusic',
                    soundcloudLink: 'https://soundcloud.com/saltusmusic',
                },
                {
                    imageName: 'artists/djs/skiitour.jpg',
                    venmo: null,
                    soundcloud: '/skiitour',
                    soundcloudLink: 'https://soundcloud.com/skiitour',
                },
            ],
            artists: [
                {
                    imageName: 'artists/alana-miller.jpg',
                    venmo: '@Alanamama',
                    instagram: '@millerthriller',
                    instagramLink: 'https://www.instagram.com/millerthriller/',
                },
                {
                    imageName: 'artists/bzen-wellness.jpg',
                    venmo: '@brittany-boersma',
                    instagram: null,
                    instagramLink: null,
                    website: 'bzenwellness.com',
                },
                {
                    imageName: 'artists/carson-whittaker.jpg',
                    venmo: '@Carson-Whittaker',
                    instagram: '@carsons_artlife',
                    instagramLink: 'https://www.instagram.com/carsons_artlife/',
                },
                {
                    imageName: 'artists/dorienn-medrano.jpg',
                    venmo: null,
                    instagram: '@doriennmara',
                    instagramLink: 'https://www.instagram.com/doriennmara/',
                    website: 'doriennmedrano.com/',
                },
                {
                    imageName: 'artists/eddy-sato.jpg',
                    venmo: '@eddy-sato',
                    instagram: '@youruncleeddy',
                    instagramLink: 'http://instagram.com/youruncleeddy',
                },
                {
                    imageName: 'artists/lina-alf.jpg',
                    venmo: '@linaalf',
                    instagram: '@linaalf',
                    instagramLink: 'https://www.instagram.com/linaalf/',
                },
                {
                    imageName: 'artists/lisa-leturno.jpg',
                    venmo: '@artsiren',
                    instagram: '@leturnoart',
                    instagramLink: 'https://www.instagram.com/leturnoart/',
                },
                {
                    imageName: 'artists/lizzie-rose.jpg',
                    venmo: '@lizzierosemedia',
                    instagram: '@lizzierosemedia',
                    instagramLink: 'http://instagram.com/lizzierosemedia',
                },
                {
                    imageName: 'artists/lost-and-profound.jpg',
                    venmo: '@ematthews09',
                    instagram: '@discotechnics',
                    instagramLink: 'https://www.instagram.com/discotechnics/',
                    website: 'etsy.com/shop/LostAndProfoundPNW',
                },
                {
                    imageName: 'artists/melolagnia.jpg',
                    venmo: '@melolagnia',
                    instagram: '@melolagnia',
                    instagramLink: 'https://www.instagram.com/melolagnia',
                },
                {
                    imageName: 'artists/rawb-lane.jpg',
                    venmo: '@rawb-lane',
                    instagram: '@rawblane',
                    instagramLink: 'https://www.instagram.com/rawblane/',
                },
                {
                    imageName: 'artists/ruthie-kallai.jpg',
                    venmo: '@ruthie8',
                    instagram: '@ruthiekallai',
                    instagramLink: 'https://www.instagram.com/ruthiekallai/',
                    website: 'ruthiekallai.com',
                },
            ],
            // dancers: [
            //     {
            //         imageName: 'artists/christina.jpg',
            //         venmo: '@demachristina',
            //         instagram: '@demachristina',
            //         instagramLink: 'https://www.instagram.com/demachristina/',
            //     },
            //     {
            //         imageName: 'artists/citywitch.jpg',
            //         venmo: '@citywitch',
            //         instagram: '@citywitchx',
            //         instagramLink: 'https://www.instagram.com/citywitchx/',
            //     },
            //     {
            //         imageName: 'artists/gabriela.jpg',
            //         venmo: '@gabriela.dancer',
            //         instagram: '@gygarcia',
            //         instagramLink: 'https://www.instagram.com/gygarcia/',
            //     },
            //     {
            //         imageName: 'artists/haley.jpg',
            //         venmo: '@haley-jensen-29',
            //         instagram: '@thebonegoddess',
            //         instagramLink: 'https://www.instagram.com/thebonegoddess/',
            //     },
            //     {
            //         imageName: 'artists/heartbreaker.jpg',
            //         venmo: '@heartbreaker',
            //         instagram: '@heart_break_dancer',
            //         instagramLink: 'https://www.instagram.com/heart_break_dancer/',
            //     },
            //     {
            //         imageName: 'artists/hularev.jpg',
            //         venmo: '@hularev',
            //         instagram: '@hularev',
            //         instagramLink: 'https://www.instagram.com/hularevf/',
            //     },
            //     {
            //         imageName: 'artists/jenn.jpg',
            //         venmo: '@mitch_cadigan',
            //         instagram: '@jenn_ranalli',
            //         instagramLink: 'https://www.instagram.com/jenn_ranalli/',
            //     },
            //     {
            //         imageName: 'artists/lydia.jpg',
            //         venmo: '@lyd_viciouz',
            //         instagram: '@lyd_viciouz',
            //         instagramLink: 'https://www.instagram.com/lyd_viciouz/',
            //     },
            //     {
            //         imageName: 'artists/michelle.jpg',
            //         venmo: '@michelle-zurita',
            //         instagram: '@chellune',
            //         instagramLink: 'https://www.instagram.com/chellune/',
            //     },
            //     {
            //         imageName: 'artists/nia.jpg',
            //         venmo: '@nia-hayes',
            //         instagram: '@niaonfia',
            //         instagramLink: 'https://www.instagram.com/niaonfia/',
            //     },
            //     {
            //         imageName: 'artists/phoenix.jpg',
            //         venmo: '@phoenix-ha',
            //         instagram: '@phoenix.fireflow',
            //         instagramLink: 'https://www.instagram.com/phoenix.fireflow/',
            //     },
            //     {
            //         imageName: 'artists/rae-chrysalis.jpg',
            //         venmo: '@rachel-koshiol',
            //         instagram: '@beamingrae_',
            //         instagramLink: 'https://www.instagram.com/beamingrae_/',
            //     },
            //     {
            //         imageName: 'artists/regan.jpg',
            //         venmo: '@reganpowers0627',
            //         instagram: '@_miss_powers_',
            //         instagramLink: 'https://www.instagram.com/_miss_powers_/',
            //     },
            //     {
            //         imageName: 'artists/saturn.jpg',
            //         venmo: '@Saturn-Reyes',
            //         instagram: '@saturn_superstar',
            //         instagramLink: 'https://www.instagram.com/saturn_superstar/',
            //     },
            //     {
            //         imageName: 'artists/tae.jpg',
            //         venmo: '@',
            //         instagram: '@',
            //         instagramLink: 'https://www.instagram.com//',
            //     },
            //     {
            //         imageName: 'artists/tracey.jpg',
            //         venmo: '@queenofthehill',
            //         instagram: '@mactrayy',
            //         instagramLink: 'https://www.instagram.com/mactrayy/',
            //     },
            // ],
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
    padding-bottom: 60px;

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
        min-height: 500px;
        overflow-x: scroll;
        img {
            width: 100%;
            min-width: 800px;
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
