<template>
    <div>
        <div style="margin: 1rem;">
            <label>
                scrollDelay:
                <input step="1" type="number" v-model.number="scrollDelay">
            </label>
        </div>
        <div style="margin: 1rem;">
            <label>
                scrollDistance:
                <input min="0" step="1" style="margin-right: 1rem;" type="number" v-model.number="scrollDistance">
            </label>
        </div>
        <div style="margin: 1rem;">
            Slide to:&nbsp;
            <button @click="slideTo(0)">1</button>
            <button @click="slideTo(1)">2</button>
            <button @click="slideTo(2)">3</button>
            <button @click="slideTo(3)">4</button>
            <button @click="slideTo(4)">5</button>
            <button @click="slideTo(5)">6</button>
            <button @click="slideTo(6)">7</button>
            <button @click="slideTo(7)">8</button>
            <button @click="slideTo(8)">9</button>
        </div>
        <div style="margin: 1rem;">
            <button @click="slideBackwards">👈 scrollBackwards</button>
            <button @click="slideForwards">👉 scrollForwards</button>
        </div>
        <NNHorizontalScroller :scroll-distance="scrollDistance"
                              :scroll-delay="scrollDelay"
                              @resize="logEvent('resize', $event)"
                              @scroll="logEvent('scroll', $event)"
                              class="scroller"
                              ref="scroller">
            <NNHorizontalScrollerSlide
                :key="slide.id"
                class="slide"
                v-for="slide in slides"
            >
                {{ slide.id }}
            </NNHorizontalScrollerSlide>
        </NNHorizontalScroller>
        <code style="display: block; height: 300px; font-size: 12px; overflow: auto; margin-top: 1rem;" ref="log">
            <span :key="`log_${idx}`" style="display: block;" v-for="(line, idx) in log">{{ line }}</span>
        </code>
    </div>
</template>

<script>
    import NNHorizontalScroller from '../../../src/lib-components/Scroller.vue';
    import NNHorizontalScrollerSlide from '../../../src/lib-components/ScrollerSlide.vue';

    export default {
        name: 'Controls',
        components: {
            NNHorizontalScroller,
            NNHorizontalScrollerSlide
        },
        data() {
            return {
                scrollDelay: 60,
                scrollDistance: 166,
                slides: [
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                    { id: 4 },
                    { id: 5 },
                    { id: 6 },
                    { id: 7 },
                    { id: 8 },
                    { id: 9 }
                ],
                log: []
            };
        },
        methods: {
            logEvent(eventName, event) {
                this.log.push(`${eventName}: ${JSON.stringify(event)}`);
                this.$nextTick(() => {
                    const log = this.$refs.log;
                    log.scrollTop = log.scrollHeight + 10;
                })
            },
            slideTo(idx) {
                this.$refs.scroller.slideTo(idx);
            },
            slideBackwards() {
                this.$refs.scroller.slideBackwards();
            },
            slideForwards() {
                this.$refs.scroller.slideForwards();
            }
        }
    };
</script>

<style scoped>
    .slide {
        width: 150px;
        height: 100px;
        background: #67cdcc;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slide:not(:last-of-type) {
        margin-right: 1rem;
    }
</style>
