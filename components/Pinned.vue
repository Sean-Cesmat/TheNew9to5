<template>
    <div class="pinned" :style="{ transform: `rotate(${tilt}deg)` }">
        <img src="~/assets/img/thumbtack.jpg" />
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
    },
}
</script>
<style lang="scss" scoped>
.pinned {
    margin-top: 40px;
    position: relative;
    padding: 80px 40px 40px;
    background: #fff;
    z-index: 1;
    max-width: 90%;
    img {
        position: absolute;
        top: 0px;
        max-width: 28px;
        left: 50%;
        transform: translateX(-50%);
    }
    // &:before,
    // &:after {
    //     content: '';
    //     z-index: -1;
    //     width: 100%;

    //     position: absolute;
    //     bottom: 20px;
    //     left: 10px;
    //     top: 80%;

    //     box-shadow: 0 20px 15px #777;
    //     transform: rotate(-5deg);
    // }
}
</style>
