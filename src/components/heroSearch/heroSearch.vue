<template>
  <div class="search-component">
    <h4 class="search-title">Hero Search</h4>
    <div class="search-box">
      <input v-model="filterKey" @focus="onFocus()" id="search-box"/>
      <div class="show-search" :class="{'active': isActive}">
        <div class="search-result" v-for="hero in heroes" @click.stop="goDetail(hero)">
          {{hero.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  $(function () {
    // click other place to close the search-list
    $('body').click(function (e) {
      var target = e.target || window.event.srcElement
      console.log(target)
      if (target.id === 'search-box') {
        console.log('非空白')
        $('.show-search').addClass('active')
      } else {
        $('.show-search').removeClass('active')
        console.log('点了空白')
      }
    })
  })
  export default {
    name: 'heroSearch',
    data () {
      return {
        filterKey: '',
        isActive: false
      }
    },
    computed: {
      // 特别注意这里的关键词搜索下拉列表的展示！！！
      heroes () {
        var self = this
        if (self.filterKey !== '') {
          return self.$store.state.heroes.filter((hero) => {
            if (hero.name.toLowerCase().indexOf(self.filterKey) !== -1) {
              return hero
            }
          })
        }
        return self.$store.state.heroes
      }
    },
    methods: {
      goDetail (hero) {
        this.isActive = true
        this.$router.push('/heroDetail/' + hero.id)
        this.isActive = false
      },
      onFocus () {
        this.isActive = true
      }
    }
  }
</script>
<style>
  .search-title {
    text-align: left;
  }
  .search-component {
    width: 100%;
    height: auto;
  }
  .search-box {
    text-align: left;
  }
  .search-box input {
    width: 190px;
    height: 30px;
  }
  .show-search {
    display: none;
  }
  .show-search.active {
    display: block;
  }
  .search-result{
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    width:190px;
    height: 30px;
    line-height: 30px;
    background-color: white;
    cursor: pointer;
    text-align: center;
  }
  .search-result:hover {
    color: #eee;
    background-color: #607D8B;
  }
  .search-box{
    width: 200px;
    height: 30px;
  }

</style>
