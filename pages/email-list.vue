<template>
    <div class="email-list flex items-center">
        <div class="container mx-auto">
            <div class="flex w-full grid grid-cols-1">
                <div class="flex justify-center items-center flex-col">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcRdFoGLdN89l-RMR2B75AUXcKGyVY9GPpInYSsZZ-IDI0wA/viewform?embedded=true" width="640" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmailList',
}
</script>
<style>
body.freebirdFormviewerViewEmbedded {
    display: none;
}
</style>
<style lang="scss" scoped>
.email-list {
    background: var(--blue);
    min-height: calc(100vh - var(--nav-height));
    padding: 20px 20px 0px;
    @include breakpoint-down(sm) {
        padding: 20px 8px 0px;
    }

    img {
        margin-left: -60px;
        @include breakpoint-down(md) {
            width: 450px;
            margin: -108px auto -90px;
        }
    }
    h4 {
        line-height: 1.1;
        margin-bottom: 16px;
        font-size: 26px;
        @include breakpoint-down(md) {
            font-size: 20px;
        }
    }
    iframe {
        max-width: 100%;
    }
}
</style>
