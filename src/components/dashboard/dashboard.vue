<template>
  <div class="dashboard">
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <a class="col-1-4" v-for="hero in top4Heroes" @click="goDetail(hero)">
        <div class="hero module">
          <h4>{{hero.name}}</h4>
        </div>
      </a>
    </div>
    <!---->
    <hero-search></hero-search>
  </div>
</template>
<script>
  import heroSearch from '../heroSearch/heroSearch.vue'
  export default {
    name: 'dashboard',
    data () {
      return {
        top4Heroes: []
      }
    },
    components: {
      heroSearch
    },
    created () {
      this.top4Heroes = this.$store.state.heroes.slice(0, 4)
    },
    methods: {
      goDetail (hero) {
        this.$router.push('/heroDetail/' + hero.id)
      }
    }
  }
</script>

<style>
  .dashboard {
    width: 80%;
    margin: 50px auto;
  }
  [class*='col-'] {
    float: left;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  [class*='col-']:last-of-type {
    padding-right: 0;
  }
  a {
    text-decoration: none;
  }
  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  h3 {
    text-align: center; margin-bottom: 0;
  }
  h4 {
    position: relative;
  }
  .grid {
    margin: 0;
  }
  .col-1-4 {
    width: 25%;
  }
  .module {
    padding: 20px;
    text-align: center;
    color: #eee;
    max-height: 120px;
    min-width: 120px;
    background-color: #607D8B;
    border-radius: 2px;
  }
  .module:hover {
    background-color: #EEE;
    cursor: pointer;
    color: #607d8b;
  }
  .grid-pad {
    padding: 10px 0;
    height: 120px;
  }
  .grid-pad > [class*='col-']:last-of-type {
    padding-right: 20px;
  }
  @media (max-width: 600px) {
    .module {
      font-size: 10px;
      max-height: 75px; }
  }
  @media (max-width: 1024px) {
    .grid {
      margin: 0;
    }
    .module {
      min-width: 60px;
    }
  }

</style>
