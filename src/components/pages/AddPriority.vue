<template>
  <div class="page-shell">
    <h1>Add Priority</h1>
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
      <router-link class="page-button" to="/add-priority-confirmation">Confirm</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPriority"
}
</script>