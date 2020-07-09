<template>
    <NNHorizontalScroller class="scroller">
        <NNHorizontalScrollerSlide
            :key="slide.id"
            class="slide"
            v-for="slide in slides"
        >
            Slide {{ slide.id }}
        </NNHorizontalScrollerSlide>
    </NNHorizontalScroller>
</template>

<script>
    import NNHorizontalScroller from '../../../src/lib-components/Scroller.vue';
    import NNHorizontalScrollerSlide from '../../../src/lib-components/ScrollerSlide.vue';

    export default {
        name: 'VariableWidths',
        components: {
            NNHorizontalScroller,
            NNHorizontalScrollerSlide
        },
        data() {
            return {
                slides: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
            };
        }
    };
</script>

<style scoped>
    .slide {
        border-radius: 5px;
        background: lightgreen;
        padding: 5rem;
        font-size: 20px;
        max-width: 50%;
    }

    .slide:not(:last-of-type) {
        margin-right: 1rem;
    }

    .slide:nth-of-type(1) {
        width: 300px;
        max-width: 50%;
    }

    .slide:nth-of-type(2) {
        width: 400px;
        max-width: 50%;
    }

    .slide:nth-of-type(4) {
        width: 600px;
        max-width: 50%;
    }
</style>
