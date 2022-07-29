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
    ],
  }),
  methods: {
    changeRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scope>
.pointer {
  cursor: pointer;
}
</style>
