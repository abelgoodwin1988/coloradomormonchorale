<template>
  <!-- eslint-disable -->
  <article class="message is-dark">
      <div class="message-header" @click="toggleBody">
          <p>History</p>
      </div>
      <div v-if="isOpened" class="message-body">
          <aside class="menu">
              <p class="menu-label">
                  Conductors
              </p>
              <ul class="menu-list">
                  <li>
                      ...
                  </li>
              </ul>
                <p class="menu-label">
                  Presidents
              </p>
              <ul class="menu-list">
                  <li>
                      ...
                  </li>
              </ul>
                <p class="menu-label">
                  Concerts
              </p>
              <ul class="menu-list">
                  <li>
                      ...
                  </li>
              </ul>
                <p class="menu-label">
                  Highlights
              </p>
              <ul class="menu-list">
                  <li>
                      ...ß
                  </li>
              </ul>
          </aside>
      </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggleBody() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style scoped>
 .message-header {
   cursor: pointer;
 }
</style>
