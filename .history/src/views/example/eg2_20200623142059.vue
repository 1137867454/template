<template>
  <div class="height_100 solid">
      示例二
      <div class="relative heartBeat">
        <div class="heart left"></div>
        <div class="heart right"></div>
        <div class="heart_square"></div>
      </div>
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
.heartBeat{
  border:solid 1px;
  margin:0 auto;
  height:200px;
  width:200px;

  .heart{
    position:absolute;
    height:100px;
    width:100px;
    border-radius:50%;
    background:linear-gradient(-90deg,#F50A45 0%,#d5093c 40%);
    animation: beat 2s linear;
  }
  .heart_square{
    background:linear-gradient(-45deg,#B80734 0%,#d5093c 40%);
    height:96px;
    width:96px;
    position:absolute;
    top:42px;
    left:42px;
    transform:rotateZ(225deg);
    z-index:2;
  }
  .left{
    z-index:10;
  }
  .right{
    z-index:1;
    right:20px;
  }
  heart_3{

  }
  @keyframes beat {
    0%{
      transform: scale(0);
      box-shadow: 0 0 40px #d5093c;
    }
    50%{
      transform:scale(1.2);
      box-shadow: 0 0 70px #d5093c;
    }
    100%{
      transform:scale(1);
      box-shadow: 0 0 40px #d5093c;
    }
  }
}
</style>