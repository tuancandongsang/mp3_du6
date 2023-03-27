<template>
  <div id="home">
    <div class="background"></div>
    <div class="container">
      <h1>MP3 Zing</h1>
      <div class="search">
        <input type="text" placeholder="Search name, singer..." />
      </div>
      <div class="list">
        <div
          class="item"
          @click="selectMenu('list')"
          :class="select === 'list' ? 'shadow' : ''"
        >
          Bài hát
        </div>
        <div
          class="item"
          @click="selectMenu('playlist')"
          :class="select === 'playlist' ? 'shadow' : ''"
        >
          Playlist
        </div>
        <div
          class="item"
          @click="selectMenu('singer')"
          :class="select === 'singer' ? 'shadow' : ''"
        >
          Singer
        </div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "./home.scss";
export default {
  name: "home",
  data() {
    return {
      select: "list",
    };
  },
  methods: {
    selectMenu(text) {
      this.select = text;
      console.log(this.$route);
      this.$router.push(`${text}`);
    },
  },
  computeds: {
    select() {
      return this.select;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>