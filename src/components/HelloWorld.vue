<template>
  <v-row class="pa-10" justify="center" align="center">
    <v-col
      v-for="(effect, i) in effects"
      :key="i"
      cols="3"
      class="mt-10"
      justify="center"
      align="center"
    >
      <v-img
        @click="changeRoute(effect.route)"
        class="white--text align-end pointer"
        height="30vh"
        width="30vh"
        :src="effect.src"
      >
        <v-card-title class="font-weight-light">{{ effect.name }}</v-card-title>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    effects: [
      {
        name: "Glitch",
        route: "/glitch",
        src: require("@/assets/cover/glitch.png"),
      },
      {
        name: "Scan Text",
        route: "/scan-text",
        src: require("@/assets/cover/scan-text.png"),
      },
      {
        name: "Spark",
        route: "/spark",
        src: require("@/assets/cover/spark.png"),
      },
      {
        name: "Flip Card",
        route: "/flip-card",
        src: require("@/assets/cover/flip-card.png"),
      },
      {
        name: "Counter",
        route: "/counter",
        src: require("@/assets/cover/counter.png"),
      },
      {
        name: "Scroll Show",
        route: "/scroll-show",
        src: require("@/assets/cover/scroll-show.png"),
      },
    ],
  }),
  methods: {
    changeRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
