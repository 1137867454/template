<template>
  <div class="height_100 navigator">
    <ul class="flexCake">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <ul class="flexCake flexCake_2">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <ul class="flexCake flexCake_3">
      <li>1</li>
      <li>2</li>
    </ul>
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
.navigator{
  /* padding:8px; */
  /* margin:8px; */
  background:#f0f2f5;
  height: 100%;
  width:100%;
  .flexCake{
    height:140px;
    width:100%;
    // border:solid 1px;
    display:flex;
    justify-content: space-around;
    &>li{
      flex:1;
      background:#fff;
      margin:10px;
      padding:20px 0;
      box-shadow: 0 0 2px 1px #ccc;
    }
  }
  .flexCake_2{
    height:200px;
  }
  .flexCake_3{
    &>li:nth-child(1){
      flex:2;
      // margin-right:0px !important;
      margin:10px;
    }
    &>li:nth-child(2){
      margin:0;
      flex:1;
      // margin-left:20px !important;
    }
  }
}
</style>