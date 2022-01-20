import mutations from './mutations'
import getters from './getters'

const state = {
    title: 'State Title',
    message: '',
    icon: 'warning',
    theme: 'empty',
    show: false
}

export default {
    state,
    getters,
    mutations,
    actions: {}
}