<template>
  <div class="page-shell">
    <h1>Log Out Successful!</h1>
    <img src="/src/assets/ConfirmationCheck.png" alt="Logo" style="width: 360px; height: auto;" />
    <div class="actions">
      <router-link class="page-button" to="/login-page">Sign in</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoutConfirmation"
}
</script>
