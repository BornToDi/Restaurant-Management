<template>
  <div class="mx-auto max-w-screen-xl mt-24 px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-maroon sm:text-3xl">
        Get started today
      </h1>

      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        dolores deleniti inventore quaerat mollitia?
      </p>

      <form class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <p class="text-center text-lg font-medium">Sign up to a account</p>

        <div>
          <label for="email" class="sr-only">Full name</label>

          <div class="relative">
            <q-input
              filled
              outlined
              type="text"
              class="w-full rounded-lg border-gray-200 text-sm shadow-sm"
              placeholder="Enter name"
              v-model="enterName"
            />
          </div>
        </div>

        <div>
          <label for="email" class="sr-only">Phone</label>

          <div class="relative">
            <q-input
              filled
              outlined
              type="text"
              class="w-full rounded-lg border-gray-200 text-sm shadow-sm"
              placeholder="Enter phone number"
              v-model="enterPhone"
            />
          </div>
        </div>

        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <q-input
              filled
              outlined
              suffix="@"
              type="email"
              class="w-full rounded-lg border-gray-200 text-sm shadow-sm"
              placeholder="Enter email"
              v-model="enterEmail"
            />
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>

          <div class="relative">
            <q-input
              filled
              outlined
              type="password"
              class="w-full rounded-lg border-gray-200 text-sm shadow-sm"
              placeholder="Enter password"
              v-model="enterPassword"
            />
          </div>
        </div>

        <q-btn
          @click="addUser()"
          label="Sign up"
          color="accent"
          class="block w-full rounded-lg px-5 py-3 text-sm font-medium text-white"
        />
        <button
          class="bg-white border cursor-pointer py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm text-[#002D74]"
        >
          <svg
            class="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="25px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          Sign up with Google
        </button>
        <p class="text-center text-sm text-gray-500">
          Have a account?
          <a
            class="underline cursor-pointer"
            @click="$emit('changeCompo', 'LoginCompo')"
            >Sign in</a
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      enterName: '',
      enterEmail: '',
      enterPhone: '',
      enterPassword: '',
    };
  },
  methods: {
    async addUser() {
      console.warn(
        this.enterName,
        this.enterEmail,
        this.enterPassword,
        this.enterPhone
      );
      axios
        .post('https://dineup-api.ichinglab.com/api/v1/auth/register', {
          name: this.enterName,
          email: this.enterEmail,
          password: this.enterPassword,
          phone: this.enterPhone,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
