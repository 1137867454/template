<template>
  <div class="star relative height_100">
    <!-- <audio class="mp3" autoplay src="../../assets/mp3/G.E.M.邓紫棋 - 光年之外(bq).mp3"></audio> -->
    <!-- <embed src="./mp3/G.E.M.邓紫棋 - 光年之外(bq).mp3"> -->
    <div class="swing swingLeft"></div>
    <div class="swing swingRight"></div>
    <div class="flexLayout">
        <!-- <span class="headPhotoBorder"><img class="headPhoto" src="../../assets/img/3.jpg"></span> -->
        <!-- <img src="../../assets/img/loading.png" alt=""> -->
        <img :class="[{'scale': scaleI == i}, 'headPhoto']" v-for="(v, i) in image" @click="scale(i)" :key="i" src="../../assets/img/3.jpg">
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <!-- <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i>
        <i class="makeNumber"></i> -->
    </div>
    <div v-if="animationVisible"  :class="[{'showCard':animationVisible},'card']">
        <img class="avatar" src="../../assets/img/4.jpg" alt="" srcset="">
        <ul class="memberInfo">
            <li>小明同学</li>
            <li>今日第<span class="number">9</span>位签到</li>
            <li class="coming">闪亮登场</li>
        </ul>
    </div>
    
    <!-- <span style="color:#fff;">{{animationVisible}}</span> -->
    <!-- <img v-if="animationVisible" :class="[{'rotate':animationVisible},'loading']"
     src="../../assets/img/loading.png"> -->
    <img v-if="animationVisible" class="loading"
     src="../../assets/img/loading.png">
     
    <el-button @click.prevent="animationStar">动画开始</el-button>
    <el-button>人物添加</el-button>
    <div class="light"></div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      animationVisible: false,
      scaleI: '',
      image: 20
    }
  },
  computed: {
  },
  mounted() {
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    animationStar() {
      this.animationVisible = true;
      this.timer = setTimeout(() => {
        this.animationVisible = false;
        // this.image ++; 
        this.scaleI = this.image ++; 
        console.log(this.scaleI);
      },4000)
    },
    cancalAnimation() {
      this.scaleI = '';
    },
    scale(i){
      this.scaleI = i;
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../assets/css/animation.scss');
.star{
  box-sizing: border-box;
  margin:0 10px 0;
  width:calc(100% - 20px);
  border:solid 1px #f44;
  overflow: hidden;
  background-image: url("../../assets/img/6.jpg");
  background-size: 100%;
  background-size: 100% 100%;
  .flexLayout{
    width:100%;
    border:solid 1px #fff;
    display:flex;
    
    justify-content:space-around;
    flex-wrap: wrap;
    .makeNumber{ //凑数
      width:90px;
      display: inline-block;
    }
  }
  .scale{
    // transition: all 0.4s ease-in-out;
    // transform: scale(1.5);
    animation: scaleImg 1s ease-in-out;
  }
}
@keyframes scaleImg{
  0%{
    transform:scale(1);
  }
  50%{
    transform:scale(1.5);
  }
  100%{
    transform:scale(1);
  }
}
.light{
  height:20px;
  width:20px;
  border-radius:50%;
  margin:0 auto;
  background:#fff;  
  box-shadow: 0 0 40px #aaa;
}
</style>