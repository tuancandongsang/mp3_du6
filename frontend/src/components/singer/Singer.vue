<template>
  <div id="singer">
    <div class="tittle">
      <div class="header"><b>Danh sách ca sỹ </b></div>
      <div class="icon"><SwapOutlined /></div>
    </div>
    <div class="main">
      <div class="item" v-for="item in lstSinger" :key="item.id">
        <img :src="item.thumbnail" :alt="item.singerName" />
        <div class="song">
          <p class="song-name">{{ item.singerName }}</p>
          <!-- <p class="song-detail">Có tổng cộng xxx bài hát</p> -->
        </div>
        <div class="song-icon">
          <div class="icon"><PlayCircleOutlined /></div>
          <div class="icon"><DashOutlined /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SwapOutlined,
  PlayCircleOutlined,
  DashOutlined,
} from "@ant-design/icons-vue";
import "./singer.scss";
import {
  getSingerList,
  getSingerById,
  getSingerByAlbumId,
  addSinger,
} from "../../apis/serveSinger";

export default {
  components: { SwapOutlined, PlayCircleOutlined, DashOutlined },
  data() {
    return {
      lstSinger: [],
    };
  },
  async created() {
    if (!this.$route.query.q) {
      try {
        const res = await getSingerList({ page: 0, limit: 20 });
        this.lstSinger = res.data.lstSinger;
      } catch (error) {}
    }
    this.$watch(
      () => this.$route.query.q,
      async (value, _) => {
        if (!value) {
          try {
            const res = await getSingerList({ page: 0, limit: 20 });
            this.lstSinger = res.data.lstSinger;
          } catch (error) {}
        } else {
          let arrAllPromise = [];
          let resultsSearch = [];
          Promise.allSettled([
            getSingerById({ singerId: value }),
            getSingerByAlbumId({ singerId: value }),
          ]).then((results) => {
            arrAllPromise = results.map((item) => item?.value?.data?.lstSinger);
            for (let i = 0; i < arrAllPromise.length; i++) {
              if (arrAllPromise[i]) {
                resultsSearch.push(...arrAllPromise[i]);
              }
            }
            this.lstSinger = resultsSearch;
          });
        }
      }
    );
  },
  async mounted() {},
};
</script>

<style></style>
