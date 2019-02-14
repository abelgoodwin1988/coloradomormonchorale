<template>
    <div class="auditions">
        <section class="hero is-link is-bold is-fullheight">
            <section class="hero">
                <div class="hero-body">
                    <div class="container">
                        <section class="hero">
                            <div class="hero-body">
                                <div class="container">
                                    <h1 class="title">How Can I Keep From Singing?</h1>
                                    <article class="message is-warning">
                                        <div class="message-header">
                                            <p>Auditions</p>
                                        </div>
                                        <div class="message-body">
                                            <p>
                                                We are now scheduling auditions for the upcoming
                                                season.
                                            </p>
                                            <p>Auditions are being held by appointment for the
                                                following date(s).</p>
                                            <p>All January auditions will have a dual role as
                                                Chorale auditions and Lamb of God solo auditions.
                                                Please see www.LambOfGodCO.org for more information
                                                regarding our traditional Easter presentation.</p>
                                            <p>Please contact our auditions coordinator at
                                                auditions@cmcco.org if you have any questions. </p>
                                        </div>
                                    </article>
                                    <div class="container">
                                        <div class="container">
                                            <p class="tabs">
                                                <a
                                                v-bind:class="{ 'is-active': display_cmc,
                                                                'has-text-weight-bold': display_cmc,
                                                                }"
                                                @click="toggle_cmc">
                                                Colorado Saints Chorale and Orchestra</a>
                                                <a
                                                v-bind:class="{ 'is-active': display_log,
                                                                'has-text-weight-bold': display_log,
                                                                }"
                                                @click="toggle_log">
                                                Lamb of God</a>
                                            </p>

                                        </div>
                                        <CSCO v-if="display_cmc">
                                        </CSCO>
                                        <lamb-of-god v-if="display_log"></lamb-of-god>
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
import LambOfGod from '../components/auditions/LambOfGod.vue';
import csco from '../components/auditions/CSCO.vue';

export default {
  components: {
    LambOfGod,
    CSCO,
  },
  data() {
    return {
      display_cmc: true,
      display_log: false,
    };
  },
  methods: {
    toggle_cmc() {
      this.display_cmc = true;
      this.display_log = false;
    },
    toggle_log() {
      this.display_cmc = false;
      this.display_log = true;
    },
  },
};

</script>

<style>

</style>
