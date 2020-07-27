<template>
  <div class="height_100 navigator">
    <ul class="flexCake">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <ul class="flexCake flexCake_2">
      <li>
        <div class="box">click点击</div>
      </li>
      <li>
        <div class="kefu" style="display: block;">
            <div class="round"></div>
          <div class="img">
            <div class='img_fff'></div>
          </div>	       
        </div>  
      </li>
      <li>
        <h1>CSS Border Transitions</h1>
        <section class="buttons">
          <button class="draw">Draw</button>

          <button class="draw meet">Draw Meet</button>

          <button class="center">Center</button>

          <button class="spin">Spin</button>
        </section>
      </li>
    </ul>
    <ul class="flexCake_3">
      <li style="">1</li>
      <li style="">2</li>
    </ul>
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

<style lang="scss" scoped>
.navigator{
  /* padding:8px; */
  /* margin:8px; */
  // box-shadow: 0 0 4px #ccc;
  // background:#f0f2f5;
  height: 100%;
  width:100%;
  .flexCake{
    height:130px;
    width:100%;
    // border:solid 1px;
    display:flex;
    justify-content: space-around;
    &>li{
      flex:1;
      background:#fff;
      margin:10px;
      padding:20px 0;
      top:0;
      box-shadow: 0 0 2px 1px #ccc;
      transition: all 0.5s ease-in-out;
      &:hover{
        box-shadow: 0 0 10px #aaa;
      }
    }
  }
  .flexCake_2{
    height:200px;
  }
  .flexCake_3{
    height:260px;
    width:100%;
    // border:solid 1px;
    padding:10px;
    display:flex;
    // justify-content: space-around;
    &>li{
      // flex:1;
      background:#fff;
      padding:20px 0;
      box-shadow: 0 0 2px 1px #ccc;
      // margin:6px;
    }
    &>li:nth-child(1){
      flex:2;
      padding:20px 10px;

    }
    &>li:nth-child(2){
      flex:1;
      margin-left:20px;
    }
  }
}
.kefu {
    width: 120px;
    height: 120px;
    position: fixed;
    z-index: 50;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
}
.kefu .img {
	width:86px;
	height:86px;
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    margin-left: -43px;
    margin-top: -43px;
	background-color:#baedcd;
	border-radius:100%;
	-webkit-border-radius:100%;
	-moz-border-radius:100%;
}
.kefu .img_fff{
	width:66px;
	height:66px;
	position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    margin-left: -33px;
    margin-top: -33px;
	background-color:#fff;
	border-radius:100%;
	-webkit-border-radius:100%;
	-moz-border-radius:100%;
}
.round {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #baedcd;
    text-align: center;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation-name: mymove;
    animation-name: mymove;
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}
 
@keyframes mymove{
	0% {
	    -webkit-transform: scale(.5);
	    transform: scale(.5);
	    opacity: 0;
	}
	
	50% {
	    opacity: 1;
	}
	
	75% {
	    opacity: .85;
	}
	
	100% {
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
	    opacity: 0;
	}
}
button {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  box-shadow: inset 0 0 0 2px #f45e61;
  color: #f45e61;
  font-size: inherit;
  font-weight: 700;
  position: relative;
  vertical-align: middle;
}
button::before, button::after {
  box-sizing: inherit;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
}

.draw {
  transition: color 0.25s;
}
.draw::before, .draw::after {
  border: 2px solid transparent;
  width: 0;
  height: 0;
}
.draw::before {
  top: 0;
  left: 0;
}
.draw::after {
  bottom: 0;
  right: 0;
}
.draw:hover {
  color: #60daaa;
}
.draw:hover::before, .draw:hover::after {
  width: 100%;
  height: 100%;
}
.draw:hover::before {
  border-top-color: #60daaa;
  border-right-color: #60daaa;
  transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
}
.draw:hover::after {
  border-bottom-color: #60daaa;
  border-left-color: #60daaa;
  transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
}

.meet:hover {
  color: #fbca67;
}
.meet::after {
  top: 0;
  left: 0;
}
.meet:hover::before {
  border-top-color: #fbca67;
  border-right-color: #fbca67;
}
.meet:hover::after {
  border-bottom-color: #fbca67;
  border-left-color: #fbca67;
  transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
}

.center:hover {
  color: #6477b9;
}
.center::before, .center::after {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-transform-origin: center;
          transform-origin: center;
}
.center::before {
  border-top: 2px solid #6477b9;
  border-bottom: 2px solid #6477b9;
  -webkit-transform: scale3d(0, 1, 1);
          transform: scale3d(0, 1, 1);
}
.center::after {
  border-left: 2px solid #6477b9;
  border-right: 2px solid #6477b9;
  -webkit-transform: scale3d(1, 0, 1);
          transform: scale3d(1, 0, 1);
}
.center:hover::before, .center:hover::after {
  -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}

.spin {
  width: 5em;
  height: 5em;
  padding: 0;
}
.spin:hover {
  color: #0eb7da;
}
.spin::before, .spin::after {
  top: 0;
  left: 0;
}
.spin::before {
  border: 2px solid transparent;
}
.spin:hover::before {
  border-top-color: #0eb7da;
  border-right-color: #0eb7da;
  border-bottom-color: #0eb7da;
  transition: border-top-color 0.15s linear, border-right-color 0.15s linear 0.1s, border-bottom-color 0.15s linear 0.2s;
}
.spin::after {
  border: 0 solid transparent;
}
.spin:hover::after {
  border-top: 2px solid #0eb7da;
  border-left-width: 2px;
  border-right-width: 2px;
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
  transition: border-left-width 0s linear 0.35s, -webkit-transform 0.4s linear 0s;
  transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s;
  transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s, -webkit-transform 0.4s linear 0s;
}

.circle {
  border-radius: 100%;
  box-shadow: none;
}
.circle::before, .circle::after {
  border-radius: 100%;
}

.thick {
  color: #f45e61;
}
.thick:hover {
  color: #fff;
  font-weight: 700;
}
.thick::before {
  border: 2.5em solid transparent;
  z-index: -1;
}
.thick::after {
  mix-blend-mode: color-dodge;
  z-index: -1;
}
.thick:hover::before {
  background: #f45e61;
  border-top-color: #f45e61;
  border-right-color: #f45e61;
  border-bottom-color: #f45e61;
  transition: background 0s linear 0.4s, border-top-color 0.15s linear, border-right-color 0.15s linear 0.15s, border-bottom-color 0.15s linear 0.25s;
}
.thick:hover::after {
  border-top: 2.5em solid #f45e61;
  border-left-width: 2.5em;
  border-right-width: 2.5em;
}


body {
  background: #1D1D1D;
  color: #4b507a;
  font: 300 24px/1.5 Lato, sans-serif;
  margin: 1em auto;
  max-width: 36em;
  padding: 1em 1em 2em;
  text-align: center;
}

.buttons {
  isolation: isolate;
}

h1 {
  font-weight: 300;
  font-size: 2.5em;
}

</style>