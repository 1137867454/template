<template>
  <div>
      eg1
      {{get_activeIndex}}
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
      return this.$store.get_activeIndex;
    }
  },
  mounted() {
    console.log(this.$router)
    console.log(this.$route)
  }
}
</script>

<style>

</style>