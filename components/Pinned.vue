<template>
    <div class="pinned" :class="{ 'pinned--noafter': paperColor !== '#fff' }" :style="{ transform: `rotate(${tilt}deg)`, backgroundColor: paperColor }">
        <img src="~/assets/img/thumbtack.png" />
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Pinned',
    props: {
        tilt: {
            type: Number,
            default: 0,
        },
        paperColor: {
            type: String,
            default: '#fff',
        },
    },
}
</script>
<style lang="scss" scoped>
.pinned {
    margin: 40px auto 0;
    position: relative;
    padding: 60px 40px 40px;
    background: #fff $noise;
    z-index: 1;
    max-width: 90%;
    transform-origin: top center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    @include breakpoint-down(xl) {
        padding: 60px 24px 24px;
    }
    img {
        position: absolute;
        top: -12px;
        max-width: 60px;
        left: 50%;
        transform: translateX(-65%);
    }
    &::after {
        display: block;
        content: ' ';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 3px;
        background: #fff $noise;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
        -webkit-clip-path: polygon(0% 0%, 5% 70%, 10% 0%, 15% 100%, 20% 0%, 25% 45%, 30% 0%, 35% 100%, 40% 0%, 45% 60%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 50%, 100% 0%);
        clip-path: polygon(0% 0%, 5% 70%, 10% 0%, 15% 100%, 20% 0%, 25% 45%, 30% 0%, 35% 100%, 40% 0%, 45% 60%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 50%, 100% 0%);
    }
    &.pinned--noafter {
        &::after {
            display: none;
        }
    }
}
</style>
