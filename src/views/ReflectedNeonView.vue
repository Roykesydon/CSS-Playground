<template>
  <div class="background">
    <div class="content">
      <div class="target" data-text="Roykesydon">Roykesydon</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlitchView",

  components: {},
};
</script>

<style scoped lang="scss">
$update-steps: 20;

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
}

.target {
  transform: scale(0.5);
  position: relative;
  text-transform: uppercase;

  width: 100%;
  height: 30vh;

  text-align: center;
  filter: drop-shadow(0px 0px 0.07em rgb(52, 45, 255, 0.8));

  font-size: 10em;
  color: rgb(255, 255, 255);
  opacity: 1;
}

.target::before {
  content: attr(data-text);
  position: absolute;
  text-transform: uppercase;
  top: 0.69em;
  transform: scale(1, -1);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.target::after {
  content: "";
  position: absolute;

  top: 0.7em;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 2;

  transform: perspective(500px) rotateX(49deg) scale(1.2, 0.7);
  background-image: linear-gradient(rgba(86, 80, 253, 0.4), transparent 70%);
  filter: blur(0.7em);
}
</style>
