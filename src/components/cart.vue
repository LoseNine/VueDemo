<template>
  <div class="good-list">
      <div class="good-item">
          <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg">
          <h1 class="title">手机手机手机手机手机手机手机手机手机</h1>
          <div class="info">
            <div class="price">
              <span class="now">现价:999$</span>
              <span class="old">原价:8888$</span>
            </div>
            <div class="sell">
              <span>55件</span>
              <span>222</span>
            </div>
          </div>

      </div>
      <div class="good-item">
        <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg">
        <h1 class="title">手机</h1>
        <div class="price">
          <span>999</span>
          <span>8888</span>
        </div>
        <div class="sell">
          <span>55</span>
          <span>222</span>
        </div>
      </div>
      <div class="good-item">
        <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg">
        <h1 class="title">手机</h1>
        <div class="price">
          <span>999</span>
          <span>8888</span>
        </div>
        <div class="sell">
          <span>55</span>
          <span>222</span>
        </div>
      </div>
  </div>
</template>

<script>
</script>

<style lang="css" scoped>
  .good-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    padding-bottom: 50px;
  }
  .good-list .title{
    font-size: 14px;
  }
  .good-list .good-item{
    width: 49%;
    border: 1px solid #CCCCCC;
    box-shadow: 0 0 8px #CCCCCC;
    margin: 3px 1px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .good-list .good-item img{
    width: 100%;
  }
  .info{
    background-color: #EEEEEE;
  }
  .info .price .now{
    color: red;
    font-weight: bold;
    font-size: 14px;
  }
  .info .price .old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
  }
  .sell{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
</style>
