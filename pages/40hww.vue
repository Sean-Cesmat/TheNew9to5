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
                    <p>
                        <span>Dates:</span>
                        {{ workWeekDates ? workWeekDates : '' }}, 9am-5pm PDT
                    </p>
                    <p><span>Location:</span> twitch.tv/subsetgetsit</p>
                    <p><span>Hosted by:</span> Subset & The Instigators</p>
                </Pinned>

                <Pinned :tilt="0.3" class="work-week-page__intro-themes">
                    <p>
                        <span>Daily Themes</span>
                    </p>
                    <p class="work-week-page__intro-themes-spacer"></p>
                    <p>
                        <span>Mon -</span>
                        {{ currentWorkWeek ? currentWorkWeek.MondayTheme : '' }}
                    </p>
                    <p>
                        <span>Tue -</span>
                        {{ currentWorkWeek ? currentWorkWeek.TuesdayTheme : '' }}
                    </p>
                    <p>
                        <span>Wed -</span>
                        {{ currentWorkWeek ? currentWorkWeek.WednesdayTheme : '' }}
                    </p>
                    <p>
                        <span>Thu -</span>
                        {{ currentWorkWeek ? currentWorkWeek.ThursdayTheme : '' }}
                    </p>
                    <p>
                        <span>Fri -</span>
                        {{ currentWorkWeek ? currentWorkWeek.FridayTheme : '' }}
                    </p>
                    <p class="work-week-page__intro-themes-spacer"></p>
                </Pinned>
            </div>
        </div>
        <div v-if="currentWorkWeek && (currentWorkWeek.DisplaySchedule || currentWorkWeek.DownloadSchedule)" class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="schedule" title="Daily Schedule" />
            </div>
            <div class="flex justify-center work-week-page__schedule">
                <Pinned :tilt="0.3" class="work-week-page__schedule-pinned">
                    <div class="work-week-page__schedule-img-cont">
                        <img v-if="currentWorkWeek && currentWorkWeek.DisplaySchedule" :src="`http://9to5cockpit.seancesmat.com/${currentWorkWeek.DisplaySchedule.path}`" />
                    </div>
                    <!-- <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6S6-_yUnP6vndrRfnReOslcCYTt3orld8lWyzXbhwCInJ_W9DI6-UMraNa8id_a5nCaZUe6UxhQSl/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> -->
                    <div class="flex justify-center">
                        <a :href="currentWorkWeek && currentWorkWeek.DownloadSchedule ? `http://9to5cockpit.seancesmat.com/${currentWorkWeek.DownloadSchedule}` : '#'" target="_blank" class="work-week-page__schedule-download">Download Schedule</a>
                    </div>
                </Pinned>
            </div>
        </div>
        <div v-if="currentWorkWeek && fullPerformersList && workWeekPerformers.musicians.length > 0" class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="musicians" title="Guest Musicians" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm work-week-page__djs p-4">
                <ArtistPolaroid v-for="(musician, index) in workWeekPerformers.musicians" :key="musician.id" :performer-id="index" performer-type="musicians" :card-data="musician" @modal="openModal($event)" />
            </div>
        </div>
        <div v-if="currentWorkWeek && fullPerformersList && workWeekPerformers.artists.length > 0" class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="arts-and-activities" title="Arts & Activities" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 work-week-page__arts-crafts">
                <ArtistPolaroid v-for="(artist, index) in workWeekPerformers.artists" :key="artist.id" :performer-id="index" performer-type="artists" :card-data="artist" @modal="openModal($event)" />
            </div>
        </div>
        <div v-if="currentWorkWeek && fullPerformersList && workWeekPerformers.performers.length > 0" class="container mx-auto">
            <div class="flex justify-center">
                <Plaque id="performers" title="Performers" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 work-week-page__performers">
                <ArtistPolaroid v-for="(performer, index) in workWeekPerformers.performers" :key="performer.id" :performer-id="index" performer-type="performers" :card-data="performer" @modal="openModal($event)" />
            </div>
        </div>
        <transition name="modal-fade">
            <Modal v-if="modalIsOpen" :data="workWeekPerformers" :starting-type="modalStartingType" :starting-index="modalStartingIndex" @close="modalIsOpen = false" />
        </transition>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
import Pinned from '@/components/Pinned'
import Plaque from '@/components/Plaque'
import ArtistPolaroid from '@/components/ArtistPolaroid'
import fullSchedule from '@/assets/img/40hrWorkWeek.jpg'
import dateHelpers from '@/mixins/dateHelpers'

export default {
    name: 'FourtyHWW',
    components: {
        Pinned,
        Plaque,
        ArtistPolaroid,
        Modal,
    },
    mixins: [dateHelpers],
    data() {
        return {
            fullSchedule,
            modalIsOpen: false,
            modalStartingIndex: 0,
            modalStartingType: '',
        }
    },
    computed: {
        currentWorkWeek() {
            return this.$store.state.workWeeks ? this.$store.state.workWeeks[0] : null
        },
        workWeekDates() {
            let returnString
            if (this.currentWorkWeek) {
                const startMonth = new Date(this.currentWorkWeek.StartDate).getUTCMonth()
                const endMonth = new Date(this.currentWorkWeek.EndDate).getUTCMonth()
                const startDate = new Date(this.currentWorkWeek.StartDate).getUTCDate()
                const endDate = new Date(this.currentWorkWeek.EndDate).getUTCDate()
                if (startMonth !== endMonth) {
                    returnString = `${this.monthNames[startMonth]} ${startDate} - ${this.monthNames[endMonth]}${endDate}`
                } else {
                    returnString = `${this.monthNames[startMonth]} ${startDate}-${endDate}`
                }
            } else {
                returnString = null
            }

            return returnString
        },
        fullPerformersList() {
            return this.$store.state.performers
        },
        workWeekPerformers() {
            const performersObject = {}
            const computedMusicians = []
            const computedArtists = []
            const computedPerformers = []
            if (this.currentWorkWeek && this.fullPerformersList) {
                if (this.currentWorkWeek.Musicians) {
                    this.currentWorkWeek.Musicians.forEach((musician) => {
                        computedMusicians.push(this.fullPerformersList.find((obj) => obj._id === musician._id))
                    })
                }
                if (this.currentWorkWeek.Artists) {
                    this.currentWorkWeek.Artists.forEach((artist) => {
                        computedArtists.push(this.fullPerformersList.find((obj) => obj._id === artist._id))
                    })
                }
                if (this.currentWorkWeek.Performers) {
                    this.currentWorkWeek.Performers.forEach((performer) => {
                        computedPerformers.push(this.fullPerformersList.find((obj) => obj._id === performer._id))
                    })
                }
                performersObject.musicians = computedMusicians
                performersObject.artists = computedArtists
                performersObject.performers = computedPerformers
            }
            return performersObject
        },
    },
    beforeMount() {
        this.$store.dispatch('getWorkWeeks')
    },
    methods: {
        openModal(event) {
            this.modalIsOpen = true
            this.modalStartingIndex = event.performerId
            this.modalStartingType = event.performerType
        },
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
            min-width: 360px;
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
        height: 500px;
        overflow-x: auto;
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
