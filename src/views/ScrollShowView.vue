<template>
  <div>
    <div class="background">
      <div class="content">
        <div class="hint">Scroll Down Slowly</div>
        <div class="target" id="target">
          <img
            src="@/assets/cover/counter.png"
            style="
              position: relative;
              display: inline-block;
              margin-right: 3em;
              width: 30em;
              height: 30em;
              right: 100em;
            "
            :class="jumpImgClass"
          />
          <div
            :class="jumpTextClass"
            style="display: inline-block; left: 100em"
          >
            <div>活動限界</div>
            <div>Active time remaining</div>
            <div>04:58:01</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollShowView",

  components: {},

  data: function () {
    return {
      targetClass: "target",
      jumpImgClass: "",
      jumpTextClass: "jump-text",
    };
  },

  mounted() {
    const options = {
      threshold: [0.2],
    };
    let _this = this;
    let observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        console.log(entry);
        _this.jumpImgClass += " jump-img-animation";
        _this.jumpTextClass += " jump-text-animation";
      }
    }, options);
    let target = document.getElementById("target");
    observer.observe(target);
  },
};
</script>

<style scoped lang="scss">
$update-steps: 20;

.background {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Varela", sans-serif;
  background-color: rgb(20, 20, 20);
}

.content {
  position: relative;
}

.hint {
  transform: scale(1);
  position: relative;

  padding-top: 40vh;

  width: 100%;
  height: 120vh;

  text-align: center;

  font-size: 10em;
  color: white;
}

.target {
  transform: scale(1);
  position: relative;

  text-align: start;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10em;

  color: white;
}

.jump-text {
  transform: scale(1);
  position: relative;

  font-size: 5em;
  color: white;
}

.jump-text-animation {
  animation: float-from-right 0.5s linear 0.1s 1 both;
}

.jump-img-animation {
  animation: float-from-left 0.5s linear 0.1s 1 both;
}

@keyframes float-from-right {
  0% {
    opacity: 0;
    left: 100em;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    left: 0%;
  }
}

@keyframes float-from-left {
  0% {
    opacity: 0;
    right: 100em;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    right: 0%;
  }
}
</style>
