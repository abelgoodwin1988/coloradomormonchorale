<template>
  <!-- eslint-disable -->
  <article class="message is-primary">
    <div class="message-header" @click="toggleBody">
      <p>Leadership</p>
    </div>
    <div v-if="isOpened" class="message-body">
      <aside class="menu">
        <p class="menu-label">
            Choir Leadership
        </p>
        <ul class="menu-list">
          <li>
              ...
          </li>
        </ul>
        <p class="menu-label">
            Administrative Leadership
        </p>
        <ul class="menu-list">
          <li>
              ...
          </li>
        </ul>
        <p class="menu-label">
            Music Leadership
        </p>
        <ul class="menu-list">
          <li>
              ...
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
