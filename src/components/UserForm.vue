<template>
  <div>
    <v-form
      ref="login"
      v-model="valid"
      class="form-box"
      v-on:submit.prevent="onSubmit"
    >
      <v-container>
        <v-text-field
          v-model="newUser.inputName"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="newUser.inputEmail"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model.number="newUser.inputAge"
          :rules="ageRules"
          label="Age"
          required
        ></v-text-field>
        <v-select
          class="input-select"
          v-model="newUser.inputCountry"
          :items="items"
          :rules="countryRules"
          label="Country"
          required
        ></v-select>
        <span class="margin-top">What is your gender?</span>
        <v-row>
          <v-radio-group
            v-model="newUser.inputGender"
            :rules="genderRules"
            required
          >
            <v-radio value="male" label="Male" />
            <v-radio value="female" label="Female" />
            <v-radio value="rathernosay" label="Rather not say" />
          </v-radio-group>
        </v-row>

        <v-btn
          block
          @click="validate"
          class="d-flex align-center justify-center btn-primary"
          >Submit</v-btn
        >
      </v-container>
    </v-form>
    <TableData :users="getUsers" />
  </div>
</template>

<script>
import TableData from "./TableData.vue";

export default {
  name: "UserForm",
  components: { TableData },
  data() {
    return {
      valid: false,
      select: null,
      checkbox: false,
      newUser: {
        inputName: "",
        inputEmail: "",
        inputAge: "",
        inputCountry: "",
        inputGender: "",
      },
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
    };
  },
  methods: {
    validate() {
      if (this.$refs.login.validate()) {
        let dataForm = {
          inputName: this.inputName,
          inputEmail: this.inputEmail,
          inputAge: this.inputAge,
          inputCountry: this.inputCountry,
          inputGender: this.inputGender,
        };
        this.$store.dispatch("addUser", dataForm);
      }
    },
  },
  computed: {
    getUsers() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
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

.form-box {
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
