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
        let canvas = document.getElementById('theCanvas');
        let ctx = canvas.getContext('2d');
        console.log(ctx)
    }
}
</script>

<style>
.visitor{

}
</style>