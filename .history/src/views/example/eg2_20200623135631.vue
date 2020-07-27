<template>
  <div class="height_100 solid">
      示例二
      <div class="relative">
        <div class="heart_1"></div>
        <div class="heart_2"></div>
        <div class="heart_3"></div>
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

<style>
.heart_1,.heart_2{
  height:100px;
  width:100px;
  border-radius:50%;
  background:#d5093c;
}
heart_3{

}
</style>