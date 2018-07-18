<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-warning is-bold" id="navbar"
        role="navigation" aria-label="main navigation">
        <div class="navbar-brand has-text-primary is-large">
            <a class="navbar-item">
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
                <strong>Colorado Mormon Chorale</strong> - Denver, CO.
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
  beforeCreate() {
    // create an array of mock data - in final app, we get public data here
    this.$store.dispatch('initState', [{ 'name': 'Bob' }, { 'name': 'Jane' }]);
  },
};
</script>
