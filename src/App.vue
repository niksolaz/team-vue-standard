<template>
  <div id="app">
    <Principale />
    <div class="row">
      <div class="col-6">
        <div v-for="(user,i) in doneUsers" :key="i">{{user}}</div>
      </div>
      <div class="col-6">
        <div v-for="(post,j) in donePosts" :key="j">{{post}}</div>
      </div>
      <div class="col-12">
        <div v-for="(album,k) in doneAlbums" :key="k">{{album}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import Principale from './components/Principale'
import store from './store/store'
export default {
  name: 'app',
  components: {
    Principale
  },
  beforeMount() {
    const itemsUsers = sessionStorage.getItem('users');
    store.dispatch('getUsers',JSON.parse(itemsUsers));
    const itemsPosts = sessionStorage.getItem('posts');
    store.dispatch('getPosts',JSON.parse(itemsPosts));
    const itemsAlbums = sessionStorage.getItem('albums');
    store.dispatch('getAlbums',JSON.parse(itemsAlbums));
  },
  mounted() {
  },
  computed: {
    doneUsers() {
      let users = store.getters.getUsers;
      return users;
    },
    donePosts() {
      let posts = store.getters.getPosts;
      return posts;
    },
    doneAlbums() {
      let albums = store.getters.getAlbums;
      return albums;
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text-left {
    text-align: left
}
</style>
