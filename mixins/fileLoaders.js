const fileLoaders = {
    methods: {
        getImage(file) {
            return require(`@/assets/img/${file}`)
        },
        preloadImage(src) {
            const img = new Image()

            img.src = src
        },
    },
}

export default fileLoaders
