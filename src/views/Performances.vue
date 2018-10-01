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
                                    <Performances :events="events"/>
                                </h1>
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
import Performances from './../components/performances/Performances.vue';

export default {
  name: 'PerformancesView',
  components: {
    Performances,
  },
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

