<template>
    <div class="auditions">
        <section class="hero is-link is-bold is-fullheight">
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
                            <article class="media">
                              <div class="media-left">
                                <figure class="image is-4by3">
                                  <img :src="event.imageURL">
                                </figure>
                              </div>
                              <div class="media-content">
                                <div class="content">
                                  <h3>{{ event.title }}</h3>
                                </div>
                              </div>
                            </article>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
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
  figure {
    width: 150px;
  }
</style>

