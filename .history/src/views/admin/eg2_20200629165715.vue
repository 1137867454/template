<template>
  <div class="height_100 solid">
      <!-- 心率动画
      <div class="relative heartBeat">
        <div class="heart left"></div>
        <div class="heart right"></div>
        <div class="heart_square"></div>
      </div> -->
      <button class="btn"> 测试</button>
  </div>
</template>

<script>
export default {

  data() {
    return {

    }
  },
  computed: {
    get_activeIndex() {
      return this.$store.getters.get_activeIndex;
    }
  },
  mounted() {
    // console.log(this.$router)
    // console.log(this.$route)
    // console.log(this.$store.getters.get_activeIndex)
  }
}
</script>

<style lang="scss" scoped>
.btn{
  background:none;
  border:solid 1px;
}
.heartBeat{
  border:solid 1px;
  margin:80px auto;
  height:200px;
  width:200px;

  .heart{
    position:absolute;
    height:100px;
    width:100px;
    border-radius:50%;
   background:linear-gradient(-90deg,#F50A45 0%,#d5093c 40%);
    animation: beat 2s linear infinite;
  }
  .heart_square{
    background:linear-gradient(-45deg,#B80734 0%,#d5093c 40%);
    height:97px;
    width:97px;
    position:absolute;
    top:42px;
    left:41px;
    z-index:2;
    animation: beat 2s linear infinite;
  }
  .left{
    z-index:11;
  }
  .right{
    z-index:10;
    right:20px;
  }
  @keyframes beat {
    0%{
      transform: scale(1) rotate(225deg);
      box-shadow: 0 0 40px #d5093c;
    }
    50%{
      transform:scale(1.2) rotate(225deg);
      box-shadow: 0 0 70px #d5093c;
    }
    100%{
      transform:scale(1) rotate(225deg);
      box-shadow: 0 0 40px #d5093c;
    }
  }
}
</style>