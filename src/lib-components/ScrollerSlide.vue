<template>
  <div class="nn-horizontal-scroller-slide">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NNHorizontalScrollerSlide',
});
</script>

<style>
.nn-horizontal-scroller-slide {
  scroll-snap-align: start;
  min-width: 5rem;
  flex: 0 0 auto;
  height: 100%;
}
</style>
