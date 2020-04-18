const fileLoaders = {
    methods: {
        getImage(file) {
            return require(`@/assets/img/${file}`)
        },
    },
}

export default fileLoaders
