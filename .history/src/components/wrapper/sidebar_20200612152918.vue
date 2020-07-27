<template>
  <div id="sidebar">
      <!-- aside 侧边导航栏 -->
      <el-menu style="height:100%; overflow-y:auto; height:93%;"
        class="aside aside-menu refuseCopy"
        text-color="#909399"
        active-text-color="#39f"
        unique-opened
        :collapse="unfold"
        :router="true"
        :default-active="activeIndex2"
      >
          <el-submenu
          v-for="(v,i) in getRouter"
          :key="i"
          :index="i + ''"
        >
          <template slot="title">
            <i :class="v.meta.icon" />
            <span slot="title" style="font-size:12px;">{{ v.meta.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(child,id) in v.children"
              :key="id"
              :index="v.path + '/' + child.path" @click.native="isActive"
            >
              <i :class="child.meta.icon" />{{ child.meta.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <div class="asideCopy" 
        style="border:solid 1px;position:absolute;
        top:0; z-index:1;
        width:100%;height:93%;overflow-y:auto;">
        </div> -->
        <!-- <el-button size="mini" @click="unfold = !unfold">展&收</el-button> -->
      <!-- <div style="height:7%;width:16%;position:absolute;bottom:-10px;border:solid 1px;"></div> -->
        <i
          id="showHidden"
          :class="unfold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          @click="showHidden"
        />
      </el-menu>
  </div>
</template>

<script>
export default {
    name: 'sidebar',
    data() {
        return {
            unfold: false,      //导航栏是否展开
        }
    },
    computed: {
        getRouter() {
            return this.$store.getters.getRouter;
        }
    }
}
</script>

<style>
#sidebar{
    height:100%;
}
</style>