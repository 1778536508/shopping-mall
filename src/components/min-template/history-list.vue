<template>
  <div class="history-list">
    <div class="history-operation">
      <ul>
        <li><span>{{itemsList.date}}</span></li>
        <li><i></i><label>清空</label></li>
      </ul>
    </div>
    <div class="history-content">
      <ul>
        <li>
          <i>
            <img :src="itemsList.url" alt="">
          </i>
        </li>
        <li>
          <p class="history-content-title">{{itemsList.title}}</p>
          <p class="history-content-txt">{{itemsList.txt}}</p>
          <div class="history-content-icon">
            <span>精选品牌</span>
            <span>精选品牌</span>
          </div>
          <div class="history-content-price">
            <p>{{itemsList.price}}</p>
            <p>
              <i></i>
              <input type="text" placeholder="我想说....">
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "history-list",
    props: {
      itemsList: ''
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/min-template/history-list.less";
</style>
