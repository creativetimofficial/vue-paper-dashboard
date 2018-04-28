# Buttons

<style>
 button + button{
  margin-left: 5px;
  margin-top: 5px;
 }
</style>
<hr>

## Colors

We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete:
You can either use css classes or our custom crafted `<p-button>` component.
```js
import {Button as PButton} from '@/components'
```

## Local usage
```js
components: {
  PButton
}
```

## Global usage
```js
Vue.component(PButton)
```
::: demo
```html
<template>
    <div>
       <p-button type="default">Default</p-button>
       <p-button type="primary">Primary</p-button>
       <p-button type="info">Info</p-button>
       <p-button type="success">Success</p-button>
       <p-button type="warning">Warning</p-button>
       <p-button type="danger">Danger</p-button>
       <p-button type="neutral">Neutral</p-button>
    </div>
</template>

<script>
    export default {}
</script>
```
:::

## Sizes

Buttons come in all needed sizes:

::: demo
```html
<template>
    <div>
       <p-button type="primary" size="lg">Large</p-button>
       <p-button type="primary">Normal</p-button>
       <p-button type="primary" size="sm">Small</p-button>
    </div>
</template>

<script>
    export default {}
</script>
``` 
:::

## Styles 
We added extra classes that can help you better customise the look.

::: demo
```html
<template>
    <div>
      <p-button type="primary" outline>Outline</p-button>
      <p-button type="info" simple>Simple</p-button>
      <p-button type="danger" round>Round</p-button>
      <p-button type="warning" icon>
        <i class="ti ti-reload"/>
      </p-button>
      <p-button type="default" loading>Loading</p-button>
      <p-button type="success" block>Block</p-button>
    </div>
</template>

<script>
    export default {}
</script>
```
:::
