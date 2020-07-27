<template>
  <div class="height_100 permission">
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
  }
}
</script>

<style lang="scss" scoped>
.permission{
}
</style>