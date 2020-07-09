<template>
    <div>
        <div class="buttons">
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
        <div class="arrows">
            <input min="0" step="1" type="number" v-model.number="scrollDistance" style="margin-right: 1rem;">
            <button @click="slideBackwards">👈 scrollBackwards</button>
            <button @click="slideForwards">👉 scrollForwards</button>
        </div>
        <NNHorizontalScroller :scroll-distance="scrollDistance" class="scroller" ref="scroller">
            <NNHorizontalScrollerSlide
                :key="slide.id"
                class="slide"
                v-for="slide in slides"
            >
                {{ slide.id }}
            </NNHorizontalScrollerSlide>
        </NNHorizontalScroller>
    </div>
</template>

<script>
    import NNHorizontalScroller from '../../../src/lib-components/Scroller.vue';
    import NNHorizontalScrollerSlide from '../../../src/lib-components/ScrollerSlide.vue';

    export default {
        name: 'ThreeSlides',
        components: {
            NNHorizontalScroller,
            NNHorizontalScrollerSlide
        },
        data() {
            return {
                scrollDistance: 150,
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
                ]
            };
        },
        methods: {
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

    .arrows {
        margin-bottom: 2rem;
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
    }

    .buttons {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

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
