<template>
    <div class="modal" @keyup.left="back" @keyup.right="next" @click.self="$emit('close')">
        <svg-icon name="close--colorless" class="modal__close-btn" @click="$emit('close')" />
        <h1 class="modal__title">{{ currentTypeHeader }}</h1>
        <div class="modal__inner">
            <button class="modal__back-btn" @click="back">BACK</button>
            <div class="modal__content">
                <img :src="currentPerformer.CardImage ? `http://9to5cockpit.seancesmat.com/${currentPerformer.CardImage}` : ''" />
                <!-- <p>{{ currentPerformer.venmo }}</p>
                <p>{{ currentPerformer.soundcloud }}</p>
                <p>{{ currentPerformer.soundcloudLink }}</p>
                <p>{{ currentPerformer.instagram }}</p>
                <p>{{ currentPerformer.instagramLink }}</p>
                <p>{{ currentPerformer.website }}</p>
                <p>{{ currentPerformer.bio }}</p>-->
            </div>
            <button class="modal__next-btn" @click="next">NEXT</button>
        </div>
    </div>
</template>
<script>
import fileLoaders from '@/mixins/fileLoaders'
export default {
    name: 'Modal',
    mixins: [fileLoaders],
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            },
        },
        startingType: {
            type: String,
            default: null,
        },
        startingIndex: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            currentType: '',
            currentIndex: 0,
        }
    },
    computed: {
        currentPerformer() {
            const currentData = this.data ? this.data[this.currentType][this.currentIndex] : null
            return {
                CardImage: currentData.CardImage ? currentData.CardImage.path : null,
                Venmo: currentData.Venmo ? currentData.Venmo : null,
                Soundcloud: currentData.Soundcloud ? currentData.Soundcloud : null,
                Instagram: currentData.Instagram ? currentData.Instagram : null,
                Website: currentData.Website ? currentData.Website : null,
                Bio: currentData.Bio ? currentData.Bio : null,
            }
        },
        types() {
            return Object.keys(this.computedData)
        },
        currentTypeHeader() {
            let type = ''
            if (this.currentType === 'musicians') {
                type = 'Musicians'
            } else if (this.currentType === 'artists') {
                type = 'Arts & Activities'
            } else if (this.currentType === 'performers') {
                type = 'Performers'
            }
            return type
        },
        computedData() {
            const newData = {}
            Object.keys(this.data).forEach((key) => {
                if (this.data[key].length !== 0) {
                    newData[key] = this.data[key]
                }
            })
            return newData
        },
    },
    beforeMount() {
        this.currentType = this.startingType
        this.currentIndex = this.startingIndex
    },
    methods: {
        back() {
            if (this.currentIndex !== 0) {
                this.currentIndex--
            } else if (this.currentIndex === 0) {
                const index = this.types.indexOf(this.currentType)
                if (index === 0) {
                    this.currentType = this.types[this.types.length - 1]
                } else {
                    this.currentType = this.types[index - 1]
                }
                this.currentIndex = this.data[this.currentType].length - 1
            }
        },
        next() {
            if (this.currentIndex + 1 < this.data[this.currentType].length) {
                this.currentIndex++
            } else if (this.currentIndex + 1 === this.data[this.currentType].length) {
                const index = this.types.indexOf(this.currentType)
                if (index + 1 === this.types.length) {
                    this.currentType = this.types[0]
                } else {
                    this.currentType = this.types[index + 1]
                }
                this.currentIndex = 0
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    margin: 0;
    padding: 0;
    z-index: 1000;
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    &__close-btn {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 12px;
        right: 30px;
        color: #fff;
        cursor: pointer;
    }

    &__title {
        color: #fff;
        font-family: var(--marydale);
        line-height: 1;
        margin-bottom: 8px;
    }

    &__inner {
        display: flex;
    }

    &__content {
        background: #fff;
        width: 760px;
        max-width: 95%;
    }

    button {
        background: var(--red);
        color: #fff;
        align-self: center;
        padding: 4px 20px;
        font-weight: 700;
        &:focus {
            outline: none;
        }
        &.modal__back-btn {
            margin-right: 4px;
        }
        &.modal__next-btn {
            margin-left: 4px;
        }
    }
}
</style>
<style lang="scss">
.modal-fade-enter-active {
    transition: all 0.25s ease;
}
.modal-fade-leave-active {
    transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}
.modal-fade-enter, .modal-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(4px);
    opacity: 0;
}
</style>
