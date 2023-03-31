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
      lstSingerById: [],
      lstSingerbyAlbumId: [],
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
        try {
          const [byId, byAlbumId] = await Promise.allSettled([
            this.getSingerById(value),
            this.getSingerByAlbumId(value),
          ]);
          if (byId.status === "fulfilled") {
            console.log(byId);
            // this.lstSingerById = byId.value.data.lstSinger;
          }
          if (byAlbumId.status === "fulfilled") {
            console.log(byAlbumId);
            // this.lstSingerbyAlbumId = byAlbumId.value.data.lstSinger;
          }
          // this.lstSinger = [...this.lstSingerById, ...this.lstSingerbyAlbumId];

          // lọc trùng
          // const lstSingertotal = [...this.lstSingerById, ...this.lstSingerbyAlbumId];
          // this.lstSinger = Array.from(
          //   new Set(lstSingertotal.map((item) => JSON.stringify(item)))
          // ).map((item) => JSON.parse(item));
        } catch (error) {}
      }
    );
  },
  methods: {
    async getSingerById(value) {
      const response = await getSingerById({ singerId: value });
      return response.data.lstSinger;
    },
    async getSingerByAlbumId(value) {
      const response = await getSingerByAlbumId({ singerId: value });
      return response.data.lstSinger;
    },
  },
};
</script>

<style></style>
