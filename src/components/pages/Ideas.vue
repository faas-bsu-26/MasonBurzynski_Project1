<template>
  <div class="page-shell">
    <h1>Ideas</h1>
    <div class="feed">
      <article class="post">
        <div class="post-header">
          <div>
            <h2>Idea #1234</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Install more hammocks in the outdoor areas.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Idea #1235</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Offer more meal plan options.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Idea #1236</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Add standing desks to the library.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Idea #1237</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Extend library hours.</p>
      </article>
    </div>

   

    <div class="actions">
      <router-link class="page-button" to="/add-idea">Add Idea</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdeasPage"
}
</script>
