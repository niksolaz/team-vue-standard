import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 1 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
export default new Vuex.Store({
    state: {
        users: [],
        posts: [],
        albums: [],
        photos: [],
        idU: 0,
        idP: 0,
        idA: 0,
        name: "Nicola"
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        },
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
        getUsersAction(usersContext, users) {
            if (getCookie('users') == "") {
                if (users !== null) {
                    sessionStorage.removeItem('users');
                }
                return axios.get('https://jsonplaceholder.typicode.com/users/')
                    .then(res => {
                        sessionStorage.setItem('users', JSON.stringify(res.data))
                        setCookie('users', 'prensente', 1);
                        usersContext.commit('setUsers', res.data);
                    })
                    .catch(e => {
                        console.log(e)
                    })
            } else {
                usersContext.commit('setUsers', users)
            }
        },
        getPostsAction(postsContext, posts) {
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
        getAlbumsAction(albumsContext, albums) {
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
        getPhotosAction(photosContext, photos) {
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
        getUser(state) {
            return state.users[state.idU];
        },
        getUsers(state) {
            return state.users;
        },
        getPost(state) {
            return state.posts[state.idP];
        },
        getPosts(state) {
            return state.posts;
        },
        getAlbum(state) {
            return state.albums[state.idA];
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
                // state.users[i]['__photos'] = [];
                all.push(state.users[i]);
            }
            for (let x in all) {
                for (let i in state.posts) {
                    if (state.posts[i]['userId'] == all[x]['id']) {
                        all[x]['__posts'].push(state.posts[i]);
                    }
                }
                for (let i in state.albums) {
                    if (state.albums[i]['userId'] == all[x]['id']) {
                        all[x]['__albums'].push(state.albums[i]);
                    }
                }
                // for (let i in state.photos) {
                //     if (state.photos[i]['albumId'] == all[x]['id']) {
                //         all[x]['__photos'].push(state.photos[i]);
                //     }
                // }
            }
            return all;
        }
    }
})