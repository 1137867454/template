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
  }
  .heart_square{
    background:linear-gradient(-90deg,#F50A45 0%,#d5093c 40%);
    height:86px;
    width:86px;
    position:absolute;
    top:50px;
    left:46px;
    transform: rotate(45deg);
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
}
</style>