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
    store.dispatch('getUsers');
    store.dispatch('getPosts');
  },
  mounted() {
    const itemsUsers = sessionStorage.getItem('users');
    store.commit('setUsers', JSON.parse(itemsUsers));
    const itemsPosts = sessionStorage.getItem('posts');
    store.commit('setPosts', JSON.parse(itemsPosts));
  },
  computed: {
    doneUsers() {
      let users = store.getters.getUsers;
      return users;
    },
    donePosts() {
      let posts = store.getters.getPosts;
      return posts;
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
