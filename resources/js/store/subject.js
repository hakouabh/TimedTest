
const state = {
    subjects: {}
}
const getters = {
    subjects(state) {
        return state.subjects
    }
}
const actions = {
    subjects(context) {
        axios.get('/api/subjects/get', {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + localStorage.getItem('access_token')
            }
        })
        .then(response => {
            if (response.status == 200) {
                context.commit('getSubjectsSuccess', response.data);
            }
        })
    },
}
const mutations = {
    getSubjectsSuccess(state, data) {
        return state.subjects = data
    }
}
export default {
    actions,
    state,
    getters,
    mutations
}