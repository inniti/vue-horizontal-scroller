<template>
  <div class="nn-horizontal-scroller">
    <div @scroll="onScroll" class="nn-horizontal-scroller__frame" ref="frame">
      <slot />
    </div>
    <Arrow
      @click.native="slideBackwards"
      @keydown.native.enter="slideBackwards"
      class="nn-horizontal-scroller__arrow nn-horizontal-scroller__arrow--prev"
      direction="left"
      tabindex="0"
      v-if="arrows"
      v-show="!atStart"
    >
      <slot name="arrow-left"></slot>
    </Arrow>
    <Arrow
      @click.native="slideForwards"
      @keydown.native.enter="slideForwards"
      class="nn-horizontal-scroller__arrow nn-horizontal-scroller__arrow--next"
      direction="right"
      tabindex="0"
      v-if="arrows"
      v-show="!atEnd"
    >
      <slot name="arrow-right"></slot>
    </Arrow>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Arrow from './Arrow.vue';

interface SampleData {
  scrolling: boolean;
  atStart: boolean;
  atEnd: boolean;
  slideOffsets: number[];
  scrollingTimeout: NodeJS.Timeout | null;
}

let ro: ResizeObserver;

// eslint-disable-next-line @typescript-eslint/ban-types
function debounce(fn: Function, delay: number) {
  let timeout: NodeJS.Timeout;
  return function (this: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(ctx, args);
    }, delay);
  };
}

export default Vue.extend({
  name: 'NNHorizontalScroller',
  components: {
    Arrow,
  },
  props: {
    arrows: Boolean,
    scrollOffset: {
      type: Number,
      default: 0,
    },
    scrollDistance: {
      type: Number,
      default: NaN,
    },
  },
  data(): SampleData {
    return {
      scrolling: false,
      atStart: true,
      atEnd: false,
      slideOffsets: [],
      scrollingTimeout: null,
    };
  },
  computed: {},
  mounted() {
    ro = new ResizeObserver(this.onFrameResize);
    ro.observe(this.$refs.frame as HTMLElement);
    this.calculateSlideOffsets();
  },
  beforeDestroy() {
    ro && ro.disconnect();
  },
  methods: {
    slideForwards() {
      const frame = this.$refs.frame as HTMLElement;
      const distance: number =
        this.scrollDistance || frame.getBoundingClientRect().width;
      frame.scroll({
        left: Math.min(frame.scrollLeft + distance, frame.scrollWidth),
        behavior: 'smooth',
      });
    },

    slideBackwards() {
      const frame = this.$refs.frame as HTMLElement;
      const distance: number =
        this.scrollDistance || frame.getBoundingClientRect().width;
      frame.scroll({
        left: Math.max(0, frame.scrollLeft - distance),
        behavior: 'smooth',
      });
    },

    onFrameResize: debounce(function (this: any) {
      this.calculateSlideOffsets();
      this.calculateStartEnd();
      this.$emit('resize', {
        position: this.$refs.frame.scrollLeft,
        atStart: this.atStart,
        atEnd: this.atEnd,
        width: (this.$refs.frame as HTMLElement).getBoundingClientRect().width,
      });
    }, 60),

    calculateSlideOffsets() {
      const frame = this.$refs.frame as HTMLElement;
      const currentPosition = frame.scrollLeft;
      frame.scrollLeft = 0;
      const frameBounds = frame.getBoundingClientRect();
      const slides = frame.querySelectorAll('.nn-horizontal-scroller-slide');
      const offsets = new Array(slides.length);
      let offset = 0;
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        const slideStyle = window.getComputedStyle(slide);
        const margin =
          parseFloat(slideStyle.marginLeft) +
          parseFloat(slideStyle.marginRight);
        const slideWidth = slide.getBoundingClientRect().width + margin;
        offsets[i] = offset - frameBounds.x;
        offset += slideWidth;
      }
      this.slideOffsets = offsets;
      frame.scrollLeft = currentPosition;
    },

    slideTo(index: number) {
      const slides = this.$el.querySelectorAll('.nn-horizontal-scroller-slide');
      const frame = this.$refs.frame as HTMLElement;
      const frameBounds = frame.getBoundingClientRect();
      if (index <= slides.length - 1 && index >= 0) {
        frame.scroll({
          left: this.slideOffsets[index] + frameBounds.x + this.scrollOffset,
          behavior: 'smooth',
        });
      } else if (index >= 0) {
        console.warn(
          `tried to slide to ${index}, but there's no slide at this index`
        );
      }
    },

    onScroll() {
      this.scrolling = true;
      this.scrollingTimeout && clearTimeout(this.scrollingTimeout);
      this.scrollingTimeout = null;

      this.scrollingTimeout = setTimeout(() => {
        this.calculateStartEnd();
        this.scrolling = false;
        let frame = this.$refs.frame as HTMLElement;
        this.$emit('scroll', {
          position: frame.scrollLeft,
          atStart: this.atStart,
          atEnd: this.atEnd,
          width: frame.getBoundingClientRect().width,
        });
      }, 60);
    },

    calculateStartEnd() {
      const frame = this.$refs.frame as HTMLElement;
      this.atStart = frame.scrollLeft === 0;
      const frameBounds = frame.getBoundingClientRect();
      this.atEnd = frame.scrollLeft >= frame.scrollWidth - frameBounds.width;
    },
  },
});
</script>

<style>
.nn-horizontal-scroller {
  position: relative;
}

.nn-horizontal-scroller__frame {
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  -ms-scroll-chaining: none;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overscroll-behavior-x: none;
  width: 100%;
  height: 100%;
}

.nn-horizontal-scroller__frame::-webkit-scrollbar {
  display: none;
}

.nn-horizontal-scroller__arrow {
  position: absolute;
  top: 50%;
  cursor: pointer;
  user-select: none;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  border-radius: 2px;
}

.nn-horizontal-scroller__arrow--prev {
  left: 0;
}

.nn-horizontal-scroller__arrow--next {
  right: 0;
}
</style>
