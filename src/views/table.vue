<template>
  <div>
    <div class="top-table-container">
      <Input icon="ios-search" placeholder="搜索" class="search-container"/>
    </div>
    <Table class="table-container" :columns="columns1" :data="data1"></Table>
    <div class="bottom-table-container">
      <ButtonGroup class="tool-container">
          <Button type="ghost" icon="plus-round"></Button>
          <Button type="ghost" icon="ios-sunny-outline"></Button>
          <Button type="ghost" icon="ios-crop"></Button>
          <Button type="ghost" icon="ios-color-filter-outline"></Button>
      </ButtonGroup>
      <Page class="page-container" :total="100" show-elevator show-sizer></Page>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
</script>
