<template>
    <div class="caption" :style="{ transform: `rotate(${tilt}deg)` }">
        <img src="~/assets/img/thumbtack.png" />
        <div class="flex justify-center items-center">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.3453 104.464">
                <path
                    d="M-11.1811-43.8442-50.7966-7.4408a2.0743,2.0743,0,0,0-.6568,1.7676l4.8953,41.9591a2.0741,2.0741,0,0,0,1.8332,1.8214l38.9162,4.2843L7.4361,59.2787a2.0741,2.0741,0,0,0,3.2693-.0066L22.0982,44.6242l33.125,1.41a2.0743,2.0743,0,0,0,2.1375-1.7525l9.4922-60.82a2.0742,2.0742,0,0,0-1.3793-2.2828L-9.1076-44.28A2.0741,2.0741,0,0,0-11.1811-43.8442Z"
                    transform="translate(51.4674 44.3912)"
                />
            </svg>
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Caption',
    props: {
        tilt: {
            type: Number,
            default: 0,
        },
        title: {
            type: String,
            default: '',
        },
    },
}
</script>
<style lang="scss" scoped>
.caption {
    margin: 40px auto 0;
    position: relative;
    padding: 0px 40px 40px;
    z-index: 1;
    width: 535px;
    max-width: 90%;
    transform-origin: top center;
    // @include breakpoint-down(xl) {
    //     padding: 60px 24px 24px;
    // }
    svg {
        width: 100%;
        fill: var(--blue);
    }
    img {
        position: absolute;
        top: -4px;
        max-width: 60px;
        left: 43%;
        transform: translateX(-75%);
    }
    p {
        position: absolute;
        z-index: 1;
        top: 44%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 60%;
        font-size: 50px;
        text-align: center;
        @include breakpoint(xl) {
            font-size: 40px;
        }
        @include breakpoint-down(sm) {
            font-size: 32px;
        }
        @include breakpoint-down(sm) {
            font-size: 28px;
        }
    }
}
</style>
