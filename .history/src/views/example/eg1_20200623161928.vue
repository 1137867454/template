<template>
  <div class="height_100 eg1">
    示例一
    <!-- <div class="chest">
    <div class="heart left sided top"></div>
    <div class="heart center"></div>
    <div class="heart right sided"></div>
</div> -->
<div class="meteor">
        <div class="star"></div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {

    }
  },
  computed: {
    get_activeIndex() {
      return this.$store.getters.get_activeIndex;
    }
  },
  mounted() {
    // console.log(this.$router)
    // console.log(this.$route)
    // console.log(this.$store.getters.get_activeIndex)
  }
}
</script>

<style scoped>
.eg1 {
  margin:8px;

	/* background:#ffa5a5; */
}
.chest {
	width:500px;
	height:500px;
	margin:0 auto;
	position:relative;
}
.heart {
	position:absolute;
	z-index:2;
	background:linear-gradient(-90deg,#F50A45 0%,#d5093c 40%);
	animation:beat 2s ease 0s infinite normal;
}
.heart.center {
	background:linear-gradient(-45deg,#B80734 0%,#d5093c 40%);
}
.heart.top {
	z-index:3;
}
.sided {
	top:100px;
	width:220px;
	height:220px;
	border-radius:110px;
}
.center {
	width:210px;
	height:210px;
	bottom:100px;
	left:145px;
	transform:rotateZ(225deg);
}
.left {
	left:62px;
}
.right {
	right:62px;
}
@keyframes beat {
	0% {
	transform:scale(1) rotate(225deg);
	box-shadow:0 0 40px #d5093c;
}
50% {
	transform:scale(1.1) rotate(225deg);
	box-shadow:0 0 70px #d5093c;
}
100% {
	transform:scale(1) rotate(225deg);
	box-shadow:0 0 40px #d5093c;
}
}
.meteor {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform: rotateZ(45deg);
    transform: -webkit-rotateZ(45deg);
}
.star {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    background: linear-gradient(45deg,rgba(255,255,255,0),#729ff1);
    background: -webkit-linear-gradient(45deg,rgba(255,255,255,0),#729ff1);
    /*此处为下一步的添加动画*/
    /*-webkit-animation: tail 3s ease-in-out infinite,shooting 3s ease-in-out infinite;
    -o-animation: tail 3s ease-in-out infinite,shooting 3s ease-in-out infinite;
    animation: tail 3s ease-in-out infinite,shooting 3s ease-in-out infinite;*/
}
.star::before,
.star::after{
    content: "";
    position: absolute;
    top: calc(100% - 1px);
    left: 100%;
    height: 2px;
    background: linear-gradient(45deg,rgba(255,255,255,0),#729ff1,rgba(255,255,255,0));
    background: -webkit-linear-gradient(45deg,rgba(255,255,255,0),#729ff1,rgba(255,255,255,0));
    /*此处为下一步的添加动画*/
    /*-webkit-animation: shining 3s ease-in-out infinite;
    -o-animation: shining 3s ease-in-out infinite;
    animation: shining 3s ease-in-out infinite;*/
}
.star:before {
    transform: translateX(-50%) rotateZ(-45deg);
    transform: -webkit-translateX(-50%) -webkit-rotateZ(-45deg);
}
.star:after {
    transform: translateX(-50%) rotateZ(45deg);
    transform: -webkit-translateX(-50%) -webkit-rotateZ(45deg);
}

作者：呔你这妖精_9337
链接：https://www.jianshu.com/p/d5640c326784
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
</style>