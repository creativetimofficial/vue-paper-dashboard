## Cards

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

## Stats cards
Stats cards are a nice way to display visually important statistics in your dashboard such as
number of online users, log count, error count or other relevant information.

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

Chart cards are small wrapper cards over [Chartist library](https://gionkunz.github.io/chartist-js/)

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

### StatsCard Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | Card type   | string  |   primary/danger/success/info/warning        |     primary     |
| icon     | Card icon   | string  |   -        |     -     |
| title     | Card title   | string  |   -        |     —     |
| subTitle     | Card subtitle (displayed above with smaller font)  | string  |      -        |     -     |

### StatsCard Slots
| Name | Description |
|---------- |-------- |
|  icon  | Content for card icon |
|  default  | Default card content |
|  footer  | Content for card footer |
