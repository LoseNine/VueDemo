<template>
  <div class="newinfo-contrainer">
      <h3 class="stitle">{{article.title}}</h3>
      <p class="subline">
        <span>发布时间:{{article.add_time|dataFormat}}</span>
        <span>浏览数:{{article.click}}次</span>
      </p>
    <hr>
    <div class="content" v-html="article.content">

    </div>
    <comm-views :id="nid"></comm-views>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import views from '../components/subpom/view'
export default {
  data(){
    return{
        nid:this.$route.params.id,
        article:null
    }
  },
  components:{
    "comm-views":views
  },
  created(){
    this.getnewsinfo();
  },
  methods:{
    getnewsinfo(){
        this.$http.get("http://www.liulongbin.top:3005/api/getnew/"+this.nid).then(result=>{
          if(result.body.status===0){
            this.article=result.body.message[0];
          }else {
            Toast("news加载失败")
          }
        })
    },
  }
}
</script>

<style lang="css" scoped>
  .newinfo-contrainer{
    padding: 0 4px;
  }
  .newinfo-contrainer .subline{
    display: flex;
    justify-content: space-around;
    margin-bottom: 0;
    padding-top: 5px;
    color: dodgerblue;
}
  .newinfo-contrainer .stitle{
    font-size: 16px;
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    text-align: center;
  }
  hr{
    margin-top: 3px;
  }
  .content img{
    width: 100%;
    height: auto;
  }
  comm-views{
    padding-bottom: 50px;
  }
</style>
