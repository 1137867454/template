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
    position:relative;
    // height:20px;
    padding:0px 0;
    line-height:19px;
    width:100px;
    background:#49adff;
    font-size:12px;
    border-radius:4px;
    color:#eee;
    i{
      position:absolute;
      right:4px;top:4px;
    }
  }
}
</style>
