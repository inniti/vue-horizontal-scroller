<template>
    <NNHorizontalScroller arrows class="scroller">
        <NNHorizontalScrollerSlide
            :key="slide.id"
            class="slide"
            v-for="slide in slides"
        >
            <figure class="slide__content">
                <img :alt="slide.attribution" :src="slide.url" class="slide__img">
                <figcaption class="slide__caption">{{slide.attribution}}</figcaption>
            </figure>
        </NNHorizontalScrollerSlide>
    </NNHorizontalScroller>
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
                slides: [
                    {
                        url: 'https://images.unsplash.com/photo-1593336458381-be71a028d847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                        attribution: 'Unsplash https://unsplash.com/photos/JuOV21yqa9U'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1593382025255-1a4b52884b96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                        attribution: 'Unsplash https://unsplash.com/photos/C6wGhXFclnI'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1574668413969-82635d67b2ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                        attribution: 'Unsplash https://unsplash.com/photos/P-UwLjX0kRc'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1593336458381-be71a028d847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                        attribution: 'Unsplash https://unsplash.com/photos/JuOV21yqa9U'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1593382025255-1a4b52884b96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                        attribution: 'Unsplash https://unsplash.com/photos/C6wGhXFclnI'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1574668413969-82635d67b2ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                        attribution: 'Unsplash https://unsplash.com/photos/P-UwLjX0kRc'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .scroller {
        scroll-padding-left: 0.5rem;
    }
    .slide {
        width: calc(100% / 3);
    }
    .slide__content {
        position: relative;
        display: flex;
        margin: 0;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
    }

    .slide__img {
        display: block;
        padding: 0;
        margin: 0;
        border-radius: 5px;
        max-height: 100%;
        max-width: 100%;
    }

    .slide__caption {
        position: absolute;
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background: rgba(255, 255, 255, 0.5);
        padding: 1rem;
        overflow: hidden;
        font-size: 0.5rem;
    }
</style>
