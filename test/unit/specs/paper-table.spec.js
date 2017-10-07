import PaperTable from 'src/components/UIComponents/PaperTable.vue'
import {mount} from 'vue-test-utils'
const tableData = [{
  id: 1,
  name: "Dakota Rice",
  salary: "$36.738",
  country: "Niger",
  city: "Oud-Turnhout"
},
  {
    id: 2,
    name: "Minerva Hooper",
    salary: "$23,789",
    country: "Curaçao",
    city: "	Sinaai-Waas"
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux"
  },
  {
    id: 4,
    name: "Philip Chaney",
    salary: "$38,735",
    country: "Korea, South",
    city: "Overland Park"
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  }];

describe("paper table",()=>{
  beforeEach(()=>{

  })
  it('should render only specified columns',()=>{
    const columns = ['id', 'name'];
    const wrapper = mount(PaperTable,{
      propsData: {
        data:tableData,columns:columns
      }
    })
    let headerRows = wrapper.findAll('th');
    expect(headerRows.length).to.equal(columns.length);
    expect(headerRows.at(0).text()).to.equal(columns[0])
    expect(headerRows.at(1).text()).to.equal(columns[1])
  })

  it('should render specified data',()=>{
    const columns = ['id', 'name'];
    const wrapper = mount(PaperTable,{
      propsData: {
        data:tableData,columns:columns
      }
    })
    let tableRows = wrapper.findAll('tr');
    expect(tableRows.length).to.equal(tableData.length)
    expect(tableRows.at(0).html()).to.equal(`<tr><td>${tableData[0].id}</td><td>${tableData[0].name}</td></tr>`)
  })
})
