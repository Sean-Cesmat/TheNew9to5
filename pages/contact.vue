<template>
    <div class="contact flex items-center">
        <div class="container mx-auto">
            <div class="flex w-full grid grid-cols-1 lg:grid-cols-2">
                <div class="">
                    <img src="~/assets/img/phone.jpeg" />
                </div>
                <div class=" flex justify-center items-center flex-col">
                    <h3 class="mb-2">We welcome all suggestions and are always looking for new collaborators! If you are interested in being a part of The New 9-to-5, please use the contact form below.</h3>
                    <iframe id="JotFormIFrame-201081051342135" title="Contact Us" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/201081051342135" frameborder="0" style=" min-width: 100%; height:539px; border:none;" scrolling="no"> </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
}
</script>
<style lang="scss" scoped>
.contact {
    background: #f5d343;
    min-height: calc(100vh - var(--nav-height));
    img {
        margin-left: -60px;
        @include breakpoint-down(md) {
        }
    }
}
</style>
