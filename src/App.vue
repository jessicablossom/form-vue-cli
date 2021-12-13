<template>
  <v-app>
    <v-app-bar class="navbar" app color="#4834d4" dark>
      <h1>VUE Cli Form</h1>
      <v-p>Jessica Francavilla</v-p>
    </v-app-bar>
    <v-main>
      <Form />
      <div>
        <TableData />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import TableData from "./components/TableData.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: { TableData, Form },
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
