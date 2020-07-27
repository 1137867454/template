<template>
  <ul id="breadcrumb" class="refuseCopy relative">
    <li class="bread">
      例一
      <i class="el-icon-error"></i>
    </li>
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
    position:relative;
    height:20px;
    width:100px;
    background:#42b;
    font-size:12px;
    border-radius:4px;
    color:#eee;
    i{
      vertical-align: middle;;
    }
  }
}
</style>
