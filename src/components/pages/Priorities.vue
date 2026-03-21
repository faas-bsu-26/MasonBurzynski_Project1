<template>
  <div class="page-shell">
    <h1>Priorities</h1>
    <div class="feed">
      <article class="post">
        <div class="post-header">
          <div>
            <h2>Priority #1234</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Build a new parking garage on north side of campus.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Priority #1235</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Upgrade campus lighting for safety.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Priority #1236</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Adding new equipment to fitness areas for health.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Priority #1237</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Improving the campus wifi infrastructure.</p>
      </article>
    </div>

   

    <div class="actions">
      <router-link class="page-button" to="/add-priority">Add Priority</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrioritiesPage"
}
</script>