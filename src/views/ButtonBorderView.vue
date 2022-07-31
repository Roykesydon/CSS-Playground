<template>
  <div class="background">
    <div class="content">
      <div class="target">
        <div class="border-light"></div>

        <div class="inset-panel"><div class="jump-panel"></div></div>
        <div class="target-text">Roykesydon</div>
      </div>
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

  width: 100%;
  // height: 30vh;

  text-align: center;

  font-size: 7em;
  color: white;
  opacity: 1;

  overflow: hidden;
  background-color: rgb(20, 20, 20);
}

.target-text {
  position: relative;
  z-index: 3;

  color: rgba(36, 197, 255, 0.956);
  padding: 1em;
  transition: all 0.7s cubic-bezier(0.375, -0.04, 0.135, 1.13);
}

.inset-panel {
  position: absolute;
  z-index: 1;

  background-color: rgb(20, 20, 20);
  inset: 0.05em;
}

.jump-panel {
  position: absolute;
  z-index: 4;
  left: 0;
  width: 0%;
  color: white;
  height: 100%;

  background-color: rgba(36, 197, 255, 0.956);
  transition: all 0.7s cubic-bezier(0.375, -0.04, 0.135, 1.13);
}

.border-light {
  position: absolute;
  left: -450%;
  top: -450%;
  width: 1000%;
  height: 1000%;
  background: conic-gradient(
    transparent,
    transparent,
    transparent,
    rgba(36, 197, 255, 0.956),
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    rgba(36, 197, 255, 0.956),
    transparent,
    transparent,
    transparent,
    transparent
  );
  // background-color: red;

  transform: rotate(0deg);
  transition: all 0.7s cubic-bezier(0.65, 0.09, 0.17, 1.06);
}

.target:hover .border-light {
  transform: rotate(360deg);
  background: conic-gradient(
    transparent,
    transparent,
    transparent,
    rgb(216, 66, 246),
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    rgb(216, 66, 246),
    transparent,
    transparent,
    transparent,
    transparent
  );
}

// .target:hover .jump-panel {
//   width: 100%;
// }

.target:hover > .target-text {
  color: rgb(216, 66, 246);
}
</style>
