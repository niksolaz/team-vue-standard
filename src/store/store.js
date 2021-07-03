import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        posts: [],
        albums: [],
        photos: []
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setPosts(state, posts) {
            state.posts = posts
        },
        setAlbums(state, albums) {
            state.albums = albums
        },
        setPhotos(state, photos) {
            state.photos = photos
        },
        setMatchAll(state, matchAll) {
            state.matchAll = matchAll
        }
    },
    actions: {
        getUsers(usersContext, users) {
            if (users === null) {
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
            if (posts === null) {
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
        },
        getAlbums(albumsContext, albums) {
            if (albums === null) {
                return axios.get('https://jsonplaceholder.typicode.com/albums/')
                    .then(res => {
                        sessionStorage.setItem('albums', JSON.stringify(res.data))
                        albumsContext.commit('setAlbums', res.data)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            } else {
                albumsContext.commit('setAlbums', albums)
            }
        },
        getPhotos(photosContext, photos) {
            if (photos === null) {
                return axios.get('https://jsonplaceholder.typicode.com/photos/')
                    .then(res => {
                        sessionStorage.setItem('photos', JSON.stringify(res.data))
                        photosContext.commit('setPhotos', res.data)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            } else {
                photosContext.commit('setPhotos', photos)
            }
        },

    },
    getters: {
        getUsers(state) {
            return state.users;
        },
        getPosts(state) {
            return state.posts;
        },
        getAlbums(state) {
            return state.albums;
        },
        getPhotos(state) {
            return state.photos;
        },
        getAllItems(state) {
            let all = []
            for (let i in state.users) {
                state.users[i]['__posts'] = [];
                state.users[i]['__albums'] = [];
                state.users[i]['__photos'] = [];
                all.push(state.users[i]);
            }
            for (let x in all) {
                for (let i in state.posts) {
                    if (state.posts[i]['userId'] == all[x]['id']) {
                        all[x]['__posts'].push(state.posts[i]);
                    }
                }
                for (let i in state.posts) {
                    if (state.albums[i]['userId'] == all[x]['id']) {
                        all[x]['__albums'].push(state.albums[i]);
                    }
                }
            }
            return all;
        }
    }
})