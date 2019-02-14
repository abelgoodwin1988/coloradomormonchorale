<template>
  <!-- eslint-disable -->
  <article class="message is-warning">
    <div class="message-header" @click="toggleBody">
      <p>About Us</p>
      <font-awesome-icon v-if="isOpened" icon="angle-double-up"></font-awesome-icon>
      <font-awesome-icon v-else icon="angle-double-down"></font-awesome-icon>
    </div>
    <div v-if="isOpened" class="message-body">
      <p>
          Born out of a need to proclaim the divinity and gospel of Jesus Christ through great music, the COLORADO SAINTS CHORALE AND ORCHESTRA was established in 1983 as a premier-quality chorus of mixed voices drawn from the greater Denver area and Northeastern Colorado.
      </p>
      <p>
          The Chorale is an ambassador for The Church of Jesus Christ of Latter-day Saints in Denver and the State of Colorado, and operates at the direction of appointed Church officers. The Chorale is an auditioned choir made up entirely of volunteers that come from all walks of life. Under the baton of six different conductors, and the leadership of seven diverse presidents, the Chorale has grown to be a recognizable force in the community, enabling all who listen to enjoy the Spirit that accompanies uplifting music.
      </p> 
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isOpened: true,
    };
  },
  methods: {
    toggleBody() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
 .message-header {
   cursor: pointer;
   .left {
       display: flex;
       justify-content: flex-start;
   }
   .right {
       display: flex;
       justify-content: flex-end;
       text-align: right;
   }
 }
</style>
