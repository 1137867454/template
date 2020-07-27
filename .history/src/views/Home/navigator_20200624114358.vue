<template>
  <div class="height_100 navigator">
    主页
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

<style scoped>
.navigator{
  border:solid 1px;
  /* padding:8px; */
  /* margin:8px; */
  height: 100%;
  width:100%;

}
</style>