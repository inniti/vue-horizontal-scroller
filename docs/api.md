---
title: API
---
# API
## Props
| Prop     | Type      | Default | Description                                                                                                                                                               |
|----------|-----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `arrows` | `Boolean` | `false` | Whether to render arrow buttons. Clicking on the buttons will cause the scroller to scroll in the respective direction by the width of the scroller or as much as it can. |
| `scrollDistance` | `Number` | `NaN` | Scroll distance for `slideForwards` and `slideBackwards`.<br>If not set, the scroller will try to slid by its width. |

## Events
| Event    | Parameter                                                                                                                  |
|----------|----------------------------------------------------------------------------------------------------------------------------|
| `resize` | object with the following properties:<br><br>`position`: Number<br><br>`atStart`: Boolean<br><br>`atEnd`: Boolean<br><br>`width`: Number |
| `scroll` | object with the following properties:<br><br>`position`: Number<br><br>`atStart`: Boolean<br><br>`atEnd`: Boolean<br><br>`width`: Number |

## Methods

### NNHorizontalScroller
| Method           | Parameters         | Returns | Description                                                       |
|------------------|--------------------|---------|-------------------------------------------------------------------|
| `slideForwards`  | –                  | –       | Slide forwards by the width of the scroller or as much as it can  |
| `slideBackwards` | –                  | –       | Slide backwards by the width of the scroller or as much as it can |
| `slideTo`        | `idx`: Number      | –       | Slide to slide at index `idx`                                     |
