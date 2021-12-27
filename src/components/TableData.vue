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
  props: {
    users: Array,
  },

  data() {
    return {
      formUsersHeaders: [
        { text: "First Name", value: "inputName" },
        { text: "E-mail", value: "inputEmail" },
        { text: "Age", value: "inputAge" },
        { text: "Country", value: "inputCountry" },
        { text: "Gender", value: "inputGender" },
      ],
    };
  },
  mounted() {
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
