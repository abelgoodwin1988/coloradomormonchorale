<template>
  <div id="app">
    <nav id="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand has-text-primary">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item" to="/concerts">Concerts</router-link>
            <router-link class="navbar-item" to="/about">About</router-link>
            <router-link class="navbar-item" to="/auditions">Auditions</router-link>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

