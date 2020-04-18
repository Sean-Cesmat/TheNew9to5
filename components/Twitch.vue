<template>
    <div class="twitch">
        <div class="twitch__inner">
            <img src="~/assets/img/meeting-room-wide.jpg" />
            <iframe src="https://player.twitch.tv/?channel=subsetgetsit" :style="{ position: 'absolute', top: iFrameLocation.y + '%', left: iFrameLocation.x + '%', width: iFrameLocation.w + '%', height: iFrameLocation.h + '%' }" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            iFrameLocation: {
                x: 39.0297339593, // (1247 / 3195) * 100
                y: 36.0281923715, // (869 / 2412) * 100
                w: 22.441314554, // (717 / 3195) * 100
                h: 16.8739635158, // (407 / 2412) * 100
            },
        }
    },
}
</script>
<style lang="scss" scoped>
.twitch {
    width: 100%;
    overflow: hidden;
    position: relative;
    img {
        width: 100%;
        height: auto;
    }
    &__inner {
        position: relative;
        min-width: 3500px;
        margin-top: -720px;
        margin-left: calc(50% - 10px);
        transform: translateX(-50%);
        @media screen and (max-width: $lg) {
            min-width: 400vw;
            margin-top: calc(-1 * 100vw + 200px);
        }
    }
}
</style>
