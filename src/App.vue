<template>
  <div id="app">
    <Principale />
    <div class="row">
      <div class="col-12">
        <div v-for="(item,i) in getAllItems" :key="i">
            <h2 class="bg-primary"><strong>{{item.name}}</strong></h2>
            <div>
              <h4><strong>Posts of {{item.name}}</strong></h4>
              <div class="border mx-5" v-for="(post,k) in item.__posts" :key="k">
                <h6>{{post.id}} - {{post.title}}</h6>
                <p class="px-5">{{post.body}}</p>
              </div>
            </div>
            <div>
              <h4><strong>Albums of {{item.name}}</strong></h4>
              <div class="border mx-5" v-for="(album,f) in item.__albums" :key="f">
                <p class="px-5">{{album.title}}</p>
              </div>
            </div>
        </div>
      </div>
      <!-- <div class="col-6">
        <div v-for="(user,i) in doneUsers" :key="i">{{user}}</div>
      </div>
      <div class="col-6">
        <div v-for="(post,j) in donePosts" :key="j">{{post}}</div>
      </div>
      <div class="col-12">
        <div v-for="(album,k) in doneAlbums" :key="k">{{album}}</div>
      </div> -->
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
    const itemsPosts = sessionStorage.getItem('posts');
    const itemsAlbums = sessionStorage.getItem('albums');
    const itemsPhotos = sessionStorage.getItem('photos');

    store.dispatch('getUsers',JSON.parse(itemsUsers));
    store.dispatch('getPosts',JSON.parse(itemsPosts));
    store.dispatch('getAlbums',JSON.parse(itemsAlbums));
    store.dispatch('getPhotos',JSON.parse(itemsPhotos));

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
    },
    donePhotos() {
      let photos = store.getters.getPhotos;
      return photos;
    },
    getAllItems() {
      let items = store.getters.getAllItems;
      return items;
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
