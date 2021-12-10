<template>
  <v-app>
    <v-app-bar app color="#4834d4" dark>
      <h1>Form</h1>
    </v-app-bar>

    <v-main>
      <v-form
        ref="login"
        v-model="valid"
        class="form"
        v-on:submit.prevent="onSubmit"
      >
        <v-container>
          <v-text-field
            v-model="inputName"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="inputEmail"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model.number="inputAge"
            :rules="ageRules"
            label="Age"
            required
          ></v-text-field>
          <v-select
            class="input-select"
            v-model="inputCountry"
            :items="items"
            :rules="[(v) => !!v || 'Country is required']"
            label="Country"
            required
          ></v-select>
          <span>What is your social media?</span>
          <v-row>
            <v-checkbox
              v-model="inputSocial"
              :rules="[(v) => !!v || 'Must select one!']"
              label="Facebook"
              required
            ></v-checkbox>
            <v-checkbox
              v-model="inputSocial"
              :rules="[(v) => !!v || 'Must select one!']"
              label="Instagram"
              required
            ></v-checkbox>
            <v-checkbox
              v-model="inputSocial"
              :rules="[(v) => !!v || 'Must select one!']"
              label="Twitter"
              required
            ></v-checkbox>
          </v-row>
          <span>What is your gender?</span>
          <v-row>
            <v-radio-group v-model="inputGender" required>
              <v-radio value="male" label="Male" />
              <v-radio value="female" label="Female" />
              <v-radio value="rathernosay" label="Rather not say" />
            </v-radio-group>
          </v-row>

          <v-btn @click="onSubmit" class="btn-primary">Submit</v-btn>
        </v-container>
      </v-form>
    </v-main>

    <div>
      <div class="table">
        <h3>Info</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Country</th>
              <th>Social</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, i) in users" :key="i">
              <th>{{ user.name }}</th>
              <th>{{ user.email }}</th>
              <th>{{ user.age }}</th>
              <th>{{ user.country }}</th>
              <th>{{ user.social }}</th>
              <th>{{ user.gender }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      valid: false,
      inputName: "",
      inputEmail: "",
      inputAge: "",
      inputCountry: "",
      inputSocial: [""],
      inputGender: "",
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      ageRules: [(v) => !!v || "Age is required"],
      select: null,
      items: ["Argentina", "Uruwhy", "Brasil"],
      checkbox: false,
      users: [
        {
          name: "",
          email: "",
          age: "",
          country: "",
          social: [],
          gender: "",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$ref.login.validate();
      const newInfo = {
        name: this.inputName,
        email: this.inputEmail,
        age: this.inputAge,
        country: this.inputCountry,
        social: this.inputSocial,
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
.input-select {
  height: 30px;
}
span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.table {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 95vw;
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
  background-color: #4834d4 !important;
  color: white !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-width: 30% !important;
  margin-top: 20px;
  text-align: center;
  align-self: end;
}
.sm-box {
  display: flex;
  align-items: center;
  width: 70%;
  margin: auto;
}
</style>
