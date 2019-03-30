<template>
  <div class="find-index">
<!--    <div class="scroll-list-wrap">-->
<!--      <cube-scroll-->
<!--        ref="scroll">-->

<!--  <p>111111</p>-->
    <div class="find-box" id="findBox">
      <img class="find-index-img" src="https://public.danke.com.cn/public-20180713-Fjd-1W9kIPrb51uIDcRaHwSqu5j1-roomPcList.jpg" alt="">
<!--      <div id="webId">-->
        <!-- 悬浮的HTML -->
        <div class="xuanfu" id="moveDiv" :class="{active: isActive}" @click="btnMove"
             @mousedown="down" @touchstart="down"
             @mousemove="move" @touchmove="move"
             @mouseup="end" @touchend="end"
        >
          <div class="xuanfu-box">
            <div class="xuanfu-box-content">墙面{{offx}} X {{offy}}</div>
          </div>
        </div>
<!--      </div>-->
    </div>


  <div class="find-remove">
    删除
  </div>

<!--      </cube-scroll>-->
<!--    </div>-->
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        flags: false,
        position: { x: 0, y: 0 },
        nx: '',
        ny: '',
        dx: '',
        dy: '',
        xPum: '',
        yPum: '',
        offx: '',
        offy: '',
        isActive: false,
      }
    },
    methods: {
      btnMove() {
        this.isActive = !this.isActive;
        console.log(this.isActive);
      },
      // 实现移动端拖拽
      down(){
        this.flags = true;
        var touch;
        if(event.touches){
          touch = event.touches[0];
        }else {
          touch = event;
        }
        this.position.x = touch.clientX;
        this.position.y = touch.clientY;
        this.dx = moveDiv.offsetLeft;
        this.dy = moveDiv.offsetTop;
        // 点击后存储相对于父标签的距离想想x,y
        this.offx = moveDiv.offsetLeft;
        this.offy = moveDiv.offsetTop;
        //ens
      },
      move(){
        // 拖拽后存储相对于父标签的距离想想x,y
        this.offx = moveDiv.offsetLeft;
        this.offy = moveDiv.offsetTop;
        //ens
        if(this.flags){
          var touch ;
          if(event.touches){
            touch = event.touches[0];
          }else {
            touch = event;
          }
          this.nx = touch.clientX - this.position.x;
          this.ny = touch.clientY - this.position.y;
          this.xPum = this.dx+this.nx;
          this.yPum = this.dy+this.ny;


          // 在一定区域内拖拽
          if(this.xPum < 10) {
            this.xPum = 10;
            if (this.yPum <= 10) {
              this.yPum = 10
            }else if (this.yPum >= findBox.clientHeight - moveDiv.offsetHeight -10) {
              this.yPum = findBox.clientHeight - moveDiv.offsetHeight -10;
            }
          }else if(this.xPum > document.documentElement.clientWidth - moveDiv.offsetWidth -10) {
            this.xPum = (document.documentElement.clientWidth - moveDiv.offsetWidth - 10);
            if (this.yPum <= 10) {
              this.yPum = 10
            }else if (this.yPum >= findBox.clientHeight - moveDiv.offsetHeight -10) {
              this.yPum = findBox.clientHeight - moveDiv.offsetHeight -10;
            }
          }else if (this.yPum < 10) {
            this.yPum = 10;
          }else if (this.yPum > findBox.clientHeight - moveDiv.offsetHeight -10) {
            this.yPum = findBox.clientHeight - moveDiv.offsetHeight -10;
          }
          // ens



          moveDiv.style.left = this.xPum+"px";
          moveDiv.style.top = this.yPum +"px";
          //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
          document.addEventListener("touchmove",function(){
            event.preventDefault();
          },{ passive: false });
        }
      },
      //鼠标释放时候的函数
      end(){
        // 释放后存储相对于父标签的距离想想x,y
        this.offx = moveDiv.offsetLeft;
        this.offy = moveDiv.offsetTop;
        //ens
        this.flags = false;
      },
    },
    mounted() {

    }

  }
</script>
<style lang="less" scoped>



  .find-index {
    width: 100%;
    height: 500px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #fff;
    .scroll-list-wrap {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 52px;
      right: 0;
      margin: auto;
    }
  }
  .find-box {
    width: 100%;
    height: 500px;
    background: #3dbcc6;
    position: relative;
    overflow: hidden;
  }
  .find-index-img {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  /**
   小圆点闪烁
    */
  /*@-webkit-keyframes scaleout {*/
  /*  0% { -webkit-transform: scale(1.0) }*/
  /*  100% {*/
  /*    -webkit-transform: scale(1.3);*/
  /*    opacity: 0;*/
  /*  }*/
  /*}*/
  /*@keyframes scaleout {*/
  /*  0% {*/
  /*    transform: scale(1.0);*/
  /*    -webkit-transform: scale(1.0);*/
  /*  } 100% {*/
  /*      transform: scale(1.3);*/
  /*      -webkit-transform: scale(1.1);*/
  /*      opacity: 0;*/
  /*    }*/
  /*}*/
  @keyframes scaleout {
    0% {
      transform: scale(1);
    }
    50%,
    75% {
      transform: scale(2);
    }
    78%, 100% {
      opacity: 0;
    }
  }

  .xuanfu {
    height: 10px;
    width: 10px;
    /* 如果碰到滑动问题，1.3 请检查 z-index。z-index需比web大一级*/
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;

    border-radius: 0.8rem;
    background-color: rgba(0, 0, 0, 0.55);
    .xuanfu-box {
      height: 10px;
      width: 10px;
      position: relative;
      .xuanfu-box-content {
        background-color: rgba(0, 0, 0, 0.55);
        height: 20px;
        width: 150px;
        position: absolute;
        top: -5px;
        left: 30px;
        border-radius: 0 10px 10px 0;
        text-align: center;
        line-height: 20px;
        color: #fff;
        &::before {
          display: block;
          content: '';
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-right: 20px solid rgba(0, 0, 0, 0.55);
          border-bottom: 10px solid transparent;
          position: absolute;
          left: -20px;
          top: 0;
        }
        &::after {
          display: block;
          content: '';
          width: 10px;
          height: 10px;
          background: rgba(0, 0, 0, 0.55);
          position: absolute;
          left: -30px;
          top: 5px;
          border-radius: 100%;
          -webkit-animation: scaleout 1s infinite ease-in-out;
          animation: scaleout 1s infinite ease-in-out;
        }
      }
    }
    &.active {
      .xuanfu-box-content {
        left: auto;
        right: 30px;
        border-radius: 10px 0px 0px 10px;
        &::before {
          border-top: 10px solid transparent;
          border-left: 20px solid rgba(0, 0, 0, 0.55);
          border-bottom: 10px solid transparent;
          border-right: none;
          left: auto;
          right: -20px;
        }
        &::after {
          left: auto;
          right: -30px;
        }
      }
    }
  }
  .yuanqiu {
    height: 2.7rem;
    width: 2.7rem;
    border: 0.3rem solid rgba(140, 136, 136, 0.5);
    margin: 0.65rem auto;
    color: #000000;
    font-size: 12px;
    line-height: 2.7rem;
    text-align: center;
    border-radius: 100%;
    background-color: #ffffff;
  }
  .find-remove {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -1.5rem;
    background: #9B0000;
    text-align: center;
    line-height: 3rem;
    color: #fff;
  }

</style>
