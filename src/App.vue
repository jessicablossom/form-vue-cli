<template>
  <div id="app">
    <vue-form :state="formstate" @submit.prevent="onSubmit" class="form">
      <validate tag="label">
        <span>* Name: </span>
        <input v-model="inputName" required name="name" />
        <field-messages name="name">
          <div>That's Correct!</div>
          <div slot="required">Name is a mandatory field</div>
        </field-messages>
      </validate>

      <span>Email: </span>
      <input v-model="inputEmail" type="text" />
      <span>Age:</span>
      <input v-model.number="inputAge" type="number" />
      <span>Country:</span>
      <select
        v-model="inputCountry"
        class="input-select"
        aria-label="Default select example"
      >
        <option selected></option>
        <option value="Argentina">Argentina</option>
        <option value="Uruwhy">Uruwhy</option>
        <option value="Brasil">Brasil</option>
      </select>
      <span>What social media do you have?</span>
      <span class="sm-box">
        <input v-model="inputSocial" value="Facebook" type="checkbox" />Facebook
        <input
          v-model="inputSocial"
          value="Instagram"
          type="checkbox"
        />Instagram
        <input v-model="inputSocial" value="Twitter" type="checkbox" />Twitter
      </span>
      <span>What is your gender?</span>
      <span class="sm-box">
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
      <input
        type="submit"
        value="Submit"
        @click="onSubmit"
        class="btn-primary"
      />
    </vue-form>
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
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      formstate: {
        $error: {
          // errors
        },
        $submittedState: {
          // form sent
        },
      },
      model: {
        inputName: "",
        inputEmail: "",
        inputAge: "",
        inputCountry: "",
        inputSocial: [],
        inputGender: "",
      },

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
    onSubmit: function () {
      if (this.formstate.$invalid) {
        // alert errors
        return;
      }
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
  background-color: #4834d4;
  color: white;
  font-weight: bolder;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30%;
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
