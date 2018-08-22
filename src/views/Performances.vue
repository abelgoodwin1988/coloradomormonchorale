<template>
    <div class="performances">
        <section class="hero is-link is-bold is-fullheight">
          <section class="hero">
            <div class="hero-body">
                <div class="container">
                  <section class="hero">
                      <div class="hero-body">
                          <div class="container">
                              <h1 class="title">
                                  Performances
                              </h1>
                              <div
                                class="box content"
                                v-for="(event,index) in events"
                                :key="index">
                                <div class="columns is-centered">
                                  <div class="column is-one-quarter-desktop is-one-third-tablet">
                                    <img :src="event.imageURL" alt="Event Image">
                                  </div>
                                  <div class="column">
                                    <h3>{{ event.title }}</h3>
                                  </div>
                                </div>
                              </div>
                          </div>
                      </div>
                  </section>
                </div>
              </div>
          </section>
        </section>
    </div>
</template>

<script>
export default {
  computed: {
    events() {
      return this.$store.state.events;
    },
  },
};
</script>

<style lang="scss" scoped>
  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
</style>

