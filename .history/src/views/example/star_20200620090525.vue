<template>
  <div class="star relative height_100">
    <audio class="mp3" autoplay src="../../assets/mp3/G.E.M.邓紫棋 - 光年之外(bq).mp3"></audio>
    <!-- <embed src="./mp3/G.E.M.邓紫棋 - 光年之外(bq).mp3"> -->
    <div class="swing swingLeft"></div>
    <div class="swing swingRight"></div>
    <div>
        <span class="headPhotoBorder"><img class="headPhoto" src="../../assets/img/3.jpg"></span>
        <!-- <img src="../../assets/img/loading.png" alt=""> -->
        <img :class="[{'scale': scaleI == i}, 'headPhoto']" v-for="(v, i) in 10" @click="scale(i)" :key="i" src="../../assets/img/3.jpg">
    </div>
    <div v-if="animationVisible"  :class="[{'showCard':animationVisible},'card']">
        <img class="avatar" src="../../assets/img/4.jpg" alt="" srcset="">
        <ul class="memberInfo">
            <li>小明同学</li>
            <li>今日第<span class="number">9</span>位签到</li>
            <li class="coming">闪亮登场</li>
        </ul>
    </div>
    
    <span style="color:#fff;">{{animationVisible}}</span>
    <img v-if="animationVisible" :class="[{'rotate':animationVisible},'loading']"
     src="../../assets/img/loading.png">
    <el-button @mouseup.prevent="animationStar" @mousedown.prevent="cancalAnimation">动画开始</el-button>
    <el-button>人物添加</el-button>
    <button></button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      animationVisible: false,
      scaleI: ''
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    animationStar() {
      this.animationVisible = true;
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
  margin:0 10px;
  background-image: url("../../assets/img/6.jpg");
  background-size: 100%;
  background-size: 100% 100%;
}
.scale{
  transition: all 0.4s ease-in-out;
  // transform: scale(1.5);
  animation: scaleImg 1s ease-in-out;
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
</style>