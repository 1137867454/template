<template>
  <div class="height_100 navigator">
    主页
    <!-- <div class="chest">
    <div class="heart left sided top"></div>
    <div class="heart center"></div>
    <div class="heart right sided"></div>
</div> -->
<!-- <div class="meteor">
        <div class="star"></div>
    </div> -->
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
}
</style>