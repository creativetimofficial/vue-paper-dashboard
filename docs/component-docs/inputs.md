# Inputs

<script>
export default {
  data(){
    return {
       inputVal: ''
    }
  }
}
</script>

<hr>
To use the custom form group inputs you need to import the custom made component:

```js
import {FormGroupInput as FgInput} from 'src/components'
```
Global usage
```js
Vue.component(FgInput)
```

For local usage
```js
export default {
  components: {
    FgInput
  }
}
```

## Custom form group inputs
The form group input component makes use of Vue's [InheritAttrs feature](https://vuejs.org/v2/api/#inheritAttrs) which basically let's
you extend a component very easily. In this case, form group input will accept any [Input attributes](https://www.w3schools.com/tags/tag_input.asp)
as well as [Bootstrap input groups](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs2.asp) through slots.

### Simple with v-model
::: demo
```html
<template>
  <div>
    <fg-input placeholder="Simple input with v-model binding" v-model="inputVal"></fg-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputVal: ''
      }
    }
  }
</script>
```

:::
### Disabled
::: demo
```html
<template>
  <div>
    <fg-input placeholder="Disabled input" disabled></fg-input>
  </div>
</template>

<script>
  export default {

  }
</script>
```
:::

::: tip
You can use `addonRight` and `addonLeft` slots to fully customize the addons.
:::
### With icons
::: demo
```html
<template>
  <div class="row">
      <fg-input class="col-6"
                placeholder="Right icon"
                addon-right-icon="ti ti-user">
      </fg-input>
      <fg-input  class="col-6"
                 placeholder="Left icon"
                 addon-left-icon="ti ti-pencil-alt">
      </fg-input>
  </div>
</template>
<script>
  export default {

  }
</script>

```
:::

### Different native type
::: demo
```html
<template>
  <div class="row">
      <fg-input class="col-sm-6 col-12"
                label="Password"
                placeholder="Password"
                value="mypassword"
                type="password">
       </fg-input>
       <fg-input  class="col-sm-6 col-12"
                  label="Number"
                  placeholder="Number"
                  value="23"
                  type="number">
        </fg-input>
  </div>
</template>
<script>
  export default {

  }
</script>

```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | input value   | string  |       —        |     —     |
| label     | input label  | string  |       —        |     —     |
| addonRightIcon     | right icon for input (is overriden by addonRight slot)   | string  |       —        |     —     |
| addonLeftIcon     | left icon for input (is overriden by addonLeft slot)   | string  |       —        |     —     |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes (default for v-model) | the updated value |

### Slots
| Name | Description |
|---------- |-------- |
|  label  | content for input label |
|  addonLeft  | content for input left addon. Refer to bootstrap [form group inputs](https://getbootstrap.com/docs/3.3/components/#input-groups-basic)  |
|  addonRight  | content for input right addon. Refer to bootstrap [form group inputs](https://getbootstrap.com/docs/3.3/components/#input-groups-basic)  |
