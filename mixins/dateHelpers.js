// import getDate from 'date-fns/get_date'
// import store from '@/store'

export default {
    data() {
        return {
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        }
    },
    methods: {
        getDate(date) {
            return this.$dateFns.getDate(date)
        },
    },
}

// const userTimeZone = () => {
//     if (store.state.userState) {
//         if (store.state.userState.timeZone !== 'auto') {
//             return store.state.userState.timeZone
//         }
//     }
//     return Intl.DateTimeFormat().resolvedOptions().timeZone
// }

// // eslint-disable-next-line
// const formatDateWithoutTimezone = (date, pattern = 'dd-MMM-yyyy') => {
//     if (!date) {
//         return null
//     }

//     return format(parseISO(date), pattern)
// }

// const formatDate = (date, pattern = 'dd-MMM-yyyy') => {
//     if (!date) {
//         return null
//     }

//     const timeZone = userTimeZone()
//     return format(utcToZonedTime(date, timeZone), pattern, { timeZone })
// }

// const formatDateTime = (date, pattern = 'dd-MMM-yyyy HH:mm zzz') => {
//     if (!date) {
//         return null
//     }

//     const timeZone = userTimeZone()
//     return format(utcToZonedTime(date, timeZone), pattern, { timeZone })
// }

// const dateFormatters = {
//     methods: {
//         formatDateWithoutTimezone(date, pattern) {
//             return formatDateWithoutTimezone(date, pattern)
//         },
//         formatDate(date, pattern) {
//             return formatDate(date, pattern)
//         },
//         formatDateTime(date, pattern) {
//             return formatDateTime(date, pattern)
//         },
//         padMonth(month) {
//             let s = '0' + month
//             return s.substr(s.length - 2)
//         },
//     },
//     filters: {
//         formatDateWithoutTimezone: (date) => {
//             return formatDateWithoutTimezone(date)
//         },
//         formatDate: (date) => {
//             return formatDate(date)
//         },
//         formatDateTime: (date) => {
//             return formatDateTime(date)
//         },
//     },
// }

// export default dateFormatters
