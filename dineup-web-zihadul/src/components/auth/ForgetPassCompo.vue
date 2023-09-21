<template>
  <div class="mx-auto max-w-screen-xl mt-24 px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-maroon sm:text-3xl">
        Forget Password
      </h1>

      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        A password reset link will be sent to your email address.
      </p>

      <form action="" class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <p class="text-center text-lg font-medium">Reset your password</p>

        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <q-input filled outlined suffix="@" type="email" class="w-full rounded-lg border-gray-200 text-sm shadow-sm"
              placeholder="Enter email" />
          </div>
        </div>

        <q-btn label="Send OTP" color="accent"
          class="block w-full rounded-lg  px-5 py-3 text-sm font-medium text-white" />
        <p class="text-center text-sm text-gray-500">
          <a class="underline cursor-pointer" @click="$emit('changeCompo', 'LoginCompo')">Sign in</a>
        </p>
      </form>

    </div>
  </div>
</template>

<script>
export default {

}
</script>
