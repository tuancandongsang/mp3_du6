<template>
  <div id="list">
    <div class="tittle">
      <div class="header"><b>Bài hát (số bài ở đây)</b></div>
      <div class="icon"><SwapOutlined /></div>
    </div>
    <div @scroll="handleOnScroll()" class="main">
      <div   v-for="(item, index) in listData " key ="index" class="item">
        <img
          :src="item.img"
          alt="ten sy"
        />
        <div class="song">
          <p class="song-name">{{item.name}}</p>
          <p class="song-detail">{{item.description}}</p>
        </div>
        <div class="song-icon">
          <div class="icon"><DownloadOutlined /></div>
          <div class="icon"><DashOutlined /></div>
        </div>
      </div>
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
import create from '@ant-design/icons-vue/lib/components/IconFont';

export default {
  components: { SwapOutlined, DownloadOutlined, DashOutlined },
  data(){
    return {
        listData : [ ] 
        
    }
  },
  created (){
    for(let i = 0 ; i < 8 ; i ++){
      var objectData =  {
            id : i ,
            img : "https://cdn.baogiaothong.vn/upload/images/2019-2/article_img/2019-04-05/hong-nhung-2-1554434540-width900height900.jpg",
            name : "ten bai hat",
            description : "noi dung"
          }
          this.listData.push(objectData)
    }
  },
  methods : {
    handleOnScroll(){
      var listDataScroll = []
        for(let i = 0 ; i < 10 ; i ++){
      var objectData =  {
            id : i ,
            img : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJlma4CE7k2kaDvlwBukxgRamJJcFW2enwNE0yG0iKyOQWc1Fomuavtd-041nDGQoALR3zdo90nUGps3WwUNYHPtj2lE9yFJmIllbA2zzqfa2L5cebUQEwqXQM6CiZ8CIUjB80Y-aNMTSPPCCuhEeg8V9c1f8UlI3xqVA5b9FSQEM7RDUGDV8k6cQMvg/s2048/2.jpg",
            name : "ten bai hat scroll",
            description : "noi dung scroll"
          }
          listDataScroll.push(objectData)
    }
    const newList = [...this.listData , ...listDataScroll]
    this.listData = newList
    }
  }
};
</script>

<style></style>
