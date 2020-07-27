<template>
  <div class="height_100 navigator">
    主页
    123
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
  height: 100%;
  width:100%;

}
</style>