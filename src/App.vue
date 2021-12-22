<template>
  <v-app>
    <v-app-bar class="navbar" app color="#4834d4" dark>
      <h1>VUE Cli Form</h1>
      <p>Jessica Francavilla</p>
    </v-app-bar>
    <v-main>
      <UserForm />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import UserForm from "./components/UserForm.vue";

export default {
  name: "App",
  components: { UserForm },
  computed: {
    ...mapGetters(["users"]),
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-toolbar__content,
.v-toolbar__extension {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
