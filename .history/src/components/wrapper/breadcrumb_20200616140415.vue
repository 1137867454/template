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
  padding:4px;
  .bread{
    display:inline-block;
    position:relative;
    padding:2px 20px;
    line-height:19px;
    background:#49adff;
    font-size:12px;
    color:#eee;
    i{
      position:absolute;
      right:4px;top:4px;
    }
  }
}
</style>
