<template>
    <div class="paper">
        <!-- <img src="~/assets/img/tape.png" /> -->
    </div>
</template>

<script>
export default {
    name: 'Paper',
}
</script>
<style lang="scss" scoped>
.paper {
    &:before,
    &:after {
        content: '';
        z-index: -1;
        width: 200px;

        position: absolute;
        bottom: 20px;
        left: 10px;
        top: 80%;

        box-shadow: 0 20px 15px #777;
        transform: rotate(-5deg);
    }
}
</style>
