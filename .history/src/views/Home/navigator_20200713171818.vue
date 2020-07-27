<template>
  <div class="height_100 navigator">
    <ul class="flexCake">
      <li>{{$t('m.login.introduction')}}</li>
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
        
      </li>
    </ul>
    <ul class="flexCake_3">
      <li style=""><h1>CSS Border Transitions</h1>
        <section class="buttons">
          <button class="draw">Draw</button>
          <button class="draw meet">Draw Meet</button>
          <button class="center">Center</button>
          <button class="spin">Spin</button>
          <button class="spin circle">Spin Circle</button>
          <button class="spin thick">Spin Thick</button>
        </section></li>
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
// @import url('../../assets/css/button.scss');
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
      box-shadow: 0 0 4px 1px #ccc;
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

</style>