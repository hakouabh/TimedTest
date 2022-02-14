import router from '../router';

const state = {
    user: {}
}
const getters = {
    user(state) {
        return state.user
    }
}
const actions = {
    logout(context){
        axios.get('/api/logout',
            { headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            } 
        })
        .then(response => {
            if (response.status == 200) {
                localStorage.removeItem('access_token')
                localStorage.removeItem('user')
                router.push('/login');
            }
        })
    },
    login(context, payload) {
        axios.post('/api/login', JSON.stringify(payload), 
            { headers: { 'Content-Type': 'application/json' } 
        })
        .then(response => {
            if (response.status == 200) {
                context.commit('loginUserSuccess', response.data);
            }
        })
    },
}
const mutations = {
    loginUserSuccess(state, data) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('user', data.user);
        router.push('/');
        return state.user = data.user
    }
}
export default {
    actions,
    state,
    getters,
    mutations
}