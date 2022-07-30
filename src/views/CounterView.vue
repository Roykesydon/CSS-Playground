<template>
  <div class="background">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@700&display=swap"
      rel="stylesheet"
    />
    <div class="content">
      <div style="margin-bottom: 2em; position: relative; left: -2em">
        <div class="custom-title" style="font-size: 5em">活動限界</div>
        <div class="custom-title">Active time remaining</div>
      </div>
      <div>
        <div :class="minuteTwo">
          <div class="seg1"></div>
          <div class="seg2"></div>
          <div class="seg3"></div>
          <div class="seg4"></div>
          <div class="seg5"></div>
          <div class="seg6"></div>
          <div class="seg7"></div>
        </div>

        <div :class="minuteOne">
          <div class="seg1"></div>
          <div class="seg2"></div>
          <div class="seg3"></div>
          <div class="seg4"></div>
          <div class="seg5"></div>
          <div class="seg6"></div>
          <div class="seg7"></div>
        </div>
        <div class="colon">
          <div></div>
          <div></div>
        </div>
        <div :class="secondTwo">
          <div class="seg1"></div>
          <div class="seg2"></div>
          <div class="seg3"></div>
          <div class="seg4"></div>
          <div class="seg5"></div>
          <div class="seg6"></div>
          <div class="seg7"></div>
        </div>

        <div :class="secondOne">
          <div class="seg1"></div>
          <div class="seg2"></div>
          <div class="seg3"></div>
          <div class="seg4"></div>
          <div class="seg5"></div>
          <div class="seg6"></div>
          <div class="seg7"></div>
        </div>
        <div class="colon">
          <div></div>
          <div></div>
        </div>
        <div :class="msecondTwo">
          <div class="seg1"></div>
          <div class="seg2"></div>
          <div class="seg3"></div>
          <div class="seg4"></div>
          <div class="seg5"></div>
          <div class="seg6"></div>
          <div class="seg7"></div>
        </div>

        <div :class="msecondOne">
          <div class="seg1"></div>
          <div class="seg2"></div>
          <div class="seg3"></div>
          <div class="seg4"></div>
          <div class="seg5"></div>
          <div class="seg6"></div>
          <div class="seg7"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterView",

  data: function () {
    return {
      minuteTwo: "digit0",
      minuteOne: "digit0",
      secondTwo: "digit0",
      secondOne: "digit0",
      msecondTwo: "digit0",
      msecondOne: "digit0",
    };
  },

  components: {},
  mounted() {
    this.$forceUpdate();

    let interval = 5 * 60 * 1000;
    let endTime = Date.now() + interval;
    let _this = this;

    console.log("hi", "hi");
    function step() {
      let currentDelta = endTime - Date.now();
      console.log(
        Math.floor(currentDelta / 60 / 1000),
        Math.floor(currentDelta / 1000) % 60,
        Math.floor((currentDelta % 1000) / 10)
      );

      currentDelta = Math.max(0, currentDelta);

      _this.minuteTwo =
        "digit" +
        Math.floor(Math.floor(currentDelta / 60 / 1000) / 10).toString();
      _this.minuteOne =
        "digit" + (Math.floor(currentDelta / 60 / 1000) % 10).toString();

      _this.secondTwo =
        "digit" +
        Math.floor((Math.floor(currentDelta / 1000) % 60) / 10).toString();
      _this.secondOne =
        "digit" + ((Math.floor(currentDelta / 1000) % 60) % 10).toString();

      _this.msecondTwo =
        "digit" +
        Math.floor(Math.floor((currentDelta % 1000) / 10) / 10).toString();
      _this.msecondOne =
        "digit" + (Math.floor((currentDelta % 1000) / 10) % 10).toString();

      setTimeout(step, 0); // take into account drift
    }
    setTimeout(step, 0);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.custom-title {
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  height: 1.3em;
  filter: drop-shadow(0px 0px 3px rgba(255, 195, 45, 1));
  color: rgba(255, 195, 45, 1);
  font-weight: bold;
  font-family: "Noto Serif TC", serif;
}

.background {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Varela", sans-serif;
  background-image: #200a06;

  // animation: flicker-background 1.5s linear 0.1s infinite alternate;
}

.colon {
  display: inline-block;
  position: relative;
  width: 1em;
  height: 7em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  filter: drop-shadow(0px 0px 7px rgba(255, 0, 0, 0.7));

  animation: flickerAnimation 2.5s infinite;
}

.content {
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  background-color: rgba(42, 34, 34, 0.368);
  padding: 5em;
  padding-top: 0.5em;
  padding-bottom: 1em;
  border-top: 0.5em rgba(255, 195, 45, 1) solid;
  border-left: 0.5em rgba(255, 195, 45, 1) solid;
  border-right: 0.5em rgba(255, 195, 45, 1) solid;
  border-bottom: 0.5em rgba(255, 195, 45, 1) solid;

  box-shadow: (0px 0px 7px rgba(255, 195, 45, 1)),
    (0px 0px 7px rgba(255, 195, 45, 1)) inset;

  transform: rotateX(-30deg) rotateY(-20deg) scale(1.5);
}

@keyframes flickerAnimation {
  0%,
  30% {
    opacity: 1;
  }
  40%,
  60% {
    opacity: 0;
  }
  70%,
  100% {
    opacity: 1;
  }
}

.colon div:nth-child(1) {
  position: relative;
  width: 0.7em;
  height: 0.7em;
  top: 1.5em;

  background-color: rgba(254, 43, 43, 1);
}

.colon div:nth-child(2) {
  position: absolute;
  width: 0.7em;
  height: 0.7em;
  bottom: 1.5em;

  background-color: rgba(254, 43, 43, 1);
}

@for $j from 0 through 9 {
  .digit#{$j} {
    display: inline-block;
    position: relative;
    filter: drop-shadow(0px 0px 7px rgba(255, 0, 0, 0.7));
    width: 4em;
    height: 7em;
  }
}

$segTop: 0.5, -1, 0.5, 2, 3.5, 5, 3.5;
$segRotate: 1, 0, 1, 0, 1, 0, 1;
$segLeft: -1, 0.5, 2, 0.5, -1, 0.5, 2;

$digit-seg-0: 1, 1, 1, 0, 1, 1, 1;
$digit-seg-1: 0, 0, 1, 0, 0, 0, 1;
$digit-seg-2: 0, 1, 1, 1, 1, 1, 0;
$digit-seg-3: 0, 1, 1, 1, 0, 1, 1;
$digit-seg-4: 1, 0, 1, 1, 0, 0, 1;
$digit-seg-5: 1, 1, 0, 1, 0, 1, 1;
$digit-seg-6: 1, 1, 0, 1, 1, 1, 1;
$digit-seg-7: 0, 1, 1, 0, 0, 0, 1;
$digit-seg-8: 1, 1, 1, 1, 1, 1, 1;
$digit-seg-9: 1, 1, 1, 1, 0, 1, 1;

$digit-seg: $digit-seg-0, $digit-seg-1, $digit-seg-2, $digit-seg-3, $digit-seg-4,
  $digit-seg-5, $digit-seg-6, $digit-seg-7, $digit-seg-8, $digit-seg-9;

@for $j from 0 through 9 {
  $seg-list: nth($digit-seg, $j + 1);
  @for $i from 1 through 7 {
    .digit#{$j} .seg#{$i} {
      position: absolute;
      width: 3em;
      height: 3em;
      clip-path: polygon(15% 40%, 85% 40%, 95% 50%, 85% 60%, 15% 60%, 5% 50%);
      @if nth($seg-list, $i) == 1 {
        background-color: rgba(255, 32, 32, 1);
      } @else {
        background-color: rgba(151, 35, 35, 0.481);
      }
      transform: rotate(90 * nth($segRotate, $i) + 0deg);
      left: nth($segLeft, $i) + 0em;
      top: nth($segTop, $i) + 0em;
    }
  }
}
</style>
