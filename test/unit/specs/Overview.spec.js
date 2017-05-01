import Vue from 'vue'
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import Chartist from 'chartist'

function getRenderedComponent (Component, propsData) {
  Vue.mixin({
    beforeCreate () {
      this._Chartist = Chartist;
    }
  });
  Object.defineProperty(Vue.prototype, '$Chartist', {
    get () { return this.$root._Chartist }
  })

  return mount(Component, propsData)
}

describe('Overview.vue', () => {
  it('should contain 4 stats cards and 1 charts card', () => {
    var vm = getRenderedComponent(Overview);
    var statsCards = vm.$children.filter((child)=>child.$options.name==='stats-card').length;
    var chartCards = vm.$children.filter((child)=>child.$options.name==='chart-card').length;
    expect(statsCards).to.equal(4)
    expect(chartCards).to.equal(1)
  })
})
