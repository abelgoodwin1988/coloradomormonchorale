<template>
  <div class="columns is-centered">
    <div class="column is-one-third-desktop is-one-third-tablet">
      <img :src="event.imageURL" alt="Event Image">
    </div>
    <div class="column">
      <h2 class="has-text-link">{{ event.title }}</h2>
      <h5 class="has-text-grey">{{ event.time }}</h5>
      <h5 class="has-text-grey-darker">{{ event.address.location }}</h5>
      <p class="">
      {{ event.address.street1 }} <br />
      <span v-if="event.address.street2">{{ event.address.street2 }} <br /></span>
      {{ event.address.city }}, {{event.address.state}} {{event.address.zip}}
      </p>
      <h6 class="has-text-info">{{ event.otherInfo }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Performance',
  props: {
    event: Object,
  },
};
</script>

<style lang="scss">
  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .columns {
    align-items: center;
  }
</style>
