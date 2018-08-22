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
                                class="box"
                                v-for="(event,index) in events"
                                :key="index">
                                <div class="columns">
                                  <div class="column is-one-third">
                                    <img :src="event.imageURL" alt="Event Image">
                                  </div>
                                  <div class="column">
                                    <h1>{{ event.title }}</h1>
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
</style>

