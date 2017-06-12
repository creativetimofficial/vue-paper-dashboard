import Vue from 'vue'
import fgInput from 'components/UIComponents/Inputs/formGroupInput.vue'


function getRenderedComponent(Component) {
  var vm = new Vue({
    template: `<div><fg-input v-model='msg'></fg-input></div>`,
    components: {
      'fg-input': Component
    },
    data: {
      msg: 'hello',
    }
  }).$mount()
  return vm;
}

describe('formGroupInput.vue', () => {

  it('should work with v-model', done => {
    var vm = getRenderedComponent(fgInput);
    const input = vm.$el.querySelector('input')
    expect(input.value).to.equal('hello')

    //change input value
    input.value = 'world'
    triggerEvent(input, 'input')
    waitForUpdate(() => {
      expect(vm.msg).to.equal('world')
    }).end(done)
  })

  it('should accept input attributes', () => {
    const vm = mount(fgInput, {type: 'password', name: 'password', placeholder: 'User password'});
    const input = vm.$el.querySelector('input')

    expect(input.type).to.equal('password')
    expect(input.name).to.equal('password')
    expect(input.placeholder).to.equal('User password')
  })

})
