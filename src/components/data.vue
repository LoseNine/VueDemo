<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
        <router-link :to="'/data/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h4>{{item.title}}</h4>
            <p class='mui-ellipsis'>
              <span>发布日期:{{item.add_time|dataFormat}}</span>
              <span>浏览数:{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return{
      news:[],
    }
  },
  created(){
    this.getmsg()
  },
  methods:{
    getmsg(){
      this.$http.get("http://www.liulongbin.top:3005/api/getnewslist").then(result=>{
        if(result.body.status===0){
          this.news=result.body.message;
        }else {
          Toast("news加载失败")
        }
      })
    }
  }
}
</script>

<style scoped lang="css">
  li .mui-ellipsis{
      font-size: 12px;
    display: flex;
    justify-content: space-between;
  }

  .mui-table-view{
    padding-bottom: 50px;
  }
</style>
