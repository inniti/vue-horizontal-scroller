---
title: Installation
---
# Installation

```shell
# npm
npm install @inniti/vue-horizontal-scroller

# yarn
yarn add @inniti/vue-horizontal-scroller
```

## Import components

### Global registration

The default `export` is a vue plugin which registers both components globally: 

```javascript
import Vue from 'vue';
import ScrollerComponents from '@inniti/vue-horizontal-scroller';

Vue.use(ScrollerComponents);
```
```vue
<template>
    <NNHorizontalScroller>
        <NNHorizontalScrollerSlide class="slide">Slide 1</NNHorizontalScrollerSlide>
        <NNHorizontalScrollerSlide class="slide">Slide 2</NNHorizontalScrollerSlide>
        <NNHorizontalScrollerSlide class="slide">Slide 3</NNHorizontalScrollerSlide>
    </NNHorizontalScroller>
</template>
```

### Local registration
The components can be manually registered as well, if you want to rename them for example.

```vue
<script>
import { Scroller, ScrollerSlide } from '@inniti/vue-horizontal-scroller';

export default {
    components: {
        Scroller,
        ScrollerSlide
    },
    data: () => ({})
}
</script>

<template>
    <Scroller>
        <ScrollerSlide class="slide">Slide 1</ScrollerSlide>
        <ScrollerSlide class="slide">Slide 2</ScrollerSlide>
        <ScrollerSlide class="slide">Slide 3</ScrollerSlide>
    </Scroller>
</template>
```