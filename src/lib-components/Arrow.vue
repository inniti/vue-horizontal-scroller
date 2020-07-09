<template>
  <div class="nn-horizontal-scroller-arrow">
    <slot>
      <svg height="20" viewBox="0 0 24 36" width="20">
        <path
          :d="path"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        />
      </svg>
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'NNScrollerArrow',
  props: {
    direction: {
      type: String,
      default: 'right',
      validator(value: string): boolean {
        return ['right', 'left'].includes(value);
      },
    },
  },
  computed: {
    path() {
      switch (this.direction) {
        case 'left':
          return 'M 22 2 L 2 18 L 22 34';
        case 'right':
        default:
          return 'M 2 2 L 22 18 L 2 34';
      }
    },
  },
});
</script>
