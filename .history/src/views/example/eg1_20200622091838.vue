<template>
  <div class="height_100">
      示例一111111111111111111111111111111111111111111111111111111111111111111
      111111111111111111111111111111111111111111111111111111111111111111
      111111111111111111111111111111111111111111111111111111111111111111
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

</style>