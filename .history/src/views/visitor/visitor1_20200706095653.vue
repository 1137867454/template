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
        width = canvas.width
        console.log(ctx)
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