<template>
  <div class="height_100 eg1">
    示例一
    <!-- <div class="chest">
      <div class="heart left sided top"></div>
      <div class="heart center"></div>
      <div class="heart right sided"></div>
    </div> -->
    <div class="snow-container">
  <div class="snow foreground"></div>
  <div class="snow foreground layered"></div>
  <div class="snow middleground"></div>
  <div class="snow middleground layered"></div>
  <div class="snow background"></div>
  <div class="snow background layered"></div>
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
.snow-container {
  position: absolute;
  height: 800px;
  width: 100%;
  max-width: 100%;
  top: 0;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;
  background-color: red;
}

.snow {
  display: block;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
  -webkit-animation: snow linear infinite;
          animation: snow linear infinite;
}
.snow.foreground {
  background-image: url("https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-large-075d267ecbc42e3564c8ed43516dd557.png");
  -webkit-animation-duration: 15s;
          animation-duration: 15s;
}
.snow.foreground.layered {
  -webkit-animation-delay: 7.5s;
          animation-delay: 7.5s;
}
.snow.middleground {
  background-image: url(https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-medium-0b8a5e0732315b68e1f54185be7a1ad9.png);
  -webkit-animation-duration: 20s;
          animation-duration: 20s;
}
.snow.middleground.layered {
  -webkit-animation-delay: 10s;
          animation-delay: 10s;
}
.snow.background {
  background-image: url(https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-small-1ecd03b1fce08c24e064ff8c0a72c519.png);
  -webkit-animation-duration: 30s;
          animation-duration: 30s;
}
.snow.background.layered {
  -webkit-animation-delay: 15s;
          animation-delay: 15s;
}

@-webkit-keyframes snow {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
  }
  100% {
    -webkit-transform: translate3d(15%, 100%, 0);
            transform: translate3d(15%, 100%, 0);
  }
}

@keyframes snow {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
  }
  100% {
    -webkit-transform: translate3d(15%, 100%, 0);
            transform: translate3d(15%, 100%, 0);
  }
}
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

</style>