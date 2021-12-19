<template>
  <div class="table">
    <h1 class="margin-top">Info</h1>
    <v-data-table class="table" :headers="formUsersHeaders" :items="users">
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "TableData",
  data() {
    return {
      users: [],
      formUsersHeaders: [
        { text: "First Name", value: "inputName" },
        { text: "E-mail", value: "inputEmail" },
        { text: "Age", value: "inputAge" },
        { text: "Country", value: "inputCountry" },
        { text: "Gender", value: "inputGender" },
      ],
    };
  },
  methods: {
    getUsers() {
      const axios = require("axios");

      axios
        .get("https://61b8f28f38f69a0017ce5e38.mockapi.io/form_users")
        .then((data) => {
          this.users = data.data;
        });
    },
  },
  mounted() {
    this.getUsers();
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
