<template>
  <div class="page-shell">
    <h1>Issue Submitted!</h1>
    <img src="/src/assets/ConfirmationCheck.png" alt="Logo" style="width: 360px; height: auto;" />
    <div class="actions">
      <router-link class="page-button" to="/issues">Return</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddIssueConfirmation"
}
</script>