<template>
    <div class="plaque">
        <img src="~/assets/img/plaque.png" />
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Plaque',
    props: {
        title: {
            type: String,
            default: 'Welcome',
        },
    },
}
</script>
<style lang="scss" scoped>
.plaque {
    position: relative;
    margin-top: 180px;
    margin-bottom: 60px;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    h2 {
        max-width: 100%;
        font-size: calc(20px + 2vw);
        position: relative;
        z-index: 2;
        color: #fff;
        font-family: var(--helv);
        padding: 20px 0px 0px;
        text-align: center;
        width: 565px;
        @include breakpoint-down(lg) {
            width: 375px;
        }
    }
}
</style>
