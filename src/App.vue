<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-warning is-bold" id="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand has-text-primary is-large">
            <a class="navbar-item">
                <router-link class="navbar-item" to="/">Home</router-link>
            </a>
            <a class="navbar-item">
                <router-link class="navbar-item" to="/concerts">Concerts</router-link>
            </a>
            <a class="navbar-item">
                <router-link class="navbar-item" to="/about">About</router-link>
            </a>
            <a class="navbar-item">
                <router-link class="navbar-item" to="/auditions">Auditions</router-link>
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"><router-link class="navbar-item" to="/">Home</router-link></span>
                <span aria-hidden="true"><router-link class="navbar-item" to="/concerts">Concerts</router-link></span>
                <span aria-hidden="true"><router-link class="navbar-item" to="/auditions">Auditions</router-link></span>
            </a>
        </div>
    </nav>
    <router-view/>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Colorado Mormon Chorale</strong> - Denver, CO.
            </p>
            <p>
                Copyright © 2000-2018 <strong>Colorado Mormon Chorale</strong>
            </p>
            <p>
                <strong>Privacy Policy</strong>
            </p>
        </div>
    </footer>
  </div>
</template>

