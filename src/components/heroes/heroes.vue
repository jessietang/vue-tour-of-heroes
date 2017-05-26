<template>
  <div class="myHeroes">
    <h3>My Heroes</h3>
    <div class="search">
      <label for="">Hero name:</label>
      <input type="text" v-model="newName" @keyup.enter="add()"/>
      <button @click="add()">Add</button>
    </div>
    <ul class="heroes">
      <li v-for="hero in heroes" @click="onSelect(hero)">
        <span class="badge">{{hero.id}}</span>
        <span>{{hero.name}}</span>
        <button class="delete" @click.stop="delete_hero(hero)">X</button>
      </li>
    </ul>
    <div v-if="selectedHero != null">
      <h2>
        {{selectedHero.name}} is my hero
      </h2>
      <button @click="gotoDetail()">View Details</button>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'heroes',
    data () {
      return {
        selectedHero: null,
        newName: '',
        newHero: {
          id: 0,
          name: ''
        }
      }
    },
    computed: {
      ...mapState([
        'heroes'
      ])
    },
    methods: {
      onSelect (hero) {
        this.selectedHero = hero
      },
      gotoDetail () {
        // this.$router.push('/heroDetail/' + this.selectedHero.id)
        this.$router.push({path: '/heroDetail/' + this.selectedHero.id}) // 跟上面一种写法是等价的

        // 带查询参数的路径 http://localhost:8080/#/heroDetail/8?userId=0925
        // this.$router.push({path: '/heroDetail/' + this.selectedHero.id, query: {userId: '0925'}})
      },
      add () {
        var self = this
        if (self.newName !== '') {
          self.newHero = {
            id: self.heroes.length + 1,
            name: self.newName
          }
          self.$store.dispatch('add', self.newHero)
          self.newName = ''
        }
      },
      delete_hero (hero) {
        var self = this
        self.$store.dispatch('delete_hero', hero)
      }
    }
  }
</script>
<style>
  label {
    width: 100px!important;
  }
  .myHeroes {
    margin: 50px auto;
  }
  .search {
    margin-top: 20px;
  }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 2em auto;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li span:nth-child(2) {
    display: inline-block;
    height: 1.6em;
    line-height: 1.6em;
    margin-top: -4px;
  }

  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.4em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: absolute;
    left: -1px;
    top: 0;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }

  button.delete {
    float:right;
    margin-top: -2px;
    margin-right: .8em;
    background-color: gray !important;
    color:white;
  }
</style>
