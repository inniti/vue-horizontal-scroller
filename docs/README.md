# Vue Horizontal Scroller

This is a simple Vue.js component which wraps content into a horizontal scroller.

The scroller leverages CSS scroll snapping and smooth scrolling if supported by the browser.

## Dependencies
The components don't have any 3rd party dependencies. But they rely on modern browser features, specifically:
* [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
  
  this is a strict requirement as it is used to calculate slide offsets
* [Smooth Scrolling](https://developer.mozilla.org/de/docs/Web/CSS/scroll-behavior)

  if not supported, scrolling to a specific slide will still work but the transition will be instantaneous instead of a smooth animation 

Both of the dependencies above can (and should) be polyfilled, if your target browser doesn't support them. 
 