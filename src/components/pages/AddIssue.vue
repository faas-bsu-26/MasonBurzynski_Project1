<template>
  <div class="page-shell">
    <h1>Add Issue Page</h1>
    <p></p>
    <div class="textBoxDisplay">
      Title
    </div>
    <div class="textBoxDisplay">
      Description
    </div>
    <div class="textBoxDisplay">
      Category
    </div>
    <div class="actions">
      <router-link class="page-button" to="/add-issue-confirmation">Confirm</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddIssue"
}
</script>