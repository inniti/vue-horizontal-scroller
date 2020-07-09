---
title: Controls
---
# Controls

## Arrows 
Arrows can be enabled by setting the prop `arrows` to `true`.
They are turned off by default.  
```vue
<template>
    <Scroller arrows>
        ...
    </Scroller>
</template>
```

Clicking on an arrow will call the method `slideForwards` or `slideBackwards` respectively.
The slide distance is set to 100% of the scroller width by default, but can be adjusted via the prop `slideDistance`.

## From outer component
<Controls />