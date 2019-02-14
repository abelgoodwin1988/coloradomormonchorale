<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-warning is-bold" id="navbar"
        role="navigation" aria-label="main navigation">
        <div class="navbar-brand has-text-primary is-large">
            <a class="navbar-item" :class="activeHome">
                <router-link class="navbar-item" to="/">Home</router-link>
            </a>
            <a class="navbar-item">
                <router-link class="navbar-item" to="/performances">Performances</router-link>
            </a>
            <a class="navbar-item">
                <router-link class="navbar-item" to="/about">About</router-link>
            </a>
            <a class="navbar-item">
                <router-link class="navbar-item" to="/auditions">Auditions</router-link>
            </a>
            <a class="navbar-item">
                <router-link class="navbar-item" to="/members">Members</router-link>
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    </nav>
    <router-view/>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong><a href="https://lds.org">The Church of Jesus Christ of Latter Day Saints</a></strong>
            </p>
            <p>
                <strong>Colorado Saints Chorale and Orchestra</strong> - Denver, CO.
            </p>
            <p>
                Copyright © 2000-2018 <strong>Colorado Mormon Chorale</strong>
            </p>
            <p>
                <router-link to="/privacypolicy"><strong>Privacy Policy</strong></router-link>
            </p>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: {
        Home: true,
        Performances: false,
        About: false,
        Auditions: false,
        Members: false,
      },
    };
  },
  methods: {
    switchActive: (input) => {
      switch (input) {
        case 'home':
          break;
        case 'performances':
          break;
        case 'about':
          break;
        case 'auditions':
          break;
        case 'members':
          break;
        default:
          break;
      }
    },
  },
  created() {
    // dispatch init once vue instance is created (don't want to overwrite data in async operation)
    this.$store.dispatch('initState');
  },
};
</script>

<style>
.router-link-active {
    font-size: bold;
}
</style>
