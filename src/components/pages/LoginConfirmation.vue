<template>
  <div class="page-shell">
    <h1>Sign in Successful!</h1>
    <img src="/src/assets/ConfirmationCheck.png" alt="Logo" style="width: 360px; height: auto;" />
    <div class="actions">
      <router-link class="page-button" to="/about">Return Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginConfirmation"
}
</script>
