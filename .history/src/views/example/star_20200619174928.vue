<template>
  <div class="star height_100">
    <audio class="mp3" autoplay src="../../assets/mp3/G.E.M.邓紫棋 - 光年之外(bq).mp3"></audio>
    <!-- <embed src="./mp3/G.E.M.邓紫棋 - 光年之外(bq).mp3"> -->
    <div class="swing swingLeft"></div>
    <div class="swing swingRight"></div>
    <div>
        <span class="headPhotoBorder"><img class="headPhoto" src="../../assets/img/3.jpg"></span>
        <img class="headPhoto" src="../../assets/img/3.jpg">
        <img class="headPhoto" src="../../assets/img/3.jpg">
        <img class="headPhoto" src="../../assets/img/3.jpg">
        <img class="headPhoto" src="../../assets/img/3.jpg">
        <img class="headPhoto" src="../../assets/img/3.jpg">
        <img class="headPhoto" src="../../assets/img/3.jpg">
        <img class="headPhoto" src="../../assets/img/3.jpg">
    </div>
    <div class="card">
        <img class="avatar" src="../../assets/img/4.jpg" alt="" srcset="">
        <ul class="memberInfo">
            <li>小明同学</li>
            <li>今日第<span class="number">9</span>位签到</li>
            <li class="coming">闪亮登场</li>
        </ul>
    </div>
    <!-- <img class="loading" src=" ../../assets/img/loading.png" alt="" srcset=""> -->
    <el-button @click.prevent="animationStar">动画开始</el-button>
    <el-button>人物添加</el-button>
    <button></button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      animationVisible: false;
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    animationStar() {
      this.animationVisible = true;
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
</style>