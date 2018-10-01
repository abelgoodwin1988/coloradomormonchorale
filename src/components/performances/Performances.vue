<template>
  <div>
    <div
    class="box content"
    v-for="(event) in events"
    :key="event.id">
      <Performance :event="event" />
    </div>
  </div>
</template>

<script>
import Performance from './Performance.vue';

export default {
  name: 'PerformancsComponent',
  components: {
    Performance,
  },
  props: {
    events: Array,
  },
};
</script>

