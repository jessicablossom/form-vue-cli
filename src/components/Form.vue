<template>
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
        :rules="countryRules"
        label="Country"
        required
      ></v-select>
      <span class="margin-top">What is your gender?</span>
      <v-row>
        <v-radio-group v-model="inputGender" :rules="genderRules" required>
          <v-radio value="male" label="Male" />
          <v-radio value="female" label="Female" />
          <v-radio value="rathernosay" label="Rather not say" />
        </v-radio-group>
      </v-row>

      <v-btn
        @click="onSubmit"
        class="d-flex align-center justify-center btn-primary"
        >Submit</v-btn
      >
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "form",
  props: ["users"],
  data() {
    return {
      valid: false,
      select: null,
      checkbox: false,
      inputName: "",
      inputEmail: "",
      inputAge: "",
      inputCountry: "",
      inputGender: "",
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      ageRules: [
        (v) => !!v || "Age is required",
        (v) => v > 0 || "Age should be major to 0",
      ],
      countryRules: [(v) => !!v || "Country is required"],
      genderRules: [(v) => !!v || "Gender is required"],
      items: ["Argentina", "Uruwhy", "Brasil", "Chile"],
      // eslint-disable-next-line vue/no-dupe-keys
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
      this.$refs.login.validate();
      if (this.valid) {
        const newInfo = {
          name: this.inputName,
          email: this.inputEmail,
          age: this.inputAge,
          country: this.inputCountry,
          social: this.inputSocial,
          gender: this.inputGender,
        };
        this.users.push(newInfo);
      }
    },
  },
};
</script>

<style scoped>
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

.margin-top {
  margin-top: 40px;
}

.form {
  padding: 25px;
  background-color: #c7ecee;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  text-align: left;
  width: 55vw;
  max-height: fit-content;
  justify-content: space-evenly;
  margin-bottom: 20px;
}
.btn-primary {
  height: 32px;
  background-color: #4834d4 !important;
  color: white !important;
  display: flex !important;
  min-width: 30% !important;
  margin: auto;
}

.v-radio {
  margin: 10px 0;
}
</style>
