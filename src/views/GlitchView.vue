<template>
  <div class="background">
    <div class="content">
      <div class="glitch" data-text="Roykesydon">Roykesydon</div>
      <!-- <div class="glitch">Roykesydon</div>
      <div class="glitch">Roykesydon</div>
      <div class="glitch">Roykesydon</div>
      <div class="glitch">Roykesydon</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GlitchView",

  components: {},
};
</script>

<style scope lang="scss">
$update-steps: 20;

.background {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(20, 20, 20);
  font-family: "Varela", sans-serif;
}

.content {
  position: relative;

  width: 100%;
  height: 30vh;

  background-color: rgb(20, 20, 20);
}

.glitch {
  transform: scale(0.5);
  position: absolute;

  width: 100%;
  height: 30vh;

  text-align: center;

  font-size: 10em;
  color: white;
  opacity: 1;

  animation: shadow 5s linear 0.1s infinite forwards;
}

@keyframes noise-2 {
  @for $i from 0 through $update-steps {
    #{percentage($i*(1/$update-steps))} {
      $pos: random(100) / 100 * 100%;
      $end: min($pos + random(10) / 100, 1) * 100%;

      clip-path: polygon(0% $pos, 900% $pos, 900% $end, 0% $end);
    }
  }
}

.glitch:after {
  content: attr(data-text);
  position: absolute;
  width: 100%;
  height: 30vh;

  left: 0.05em;
  text-shadow: -1px 0 red;
  top: 0;
  color: white;
  background: rgb(20, 20, 20);
  animation: noise-2 3s infinite linear forwards;
}

@keyframes noise {
  @for $i from 0 through $update-steps {
    #{percentage($i*(1/$update-steps))} {
      $pos: random(100) / 100 * 100%;
      $end: min($pos + random(10) / 100, 1) * 100%;

      clip-path: polygon(0% $pos, 900% $pos, 900% $end, 0% $end);
    }
  }
}
.glitch:before {
  content: attr(data-text);
  position: absolute;
  width: 100%;
  height: 30vh;

  left: -0.05em;
  text-align: center;

  top: 0;
  color: white;
  background: rgb(20, 20, 20);
  animation: noise 5s infinite linear alternate-reverse;
}
$steps: 20;
@keyframes shadow {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      $pink: max(random(7) - 2, 0) / 100;
      $blue: max(random(7) - 2, 0) / 100 * -1;

      text-shadow: $pink + 0em 0em 0em rgba(247, 0, 255, 0.82),
        $blue + 0em 0em 0em rgba(64, 241, 255, 0.82);
    }
  }
}
</style>
