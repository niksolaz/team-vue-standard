import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        posts: []
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setPosts(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        getUsers(usersContext, users) {
            if (sessionStorage.getItem('users') === null) {
                return axios.get('https://jsonplaceholder.typicode.com/users/')
                    .then(res => {
                        sessionStorage.setItem('users', JSON.stringify(res.data))
                        usersContext.commit('setUsers', res.data);
                    })
                    .catch(e => {
                        console.log(e)
                    })
            } else {
                usersContext.commit('setUsers', users)
            }
        },
        getPosts(postsContext, posts) {
            if (sessionStorage.getItem('posts') === null) {
                return axios.get('https://jsonplaceholder.typicode.com/posts/')
                    .then(res => {
                        sessionStorage.setItem('posts', JSON.stringify(res.data))
                        postsContext.commit('setPosts', res.data)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            } else {
                postsContext.commit('setPosts', posts)
            }
        }
    },
    getters: {
        getUsers(state) {
            return state.users;
        },
        getPosts(state) {
            return state.posts;
        }
    }
})