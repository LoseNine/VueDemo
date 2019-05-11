<template>
  <div>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
      <img :src="item.img">
    </mt-swipe-item>
  </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9 bot">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/data">
        <img src="../assets/cell/menu1.png">
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
        <img src="../assets/cell/menu2.png" >
        <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/cart">
        <img src="../assets/cell/menu3.png">
        <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
        <img src="../assets/cell/menu4.png" >
        <div class="mui-media-body">留言反馈</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
        <img src="../assets/cell/menu5.png">
        <div class="mui-media-body">视屏专区</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
        <img src="../assets/cell/menu6.png">
        <div class="mui-media-body">联系我们</div></router-link></li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  data(){
    return{
      lunbotuList:[]
    }
  },
  created(){
    this.getLunbo();
  },
  methods:{
    getLunbo(){
      this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result=>{
        //console.log(result)
        if(result.body.status===0){
          this.lunbotuList=result.body.message;
        }else {
          Toast("加载轮播图失败");
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .mint-swipe {
    height: 210px;
    background-color: #2aabd2;
  }
  .mint-swipe img{
    width: 100%;
    height: 100%;
  }
  .mui-table-view{
    background-color: white;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-right: 0 white;
    border-bottom: 0 white;
  }
  li img{
    width: 60px;
    height: 60px;
  }
  .bot{
    padding-bottom: 50px;
  }
</style>
