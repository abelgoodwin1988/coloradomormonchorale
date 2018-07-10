<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      |
      <router-link to="/concerts">Concerts</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/auditions">Auditions</router-link>
    </div>
    <router-view/>
  </div>
</template>

