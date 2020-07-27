<template>
  <div class="visitor height_100">
      <canvas id="theCanvas"></canvas> 
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
        let canvas = document.getElementById('theCanvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = canvas.offsetWidth,
        height = canvas.height = canvas.offsetHeight;
        var A = 50,
            w = 0.02,
            q = 0,
            H = height / 2;
        // 绘图方法
        (function draw() {
            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();
            ctx.storkStyle = "#000";
        }())
    }
}
</script>

<style>
#theCanvas{
    height:100%;
    width:100%;
}
.visitor{

}
</style>