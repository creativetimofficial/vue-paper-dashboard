## Cards

We've created three types of cards, one is for simple use,
one is for creating stats cards and the last one is for creating chart cards.
They have to be imported where you use them like this:

```js
import {Card, StatsCard, ChartCard} from '@/components'
```

## Local usage
```js
components: {
  Card,
  StatsCard,
  ChartCard
}
```

## Global usage
```js
Vue.component(Card)
Vue.component(StatsCard)
Vue.component(ChartCard)
```

<script>
module.exports = {
  data(){
    return {
      activityChart: {
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mai",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
              ],
              series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
              ]
            },
            options: {
              seriesBarDistance: 10,
              axisX: {
                showGrid: false
              },
              height: "245px"
            }
          }
    }
  }
}
</script>

## Cards

::: tip
Cards are a very simple and intuitive way of displaying rich content
:::

:::demo
```html
<template>
  <card class="card-user">
      <div slot="image">
        <img src="@/assets/img/background.jpg" alt="...">
      </div>
      <div>
        <div class="author">
          <img class="avatar border-white" src="@/assets/img/faces/face-2.jpg" alt="...">
          <h4 class="title">Chet Faker
            <br>
            <a href="#">
              <small>@chetfaker</small>
            </a>
          </h4>
        </div>
      </div>
    </card>
</template>

<script>
  export default {}
</script>
```
:::

## Stats cards

::: tip
Stats cards are a nice way to display visually important statistics in your dashboard such as
number of online users, log count, error count or other relevant information.
:::

:::demo
```html
<template>
  <stats-card>
    <div class="icon-big text-center icon-warning" slot="header">
      <i class="ti-server"></i>
    </div>
    <div class="numbers" slot="content">
      <p>Capacity</p>
      105GB
    </div>
    <div class="stats" slot="footer">
      <i class="ti-reload"></i> Updated Now
    </div>
  </stats-card>
</template>

<script>
  export default {}
</script>
```
:::

## Chart cards

::: tip
Chart cards are small wrapper cards over [Chartist library](https://gionkunz.github.io/chartist-js/)
:::

:::demo
```html
<template>
  <chart-card title="2015 Sales"
              sub-title="All products including Taxes"
              :chart-data="activityChart.data"
              :chart-options="activityChart.options">
    <span slot="footer">
      <i class="ti-check"></i> Data information certified
    </span>
    <div slot="legend">
      <i class="fa fa-circle text-info"></i> Tesla Model S
      <i class="fa fa-circle text-warning"></i> BMW 5 Series
    </div>
  </chart-card>
</template>

<script>
  export default {
    data(){
      return {
        activityChart: {
          data: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mai",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: "245px"
          }
        }
      }
    }
  }
</script>
```
:::

### Card Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | Card title   | string  |   -        |     —     |
| subTitle     | Card subtitle (displayed above with smaller font)  | string  |      -        |     -     |

### Card Slots
| Name | Description |
|---------- |-------- |
|  header  | Content for card header |
|  content  | Default card content |
|  footer  | Content for card footer |


### StatsCard Slots
| Name | Description |
|---------- |-------- |
|  header  | Content for card header |
|  content  | Default card content |
|  footer  | Content for card footer |


### ChartCard Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | Card title   | string  |   -        |     —     |
| subTitle     | Card subtitle (displayed above with smaller font)  | string  |      -        |     -     |
| footerText     | Card footer text  | string  |      -        |     -     |
| chartType     | Chart type  | string  |      Line | Pie | Bar        |     Line     |
| chartOptions     | Chartist chart options  | object  |      Chartist Options        |     {}     |
| chartData     | Chartist chart data  | object  |      Chartist Data        |     {lines: [], series: []}     |
