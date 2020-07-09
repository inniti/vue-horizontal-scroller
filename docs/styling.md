# Styling
The scroller makes as less assumptions as possible regarding styling, because you know best how your scroller should look like.

Below are some examples of how to achieve common appearances:

## Examples
### Full width slides
<FullWidth />

```vue
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
export default {
    data: () => ({
        slides: [
            { url: '...', attribution: '...' },
            // ...
        ]
    })
}
</script>

<style scoped>
    .slide {
        width: 100%;
    }
    .slide__content {
        position: relative;
        display: flex;
        margin: 0;
        padding: 1rem 3.5rem;
        justify-content: center;
        align-items: flex-start;
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
        bottom: 1rem;
        left: 3.5rem;
        right: 3.5rem;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background: rgba(255, 255, 255, 0.7);
        padding: 1rem;
        opacity: 0.5;
        transition: opacity 300ms ease;
    }
    .slide:hover .slide__caption {
        opacity: 1;
    }
</style>
```
### Three slides
<ThreeSlides />

```vue
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
    export default {
        name: 'ThreeSlides',
        data() {
            return {
                slides: [
                    { url: '...', attribution: '...' },
                    // ...
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
```

### Variable widths
This doesn't require specific styling because the slides automatically take as much space as they need. 🙃
<VariableWidths />

```vue
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
    export default {
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
    }

    .slide:not(:last-of-type) {
        margin-right: 1rem;
    }

    .slide:nth-of-type(1) {
        width: 300px;
    }

    .slide:nth-of-type(2) {
        width: 400px;
    }

    .slide:nth-of-type(4) {
        width: 600px;
    }
</style>
```