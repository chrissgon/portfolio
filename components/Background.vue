<template>
  <figure class="background opacity-50 z-0">
    <div class="">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </figure>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
}

.background span {
  width: 8vmin;
  height: 8vmin;
  border-radius: 8vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 29;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.background span:nth-child(0) {
  color: #06b5f1;
  top: 27%;
  left: 59%;
  animation-duration: 83s;
  animation-delay: -177s;
  transform-origin: -2vw 8vh;
  box-shadow: 16vmin 0 2.161575791410616vmin currentColor;
}
.background span:nth-child(1) {
  color: #06b5f1;
  top: 38%;
  left: 64%;
  animation-duration: 95s;
  animation-delay: -105s;
  transform-origin: 9vw -16vh;
  box-shadow: -16vmin 0 2.429203024793872vmin currentColor;
}
.background span:nth-child(2) {
  color: #06b5f1;
  top: 58%;
  left: 92%;
  animation-duration: 78s;
  animation-delay: -31s;
  transform-origin: -5vw 19vh;
  box-shadow: -16vmin 0 2.924722004900076vmin currentColor;
}
.background span:nth-child(3) {
  color: #06b5f1;
  top: 21%;
  left: 30%;
  animation-duration: 45s;
  animation-delay: -15s;
  transform-origin: -7vw -15vh;
  box-shadow: -16vmin 0 2.071143565051277vmin currentColor;
}
.background span:nth-child(4) {
  color: #06b5f1;
  top: 24%;
  left: 1%;
  animation-duration: 83s;
  animation-delay: -148s;
  transform-origin: -20vw -15vh;
  box-shadow: -16vmin 0 2.9347409951119507vmin currentColor;
}
.background span:nth-child(5) {
  color: #06b5f1;
  top: 87%;
  left: 44%;
  animation-duration: 201s;
  animation-delay: -152s;
  transform-origin: -3vw -4vh;
  box-shadow: 16vmin 0 2.58746428584812vmin currentColor;
}
.background span:nth-child(6) {
  color: #06b5f1;
  top: 31%;
  left: 93%;
  animation-duration: 79s;
  animation-delay: -111s;
  transform-origin: -10vw 18vh;
  box-shadow: 16vmin 0 2.6295631223905547vmin currentColor;
}
.background span:nth-child(7) {
  color: #06b5f1;
  top: 95%;
  left: 53%;
  animation-duration: 174s;
  animation-delay: -115s;
  transform-origin: 18vw -19vh;
  box-shadow: 16vmin 0 2.748644881595056vmin currentColor;
}
.background span:nth-child(8) {
  color: #06b5f1;
  top: 23%;
  left: 95%;
  animation-duration: 75s;
  animation-delay: -111s;
  transform-origin: 11vw 16vh;
  box-shadow: 16vmin 0 2.6236491078857664vmin currentColor;
}
.background span:nth-child(9) {
  color: #06b5f1;
  top: 85%;
  left: 92%;
  animation-duration: 133s;
  animation-delay: -117s;
  transform-origin: 25vw -18vh;
  box-shadow: 16vmin 0 2.5109203293130022vmin currentColor;
}
.background span:nth-child(10) {
  color: #06b5f1;
  top: 54%;
  left: 19%;
  animation-duration: 170s;
  animation-delay: -170s;
  transform-origin: 6vw -2vh;
  box-shadow: -16vmin 0 2.093682646650496vmin currentColor;
}
.background span:nth-child(11) {
  color: #06b5f1;
  top: 76%;
  left: 71%;
  animation-duration: 192s;
  animation-delay: -11s;
  transform-origin: 5vw -10vh;
  box-shadow: 16vmin 0 2.711921028171374vmin currentColor;
}
.background span:nth-child(12) {
  color: #06b5f1;
  top: 53%;
  left: 34%;
  animation-duration: 65s;
  animation-delay: -107s;
  transform-origin: -17vw 2vh;
  box-shadow: -16vmin 0 2.305822126426354vmin currentColor;
}
.background span:nth-child(13) {
  color: #06b5f1;
  top: 44%;
  left: 34%;
  animation-duration: 215s;
  animation-delay: -64s;
  transform-origin: -21vw 23vh;
  box-shadow: -16vmin 0 2.5456880830126973vmin currentColor;
}
.background span:nth-child(14) {
  color: #06b5f1;
  top: 87%;
  left: 38%;
  animation-duration: 21s;
  animation-delay: -188s;
  transform-origin: 5vw 20vh;
  box-shadow: 16vmin 0 2.8014110013562172vmin currentColor;
}
.background span:nth-child(15) {
  color: #06b5f1;
  top: 28%;
  left: 19%;
  animation-duration: 81s;
  animation-delay: -156s;
  transform-origin: 3vw 3vh;
  box-shadow: -16vmin 0 2.7317773975946618vmin currentColor;
}
.background span:nth-child(16) {
  color: #06b5f1;
  top: 97%;
  left: 11%;
  animation-duration: 162s;
  animation-delay: -7s;
  transform-origin: -24vw -20vh;
  box-shadow: 16vmin 0 2.3158223959626567vmin currentColor;
}
.background span:nth-child(17) {
  color: #06b5f1;
  top: 19%;
  left: 3%;
  animation-duration: 188s;
  animation-delay: -99s;
  transform-origin: 23vw -14vh;
  box-shadow: 16vmin 0 2.3846993010502797vmin currentColor;
}
.background span:nth-child(18) {
  color: #06b5f1;
  top: 54%;
  left: 82%;
  animation-duration: 15s;
  animation-delay: -25s;
  transform-origin: -2vw -11vh;
  box-shadow: -16vmin 0 2.5226162316752783vmin currentColor;
}
.background span:nth-child(19) {
  color: #06b5f1;
  top: 57%;
  left: 65%;
  animation-duration: 50s;
  animation-delay: -59s;
  transform-origin: 6vw 12vh;
  box-shadow: 16vmin 0 2.018287318706199vmin currentColor;
}
.background span:nth-child(20) {
  color: #06b5f1;
  top: 67%;
  left: 86%;
  animation-duration: 56s;
  animation-delay: -187s;
  transform-origin: 25vw -18vh;
  box-shadow: 16vmin 0 2.0793019485558615vmin currentColor;
}
.background span:nth-child(21) {
  color: #06b5f1;
  top: 57%;
  left: 49%;
  animation-duration: 95s;
  animation-delay: -56s;
  transform-origin: -4vw 4vh;
  box-shadow: 16vmin 0 2.2447906551329986vmin currentColor;
}
.background span:nth-child(22) {
  color: #06b5f1;
  top: 35%;
  left: 80%;
  animation-duration: 28s;
  animation-delay: -127s;
  transform-origin: -6vw 13vh;
  box-shadow: 16vmin 0 2.458759406618687vmin currentColor;
}
.background span:nth-child(23) {
  color: #06b5f1;
  top: 48%;
  left: 60%;
  animation-duration: 111s;
  animation-delay: -61s;
  transform-origin: 10vw 23vh;
  box-shadow: -16vmin 0 2.8263027148764195vmin currentColor;
}
.background span:nth-child(24) {
  color: #06b5f1;
  top: 6%;
  left: 10%;
  animation-duration: 82s;
  animation-delay: -43s;
  transform-origin: -22vw 24vh;
  box-shadow: 16vmin 0 2.352707106867067vmin currentColor;
}
.background span:nth-child(25) {
  color: #06b5f1;
  top: 60%;
  left: 19%;
  animation-duration: 152s;
  animation-delay: -172s;
  transform-origin: -13vw 18vh;
  box-shadow: -16vmin 0 2.612258851275584vmin currentColor;
}
.background span:nth-child(26) {
  color: #06b5f1;
  top: 19%;
  left: 27%;
  animation-duration: 138s;
  animation-delay: -104s;
  transform-origin: 17vw -20vh;
  box-shadow: -16vmin 0 2.0335690698769673vmin currentColor;
}
</style>
