<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论" maxlength="120" v-model="usercomment" v-on:keyup.enter="submitpost"></textarea>
    <mt-button type="primary" size="large" @click="submitpost">发表</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in commentmsg" :key="item.add_time">
        <div class="cmt-head">第{{index+1}}楼用户:{{item.user_name}}&nbsp;&nbsp;时间:{{item.add_time|dataFormat}}</div>
        <div class="cmt-body">{{item.content ?item.content : "该用户很懒，没说什么"}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="addmsg">加载更多</mt-button>
  </div>

</template>

<script>
  import {Toast} from 'mint-ui'
export default {
  data(){
    return {
      pageindex:1,
      commentmsg:[],
      usercomment:"",
      content:(this.usercomment).trim()

    }
  },
  created(){
    this.getcomment()
  },
  methods:{
    getcomment(){
      this.$http.get("http://www.liulongbin.top:3005/api/getcomments/"+this.id+"?pageindex="+this.pageindex)
        .then(result=>{
          if(result.body.status===0){
            //this.commentmsg=result.body.message;
            this.commentmsg=this.commentmsg.concat(result.body.message)
          }else{
            Toast("获取评论失败")
          }
        })
    },
    addmsg(){
      this.pageindex+=1;
      this.getcomment()
    },
    submitpost(){
      if (this.content.length===0){
        return Toast("评论不能为空")
      }
      this.$http.post("http://www.liulongbin.top:3005/api/postcomment/"+this.id,this.content)
        .then(result=>{
          if(result.body.status===0){
            var cmt={user_name:"匿名用户",add_time:Data.now(),content:this.usercomment};
            this.commentmsg.unshift(cmt);
            this.usercomment="";
            Toast("提交评论成功");
          }else {
            Toast("评论提交失败")
          }
        })
    }
  },
  props:["id"],

}

</script>
<style scoped lang="css">
  .comment{
    padding-bottom: 60px;
  }
  .cmt-list{
    padding-bottom: 20px;
  }
  textarea{
    margin-bottom: 2px;
    font-size: 14px;
  }
  hr{
    margin-top: 2px;
  }
  .cmt-list {
      padding: 3px;
    margin: 10px 0px;
  }
  .cmt-list .cmt-head{
    line-height: 35px;
    background-color: #CCCCCC;
    font-size: 15px;
  }
  .cmt-list .cmt-item{
    margin-bottom: 2px;
  }
</style>
