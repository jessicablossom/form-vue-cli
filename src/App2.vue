<template>
  <div id="app">
    <form class="form">
      <span>Name: </span>
      <input v-model="inputName" type="text" />
      <span>Email: </span>
      <input v-model="inputEmail" type="text" />
      <span>Age:</span>
      <input v-model="inputAge" type="number" />
      <span>Are you Coder Alumni?:</span>
      <span class="no-flex">
        <input v-model="inputCoder" type="checkbox" />Yes</span
      >
      <span>What is your gender?</span>
      <span class="column">
        <input
          v-model="inputGender"
          type="radio"
          name="gender"
          value="male"
        />Male
        <input
          v-model="inputGender"
          type="radio"
          name="gender"
          value="female"
        />Female
        <input
          v-model="inputGender"
          type="radio"
          name="gender"
          value="rathernosay"
        />Rather no say
      </span>
      <submit @click="addUser" class="btn-primary">Submit</submit>
    </form>
    <div>
      <div class="table">
        <h3>Info</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>

              <th>Age</th>
              <th>Coder?</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, i) in users" :key="i">
              <th>{{ user.name }}</th>
              <th>{{ user.email }}</th>
              <th>{{ user.age }}</th>
              <th v-if="user.coder">Yes</th>
              <th v-else>No</th>
              <th>{{ user.gender }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      users: [
        {
          name: "",
          email: "",
          age: "",
          coder: "",
          gender: "",
        },
      ],
    };
  },
  methods: {
    data() {},
    addUser(event) {
      event.preventDefault();
      const newInfo = {
        name: this.inputName,
        age: this.inputAge,
        coder: this.inputCoder,
        gender: this.inputGender,
      };
      this.users.push(newInfo);
    },
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
input {
  margin: 5px 0 5px 0;
  height: 25px;
}
input:focus {
  outline: none;
}
span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 60vw;
  color: #2c3e50;
}

.table thead {
  background-color: #4834d4;
  color: white;
}
.form {
  padding: 25px;
  background-color: #c7ecee;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: left;
  width: 55vw;
  max-height: fit-content;
  justify-content: space-evenly;
}
.btn-primary {
  height: 32px;
  padding: 2px;
  border: none;
  background-color: #4834d4;
  color: white;
  font-weight: bolder;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50%;
  margin-top: 20px;
  align-self: end;
}
.no-flex {
  display: flex;
  align-items: left;
  justify-content: space-around;
  width: 70px;
}
</style>
