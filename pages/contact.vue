<template>
    <div class="contact flex items-center">
        <div class="container mx-auto">
            <div v-if="contactPage" class="flex w-full grid grid-cols-1 md:grid-cols-2">
                <div class>
                    <img :src="contactPage.acf.image" />
                </div>
                <div class="flex justify-center items-center flex-col">
                    <!-- eslint-disable-next-line -->
                    <h4 class="mb-2" v-html="contactPage.acf.main_text" />
                    <iframe id="JotFormIFrame-201081051342135" title="Contact Us" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/201081051342135" frameborder="0" style=" min-width: 100%; height:539px; border:none;" scrolling="no"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    computed: {
        contactPage() {
            return this.$store.state.pages.filter((page) => page.title.rendered === 'Contact')[0]
        },
    },
}
</script>
<style lang="scss" scoped>
.contact {
    background: #f5d343;
    min-height: calc(100vh - var(--nav-height));
    padding: 0px 20px;
    @include breakpoint-down(sm) {
        padding: 0px 8px;
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
}
</style>
