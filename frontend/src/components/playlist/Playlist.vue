<template>
  <div id="playlist">
    <div class="tittle">
      <div class="header"><b>Danh sách hài hát</b></div>
      <div class="icon"><SwapOutlined /></div>
    </div>
    <div class="main">
      <div class="box" v-for="item in lstAlbum" :key="item?.id">
        <img :src="item?.thumbnail" alt="ten ca sy" />
        <p class="name">{{ item?.albumName }}</p>
        <p class="description">{{ item?.userCreateId }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { SwapOutlined } from "@ant-design/icons-vue";
import "./playlist.scss";
import { getAlbulm, getAlbumById, getAlbumByName } from "../../apis/serveAlbum";

export default {
  components: { SwapOutlined },
  data() {
    return {
      lstAlbum: [],
    };
  },
  async created() {
    this.$watch(
      () => this.$route.query.q,
      async (value, _) => {
        let arrAllPromise = [];
        let resultsSearch = [];
        Promise.allSettled([
          getAlbumByName({ albumName: value }),
          getAlbumById({ albumId: value }),
        ]).then((results) => {
          arrAllPromise = results.map((item) => item?.value?.data?.lstAlbum);
          for (let i = 0; i < arrAllPromise.length; i++) {
            if (arrAllPromise[i]) {
              resultsSearch.push(...arrAllPromise[i]);
            }
          }
          this.lstAlbum = resultsSearch;
        });
      }
    );
    if (!this.$route.query.q) {
      try {
        const res = await getAlbulm({ page: 0, limit: 20 });
        this.lstAlbum = res.data.lstAlbum;
      } catch (error) {}
    }
  },
};
</script>

<style></style>
