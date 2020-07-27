<template>
  <div class="visitor height_100">

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
        var i = 1; 
        var x = 1; 
        var y = 100; 
        function moveSin(){ 
        var oCanvas=document.getElementById("theCanvas"); 
        var content=oCanvas.getContext( "2d" ); 
        content.beginPath(); 
        content.moveTo(x,y); 
        i+=0.1; 
        x=i*10; 
        y=Math.sin(i)*10+100; 
        content.lineTo(x,y); 
        content.stroke(); 
        content.closePath(); 
        } 
        setInterval(moveSin,10);
        window.onload=function(){
        moveSin();
        }
    }
}
</script>

<style>
.visitor{
   background-color:#63F; 
}
</style>