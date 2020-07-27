<template>
  <div class="height_100 solid">
      示例二
      <div class="relative heartBeat">
        <div class="heart"></div>
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
    background:#d5093c;
  }
  .heart_square{
    background:#d5093c;
    height:100px;
    width:100px;
    position:absolute;
    top:50px;
    left:50px;
  }
  .left{

  }
  .right{
    right:0;
  }
  heart_3{

  }
}
</style>