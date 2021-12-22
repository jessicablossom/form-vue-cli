<template>
  <div class="table">
    <h1 class="margin-top">Info</h1>
    <v-data-table class="table" :headers="formUsersHeaders" :items="users">
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TableData",

  data() {
    return {
      formUsersHeaders: [
        { text: "First Name", value: "this.store.users.inputName" },
        { text: "E-mail", value: "inputEmail" },
        { text: "Age", value: "inputAge" },
        { text: "Country", value: "inputCountry" },
        { text: "Gender", value: "inputGender" },
      ],
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  mounted() {
    console.log("hola");
    this.$store.dispatch("getUsers");
  },
};
</script>

<style scoped>
.table {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80vw;
  color: #2c3e50;
  top: -50px;
}
.table thead {
  background-color: #4834d4 !important;
  color: white !important;
}
.table tbody {
  background-color: #c7ecee;
}
</style>
