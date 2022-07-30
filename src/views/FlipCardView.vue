<template>
  <div class="background">
    <div class="content">
      <div class="front-card"><div>Front Card</div></div>
      <div class="back-card"><div>Back Card</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipCardView",

  components: {},
  mount() {
    this.$forceUpdate();
  },
};
</script>

<style scoped lang="scss">
.background {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Varela", sans-serif;
  background-color: rgb(20, 20, 20);
}

.content {
  position: relative;
  perspective: 1000px;
  width: 30vw;
  height: 50vh;
  transform-style: preserve-3d;
}

.content:hover > .front-card {
  transform: rotateY(180deg);
}

.content:hover > .back-card {
  transform: rotateY(360deg);
}

.front-card,
.back-card {
  position: absolute;
  text-align: center;

  height: 50vh;
  width: 30vw;

  box-shadow: 0 0 0.2em black;

  font-size: 3em;
  color: white;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s;
}

.front-card {
  background-color: rgb(49, 133, 222);
}

.back-card {
  background-color: rgb(136, 73, 199);
  transform: rotateY(180deg);
}

.front-card div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.back-card div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
