<template>
	<div class="home"  @wheel.prevent>
		<div class="center-link">  
	<router-link to="/about" class="router-link">
		<a class="threesolid">Diagram of Annual Temperature Changes</a>
	</router-link>
  </div>  
		<div class="two">
		  <div class="three" v-for="(item, index) in items" :key="index" ref="three"></div>
		</div>
  
	</div>
  </template>
  
  <script>
  export default {
	name: 'home',
	data () {
	  return {
		items: 2000,
		distance: 1200
	  }
	},
	mounted () {
	  const starArr = this.$refs.three
	  starArr.forEach(item => {
		const speed = 0.2 + (Math.random() * 1)
		const thisDistance = this.distance + (Math.random() * 360)
		console.log(Math.random())
		item.style.transformOrigin = `0 0 ${thisDistance}px`
		item.style.transform = `translate3d(0, 0, -${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed})`
	  })
	}
  }
  </script>
  <style lang="scss" scoped>
  
  * {
	margin: 0;
	padding: 0;
  }
  /* 去掉所有 <router-link> 的下划线 */  
	.router-link {  
	text-decoration: none;  
  }
  .threesolid{
	font-size: 50px;
	color:#fefefe;
	text-shadow:0px 1px 0px #c0c0c0,
	   0px 2px 0px #b0b0b0,
	   0px 3px 0px #a0a0a0,
	   0px 4px 0px #909090,
	   0px 5px 10px rgba(0, 0, 0, .9);
  } 
  .center-link {  
    display: flex;  
    justify-content: center;  
    align-items: center;  
    height: 100vh; /* 设置高度为视口高度 */  
  }  
	.home {
	  width: 100%;  
  	  height: 110%;  
	  background-image: url("../assets/images/back.jpg");
	  background-repeat: no-repeat;  
	  background-size: cover;  
	  background-position: center;  
	  overflow: auto;  
	  -webkit-overflow-scrolling: touch;  
	}
  
	.two {
	  position: absolute;
	  left: 50%;
	  transform-style: preserve-3d;
	  transition: perspective(500deg);
	  perspective-origin: 50% 100%;
	  -webkit-perspective-origin: 50% 100%;
	  -moz-perspective-origin: 50% 100%;
	  animation: xinkon 90s linear infinite;
	  bottom: -100px;
  
	  .three {
		width: 2px;
		height: 2px;
		background: #FFF9C4;
		position: absolute;
		top: 0;
		left: 0;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
	}
	}
	@keyframes xinkon {
	  0% {
			transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
		  }
	  100% {
		  transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
	  }
	}
  </style>
  
  