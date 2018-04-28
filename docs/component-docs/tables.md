## Tables

<script>
module.exports = {
  data(){
    const tableColumns = ["Id", "Name", "Salary", "Country", "City"];
   const tableData = [
    {
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
      city: "Sinaai-Waas"
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
    }
  ];
    return {
      tableData,
      tableColumns
    }
  },
  methods: {
   handleEdit(row){
      console.log(`You want to edit row with id: ${row.id}`)
    },
    handleDelete(row){
      console.log(`You want to delete row with id: ${row.id}`)
    }
  }
}
</script>

We provide a small table wrapper so you can easily display table data.

:::demo
```html
<template>
  <paper-table :data="tableData" :columns="tableColumns" type="hover">
  </paper-table>
</template>

<script>
  export default {
    data(){
      return {
       tableColumns: ["Id", "Name", "Salary", "Country", "City"],
       tableData: [
            {
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
              city: "Sinaai-Waas"
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
            }
          ]

      }
    }
  }
</script>
```
:::

::: tip
You can use paper table row and column slots to display more complex information
:::

:::demo
```html
<template>
  <paper-table :data="tableData" :columns="tableColumns" type="hover">
   <template slot="columns">
          <th>Id</th>
          <th>Name</th>
          <th><i class="fa fa-money"></i> Salary</th>
          <th>Operations</th>
      </template>
      <template slot-scope="{row}">
        <td>{{row.id}}</td>
        <td><b>{{row.name}}</b></td>
        <td>{{row.salary}}</td>
        <td>
          <p-button type="info" icon @click.native="handleEdit(row)">
            <i class="ti ti-pencil-alt"></i>
          </p-button>
          <p-button style="margin-left: 5px;" type="danger" icon @click.native="handleDelete(row)">
           <i class="ti ti-close"></i>
          </p-button>
        </td>
      </template>
  </paper-table>
</template>

<script>
  export default {
    data(){
      return {
       tableColumns: ["Id", "Name", "Salary", "Country", "City"],
       tableData: [
            {
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
              city: "Sinaai-Waas"
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
            }
          ]

      }
    },
    methods: {
      handleEdit(row){
        console.log(`You want to edit row with id: ${row.id}`)
      },
      handleDelete(row){
        console.log(`You want to delete row with id: ${row.id}`)
      }
    }
  }
</script>
```

### Table Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| columns     | Array of column values   | Array  |       Lower case and uppper case key values        |     —     |
| data     | Array of data objects  | Array  |       Any data object        |     —     |
| type     | Table type  | string  |       striped|hover        |     striped     |
| title     | Table title  | string  |       -        |     -     |
| subTitle     | Table sub title  | string  |       -        |     -     |


### Table Slots
| Name | Description |
|---------- |-------- |
|  default  | Content for table data. Can be used as a scoped slot and sends {row} as slot data |
|  columns  | Content for columns |
