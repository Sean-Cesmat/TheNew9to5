<template>
    <div class="work-week-page" :style="{ backgroundImage: `url('${wall}')` }">
        <div class="container mx-auto">
            <div class="flex justify-center">
                <img src="~/assets/img/40HWW-HEADER.png" class="max-w-4xl" />
            </div>
            <Paper />
        </div>
        <div class="container mx-auto">
            <div class="grid grid-cols-3 work-week-page__djs">
                <ArtistPolaroid v-for="dj in djs" :key="dj.id" :name="dj.name" :image-name="dj.imageName" :venmo="dj.venmo" :soundcloud="dj.soundcloud" :paypal="dj.paypal" :bio="dj.bio" />
            </div>
        </div>
    </div>
</template>

<script>
import wall from '@/assets/img/wall.jpg'
import Paper from '@/components/Paper'
import ArtistPolaroid from '@/components/ArtistPolaroid'
export default {
    name: '40hrWorkWeek',
    components: {
        Paper,
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
}
</style>
