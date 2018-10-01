<template>
<!-- eslint-disable -->
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
                                v-for="(event) in events"
                                :key="event.id">
                                <div class="columns is-centered">
                                  <div class="column is-one-third-desktop is-one-third-tablet">
                                    <img :src="event.imageURL" alt="Event Image">
                                  </div>
                                  <div class="column">
                                    <h2 class="has-text-link">{{ event.title }}</h2>
                                    <h5 class="has-text-grey">{{ event.time }}</h5>
                                    <h5 class="has-text-grey-darker">{{ event.address.location }}</h5>
                                    <p class="has-text-grey-dark is-size-6">
                                      {{ event.address.street1 }} <br />
                                      <span v-if="event.address.street2">{{ event.address.street2 }} <br /></span>
                                      {{ event.address.city }}, {{event.address.state}} {{event.address.zip}}
                                    </p>
                                    <h6 class="has-text-info">{{ event.otherInfo }}</h6>
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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      events: state => state.events,
    }),
  },
};
</script>

<style lang="scss" scoped>
  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .columns {
    align-items: center;
  }
</style>

