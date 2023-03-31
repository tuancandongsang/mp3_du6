<template>
  <div id="list">
    <div class="tittle">
      <div class="header"><b>Bài hát</b></div>
      <div class="icon"><SwapOutlined /></div>
    </div>
    <div ref="productsList" @scroll="handleScroll" class="main">
      <div v-for="item in products" :key="item.id" class="item">
        <img :src="item.thumbnail" alt="ten sy" />
        <div class="song">
          <p class="song-name">{{ item.songName }}</p>
          <p class="song-detail">{{ item.songName }}</p>
        </div>
        <div class="song-icon">
          <div class="icon"><DownloadOutlined /></div>
          <div class="icon"><DashOutlined /></div>
        </div>
      </div>
      <div v-if="loading">Loading...</div>
    </div>
  </div>
</template>

<script>
import {
  SwapOutlined,
  DownloadOutlined,
  DashOutlined,
} from "@ant-design/icons-vue";
import "./list.scss";
import { getListSong, searchSong } from "../../apis/serveSong";

export default {
  components: { SwapOutlined, DownloadOutlined, DashOutlined },
  data() {
    return {
      products: [],
      loading: false,
      page: 0,
      limit: 10,
      totalProducts: null,
      search: null,
    };
  },
  async created() {
    this.$watch(
      () => this.$route.query.q,
      async (value, _) => {
        console.log(value);
        const res = await searchSong({ albumName: value });
        console.log(res);
        this.products = res.data.lstSong;
      }
    );
  },
  methods: {
    async getProducts() {
      this.loading = true;
      try {
        const response = await getListSong({ page: 0, limit: 20 });
        this.totalProducts = response.data?.lstSong;
        this.products = [...this.products, ...this.totalProducts];
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async handleScroll() {
      const list = this.$refs.productsList;
      if (list.scrollTop + list.clientHeight + 2 >= list.scrollHeight) {
        this.start += 10;
        await this.getProducts();
      }
    },
  },
  async mounted() {
    if (!this.$route.query.q) {
      await this.getProducts();
    } else {
      const res = await searchSong({ songId: this.$route.query.q });
      console.log(res);
      this.products = res.data.lstSong;
    }
  },
};
</script>

<style></style>
