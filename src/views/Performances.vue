<template>
    <div class="auditions">
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
                                      <article class="media">
                                        <figure class="media-left">
                                          <p class="image is-4x3">
                                            <img src="https://via.placeholder.com/200x150">
                                          </p>
                                        </figure>
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
