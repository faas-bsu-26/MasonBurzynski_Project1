<template>
  <div class="page-shell">
    <h1>Issues</h1>
    <div class="feed">
      <article class="post">
        <div class="post-header">
          <div>
            <h2>Issue #1234</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Bad smell in TC bathroom.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Issue #1235</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Slow wifi in lecture halls in AT building.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Issue #1236</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Unsafe crosswalk near Studebaker West.</p>
      </article>

      <article class="post">
        <div class="post-header">
          <div>
            <h2>Issue #1237</h2>
            <p class="meta">Student Voice Submission</p>
          </div>
        </div>
        <p class="body">Overvrowded parking lots.</p>
      </article>
    </div>

   

    <div class="actions">
      <router-link class="page-button" to="/add-issue">Add Issue</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IssuesPage"
}
</script>