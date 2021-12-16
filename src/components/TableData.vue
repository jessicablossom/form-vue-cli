<template>
  <div class="table">
    <h1 class="margin-top">Info</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Country</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" :key="i">
          <th>{{ user.name }}</th>
          <th>{{ user.email }}</th>
          <th>{{ user.age }}</th>
          <th>{{ user.country }}</th>
          <th>{{ user.gender }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableData",
  props: ["users"],
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
  background-color: #4834d4;
  color: white;
}
.table tbody {
  background-color: #c7ecee;
}
</style>
