<template>
  <div class="height_100 navigator">
    <ul class="flex">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
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

<style scoped>
.navigator{
  /* padding:8px; */
  /* margin:8px; */
  background:#f5f5f5;
  height: 100%;
  width:100%;

}
</style>