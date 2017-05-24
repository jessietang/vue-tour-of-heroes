<template>
  <div class="heroDetail">
    <div v-if="hero != null">
      <h2>{{hero.name}} details!</h2>
      <div><label for="">id: </label>{{hero.id}}</div>
      <div>
        <label for="">name: </label>
        <input type="text" placeholder="name" v-model="hero.name"/>
      </div>
      <button @click="goBack()">Back</button>
      <button @click="save()">Save</button>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'heroDetail',
    data () {
      return {
        heroId: 0,
        hero: {
          id: 0,
          name: ''
        }
      }
    },
    created () {
      this.getParams()
      this.getHero(this.heroId)
    },
    computed: {
      ...mapState([
        'heroes'
      ])
    },
    methods: {
      getParams () {
        console.log(this.$route.params) // Object {id: "16"}
        this.heroId = parseInt(this.$route.params.id)
      },
      getHero (heroId) {
        var self = this
        self.hero = {
          id: heroId,
          name: self.heroes.filter((hero) => hero.id === heroId)[0].name
        }
      },
      goBack () {
        this.$router.go(-1)
      },
      // 编辑保存name
      save () {
        var self = this
        self.hero.name = self.hero.name.trim()
        if (self.hero.name) {
          self.$store.dispatch('save', self.hero)
          this.goBack()
        }
      }
    }
  }
</script>
<style>
  .heroDetail {
    margin-top: 50px;
  }
  label {
    display: inline-block;
    width: 3em;
    margin: .5em 0;
    color: #607D8B;
    font-weight: bold;
  }
  input {
    height: 2em;
    font-size: 1em;
    padding-left: .4em;
  }
  button {
    margin-top: 20px;
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer; cursor: hand;
  }
  button:hover {
    background-color: #cfd8dc;
  }
  button:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
  }

</style>
