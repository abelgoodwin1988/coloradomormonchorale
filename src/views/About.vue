<template>
    <div class="about">
        <section class="hero is-link is-bold is-fullheight">
            <section class="hero">
                <div class="hero-body">
                    <div class="container">
                        <section class="hero">
                            <div class="hero-body">
                                <div class="container">
                                  <about-us></about-us>
                                  <about-leadership></about-leadership>
                                  <about-history></about-history>
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
import AboutUs from '../components/about/AboutUs.vue';
import AboutLeadership from '../components/about/AboutLeadership.vue';
import AboutHistory from '../components/about/AboutHistory.vue';

export default {
  components: {
    AboutUs,
    AboutLeadership,
    AboutHistory,
  },
};
</script>

<style>

</style>

