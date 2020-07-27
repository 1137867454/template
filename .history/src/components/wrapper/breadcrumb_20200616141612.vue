<template>
  <ul id="breadcrumb" class="refuseCopy relative">
    <li class="bread is-active">
      首页
      <!-- <i class="el-icon-error"></i> -->
    </li>
    <li class="bread">
      例一
      <i class="el-icon-error"></i>
    </li>
    <li class="bread">
      例二
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
  margin:6px 10px;
  padding:0 4px;
  border-bottom:solid 1px #438eb9;
  text-align:left;
  .bread{
    display:inline-block;
    position:relative;
    padding:2px 20px;
    margin-right:4px;
    line-height:19px;
    background:#e0e0e0;
    font-size:12px;
    color:#444;

    &:hover{
      background:#49adff;
      color:#fff;
      cursor:pointer;
    }
    i{
      position:absolute;
      right:4px;top:4px;
    }
  }
  .is-active{
    background:#49adff;
    color:#fff;
  }
}
</style>
