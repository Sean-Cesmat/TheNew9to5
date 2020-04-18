<template>
    <div class="home-page">
        <Twitch>
            <div class="home-page__content">
                <h1>Welcome to The New 9-to-5</h1>
                <h3>your source for weekly tunes, crafts, and shenanigans</h3>
                <div class="home-page__content-event">
                    <h2>April 20-24 | 40 Hour Work Week</h2>
                    <div class="w-full">
                        <h3>A weeklong celebration of art in its many forms, including:</h3>
                        <img src="~/assets/img/work-week-stickys-wide.svg" class="home-page__stickys" />
                    </div>
                    <button @click="$router.push('40hour-work-week')">Learn More</button>
                </div>
            </div>
        </Twitch>
    </div>
</template>

<script>
import Twitch from '@/components/Twitch'

export default {
    name: 'Home',
    components: {
        Twitch,
    },
}
</script>

<style lang="scss" scoped>
.home-page {
    &__content {
        // background: linear-gradient(90deg, rgba(252, 70, 107, 0.85) 0%, rgba(63, 94, 251, 0.85) 100%);
        background: rgba(0, 0, 0, 0.65);
        position: absolute;
        z-index: 1;
        top: 60%;
        left: 50%;
        transform: translateX(-48.5%);
        width: 1100px;
        max-width: 94vw;
        backdrop-filter: blur(8px);
        text-align: center;
        padding: 30px;
        border-radius: 3px;
        color: #fff;
        box-shadow: 1px 2px 9px 0px rgba(0, 0, 0, 0.57);
    }
    &__content-event {
        background: rgba(255, 255, 255, 0.9);
        color: #111;
        padding: 32px 10px;
        margin-top: 20px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    &__stickys {
        max-width: 800px;
        margin: 0 auto;
    }
    h1 {
        font-size: 56px;
        margin-bottom: -20px;
    }
    h5 {
        font-size: 24px;
        line-height: 1.2;
        margin-bottom: 20px;
    }
    button {
        background: #000000;
        padding: 8px 40px;
        font-size: 23px;
        font-weight: 600;
        text-transform: uppercase;
        max-width: 100%;
        color: #62c6f8;
        margin: 20px 0px 8px;
        width: 275px;
    }
}
</style>
