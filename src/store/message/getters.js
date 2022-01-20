import {MESSAGE} from '../names'

export default {
    [MESSAGE](state) {
        return {
            title: state.title,
            description: state.description,
            theme: state.theme,
            icon: state.icon,
            show: state.show
        }
    }
}