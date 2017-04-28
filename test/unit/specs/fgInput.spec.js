import Vue from 'vue'
import fgInput from 'src/components/Inputs/formGroupInput.vue'
window.triggerEvent = function triggerEvent (target, event, process) {
  var e = document.createEvent('HTMLEvents')
  e.initEvent(event, true, true)
  if (process) process(e)
  target.dispatchEvent(e)
}

function getRenderedComponent(Component, propsData) {
  var vm = new Vue({
    template:`<div><fg-input v-model="msg"></fg-input></div>`,
    components:{
      'fg-input':Component
    },
    data:{
      msg:"hello",
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

    vm.$nextTick(()=>{
      expect(vm.msg).to.equal('world')
      done();
    })
  })
})
