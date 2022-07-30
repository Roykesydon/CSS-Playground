<template>
  <div class="background">
    <div class="content">
      <div class="spark" v-for="index in 500" :key="index"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SparkView",
  components: {},
};
</script>

<style scoped lang="scss">
.background {
  position: relative;
  height: 95vh;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  font-family: "Varela", sans-serif;
  background-color: rgb(20, 20, 20);
}

.content {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

$spark-color: rgba(243, 139, 0, 1), rgba(242, 63, 0, 1), rgba(244, 179, 122, 1);
$spark-count: 500;

@for $i from 0 through $spark-count {
  .spark:nth-child(#{$i}) {
    z-index: 100;
    position: absolute;
    background-color: nth($spark-color, random(3));
    width: random(3) + 0px;
    height: random(15) + 0px;
    box-shadow: 0em 0em 0.05em rgb(242, 0, 0);
    animation: float-up-#{$i} #{random(15) + 0s} linear 0.1s infinite forwards;
  }
}

@for $i from 0 through $spark-count {
  @keyframes float-up-#{$i} {
    $pos: random(200)-50;
    $end-height: random(100) - 50;
    $rotate-degree: random(360)-180;

    0% {
      top: 150%;
      left: $pos + 0%;
      transform: scale(1);
      opacity: 1;
    }
    90% {
      opacity: 1;
      left: $pos + $rotate-degree + 0%;
      transform: scale(1) rotate($rotate-degree + 0deg);
    }
    100% {
      top: $end-height + 0%;
      transform: scale(0);
      opacity: 0;
    }
  }
}

.spark {
  transform: scale(1);
  position: relative;

  height: 30vh;

  text-align: center;

  font-size: 10em;
  color: white;
  opacity: 1;
}
</style>
