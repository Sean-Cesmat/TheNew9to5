<template>
    <div class="blog">
        <div class="container mx-auto">
            <Plaque id="blog" title="BLOG" class="blog__title-plaque" />
            <main>
                <!-- here we loop through the posts -->
                <PinnedPost v-for="post in posts" :key="post.id" class="post">
                    <h3>
                        <!-- for each one of them, we’ll render their title, and link off to their individual page -->
                        <a :href="`posts/${post.slug}`">{{ post.title.rendered }}</a>
                    </h3>
                    <div v-html="post.excerpt.rendered"></div>
                    <a :href="`posts/${post.slug}`" class="readmore">Read more ⟶</a>
                </PinnedPost>
            </main>
        </div>
    </div>
</template>

<script>
import PinnedPost from '@/components/PinnedPost'
import Plaque from '@/components/Plaque'

export default {
    name: 'Blog',
    components: {
        PinnedPost,
        Plaque,
    },
    computed: {
        posts() {
            return this.$store.state.posts
        },
    },
    created() {
        this.$store.dispatch('getPosts')
    },
}
</script>

<style scoped lang="scss">
.blog {
    min-height: calc(100vh - var(--nav-height));
    background-size: cover;
    background-attachment: fixed;
    background-color: #9a6030;
    background-image: url('../assets/img/pinboard.jpg');

    .container {
        padding: 60px 0;
        @include breakpoint-down(sm) {
            padding: 32px 0 32px;
        }
    }

    &__title-plaque {
        width: 600px;
        margin: 80px auto 40px;
    }
}
</style>
