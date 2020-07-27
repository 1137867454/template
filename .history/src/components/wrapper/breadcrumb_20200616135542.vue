<template>
  <ul id="breadcrumb" class="refuseCopy relative">
    <li class="bread">例一</li>
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
    background:#42b;
  }
}
</style>
