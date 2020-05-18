<template>
    <div class="individual-post">
        <div class="container mx-auto">
            <Pinned v-if="post" class="individual-post__main">
                <h1>{{ post.title.rendered }}</h1>
                <!-- eslint-disable-next-line -->
                <section v-html="post.content.rendered"></section>
            </Pinned>
            <Pinned v-else>Loading...</Pinned>
        </div>
    </div>
</template>
<script>
import Pinned from '@/components/Pinned'

export default {
    components: {
        Pinned,
    },
    data() {
        return {
            slug: this.$route.params.slug,
        }
    },
    computed: {
        posts() {
            return this.$store.state.posts
        },
        post() {
            return this.posts.find((el) => el.slug === this.slug)
        },
    },
    created() {
        this.$store.dispatch('getPosts')
    },
}
</script>

<style scoped lang="scss">
.individual-post {
    min-height: calc(100vh - var(--nav-height));
    background-size: cover;
    background-attachment: fixed;
    background-color: #9a6030;
    background-image: url('../../assets/img/pinboard.jpg');

    .container {
        padding: 60px 0;
        @include breakpoint-down(sm) {
            padding: 32px 0 32px;
        }
    }

    &__main {
        background: #fff;
    }
}
</style>
