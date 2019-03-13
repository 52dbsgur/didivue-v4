<template>
  <div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :search="search"
      hide-actions
      :pagination.sync="pagination"
      :items="desserts"
      item-key="name"
      select-all
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>
          <v-checkbox
            v-model="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td>{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.title }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </div>    
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        pagination: {},
        selected: [],
        headers: [
          {
            text: '촬영 날짜',
            align: 'left',
            sortable: false,
            value: 'date'
          },
          { text: '강의명', value: 'title' },
          { text: '강사명', value: 'name' },
          { text: '영상 시간', value: 'carbs' },
          { text: '메모리', value: 'protein' },
          { text: '업로드 날짜', value: 'iron' }
        ],
        desserts: [
          {
            title: '수학',
            name: 'Anne',
            carbs: 24,
            protein: 4.0,
            iron: '1%',
            date: '2019-01-24'
          },
          {
            title: '영어',
            name: 'Baker',
            carbs: 37,
            protein: 4.3,
            iron: '1%',
            date: '2019-01-24'
          },
          {
            title: '과학',
            name: 'Cal',
            carbs: 23,
            protein: 6.0,
            iron: '7%',
            date: '2019-01-24'
          },
          {
            title: '국어',
            name: 'Dave',
            carbs: 67,
            protein: 4.3,
            iron: '8%',
            date: '2019-01-24'
          },
          {
            title: '코딩',
            name: 'Edan',
            carbs: 49,
            protein: 3.9,
            iron: '16%',
            date: '2019-01-24'
          },
          {
            title: '지리',
            name: 'Fon',
            carbs: 94,
            protein: 0.0,
            iron: '0%',
            date: '2019-01-24'
          },
          {
            title: '역사',
            name: 'Greg',
            carbs: 98,
            protein: 0,
            iron: '2%',
            date: '2019-01-24'
          },
          {
            title: '문화',
            name: 'Hugo',
            carbs: 87,
            protein: 6.5,
            iron: '45%',
            date: '2019-01-24'
          },
          {
            title: '사회',
            name: 'Ive',
            carbs: 51,
            protein: 4.9,
            iron: '22%',
            date: '2019-01-24'
          },
          {
            title: '자바',
            name: 'Jake',
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: '2019-01-24'
          }
        ]
      }
    },
     computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>