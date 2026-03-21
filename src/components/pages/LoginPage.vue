<template>
  <div class="page-shell">
    <h1>Sign in</h1>
    <p></p>
    <div class="textBoxDisplay">
      someone@bsu.edu
    </div>
    <div class="textBoxDisplay">
      Password
    </div>
     <div class="actions">
      <router-link class="page-button" to="/login-confirmation">Sign in</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
}
</script>
