<template>
  <div id="app">
    <!-- <Principale /> -->
    <div class="d-flex flex-column justify-content-center">
        <div class="col-9 mx-auto">
          <label for="">
            <strong>User:</strong> 
            <input type="number" name="..." class="border mx-5 text-center" v-model="idU" min="0" :max="maxUsers" v-bind:keyup="readStoreUser(idU)">
            <p>{{getUser}}</p>
          </label>
          <label for="">
            <strong>Post:</strong> 
            <input type="number" name="..." class="border mx-5 text-center" v-model="idP" min="0" :max="maxPosts" v-bind:keyup="readStorePost(idP)">
            <p>{{getPost}}</p>
          </label>
          <label for="">
            <strong>Album:</strong> 
            <input type="number" name="..." class="border mx-5 text-center" v-model="idA" min="0" :max="maxAlbums" v-bind:keyup="readStoreAlbum(idA)">
            <p>{{getAlbum}}</p>
          </label>
        </div>
    </div>
    <!-- <div class="row">
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
              <div class="border mx-5" v-for="(album,a) in item.__albums" :key="a">
                <p class="px-5">{{album.title}}</p>
              </div>
            </div>
            <div>
              <h4><strong>Photos of {{item.name}}</strong></h4>
              <div class="border mx-5" v-for="(photo,p) in item.__photos" :key="p">
                <img :src="photo.thumbnailUrl" :alt="photo.title" width="40" height="40"/>
              </div>
            </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import Principale from './components/Principale'
import store from './store/store'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    Principale
  },
  data() {
    return {
      idU: 0,
      idP: 0,
      idA: 0,
      maxUsers: 0,
      maxPosts: 0,
      maxAlbums: 0
    }
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
  methods: {
    readStoreUser: function(idU) {
        this.maxUsers = this.$store.state.users.length - 1;
        this.$store.state.idU = idU;
    },
    readStorePost: function(idP) {
        this.maxPosts = this.$store.state.posts.length - 1;
        this.$store.state.idP = idP;
    },
    readStoreAlbum: function(idA) {
        this.maxAlbums = this.$store.state.albums.length - 1;
        this.$store.state.idA = idA;
    },
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getPost',
      'getAlbum'
    ]),
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
