<template>
  <div class="background">
    <div class="content">
      <div
        class="target mb-10"
        data-text="Roykesydon"
        style="--color: rgba(64, 241, 255, 0.82)"
      >
        Roykesydon
      </div>

      <div
        class="target"
        data-text="Asuka"
        style="--color: rgba(198, 6, 6, 0.82)"
      >
        Asuka
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScanTextView",

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
}

.target {
  position: relative;

  height: 100%;

  font-size: 10em;
  color: transparent;
  opacity: 1;

  -webkit-text-stroke: 0.005em var(--color);
}

.target:before {
  content: attr(data-text);
  position: absolute;

  width: 0%;
  height: 100%;

  border-right: 5px solid var(--color);
  left: 0;

  text-shadow: 0 0 0.1em var(--color);

  color: var(--color);
  overflow: hidden;

  -webkit-text-stroke: 0.005em var(--color);

  transition: width 1s cubic-bezier(0.375, -0.04, 0.135, 1.13);
}

.target:hover::before {
  width: 100%;
}
</style>
