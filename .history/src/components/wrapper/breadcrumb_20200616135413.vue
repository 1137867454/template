<template>
  <ul id="breadcrumb" class="refuseCopy relative">
    <li class="bread"></li>
    </ul>
</template>

<script>
export default {
    name: 'breadcrumb',
    data() {
        return {
            infoVisible: false,
            activeIndex: ''
        }
    },
    methods: {
        removeLogin() {

        }
    }
}
</script>
<style lang="scss" scoped>
#breadcrumb{
  .bread{
    height:20px;
    width:100px;
  }
}
</style>
