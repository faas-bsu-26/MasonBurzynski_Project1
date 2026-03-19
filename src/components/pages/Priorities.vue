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
        <p class="body">Install more hammocks in the outdoor areas.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Priority #1235</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Add more shaded seating near the student center.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Priority #1236</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Create a late-night study lounge with charging stations.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Priority #1237</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Offer more campus events focused on commuter students.</p>
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