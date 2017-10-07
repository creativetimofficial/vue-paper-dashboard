import Overview from 'src/components/Dashboard/Views/Overview.vue'
import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
import Chartist from 'chartist'
import {mount, createLocalVue} from 'vue-test-utils'
const localVue = createLocalVue()
localVue.prototype.$Chartist = {
  Line: ()=>{},
  Bar: ()=>{},
  Pie: ()=>{},
  Interpolation: {
    simple: () =>{}
  }
}

describe('Overview.vue', () => {
  it('should contain 4 stats cards and 1 charts card', () => {
    const wrapper = mount(Overview, {localVue});
    let statsCards = wrapper.findAll(StatsCard)
    let chartCards = wrapper.findAll(ChartCard)
    expect(statsCards.length).to.equal(4)
    expect(chartCards.length).to.equal(3)
  })
})
