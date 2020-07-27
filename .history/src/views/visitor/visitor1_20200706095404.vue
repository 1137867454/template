<template>
  <div class="visitor height_100">
      <canvas id="theCanvas" width="400" height="400"></canvas> 
  </div>
</template>

<script>
export default {
    name: 'visitor',
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        let ctx = document.getElementById('theCanvas');
        console.log(ctx)
    }
}
</script>

<style>
.visitor{

}
</style>