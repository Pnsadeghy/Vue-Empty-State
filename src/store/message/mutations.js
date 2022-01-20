import {MESSAGE_SET, MESSAGE_HIDE} from '../names'

export default {
    [MESSAGE_SET](state, data) {
        for (const key in data)
            state[key] = data[key]
        state.show = true
    },
    [MESSAGE_HIDE](state) {
        state.show = false
    }
}