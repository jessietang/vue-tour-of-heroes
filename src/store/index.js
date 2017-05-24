/**
 * Created by jessietang on 2017/5/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  heroes: [
    { id: 1, name: 'Mr. Nice' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' },
    { id: 5, name: 'Magneta' },
    { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Dynama' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 10, name: 'Tornado' }
  ]
}

const getters = {}

const mutations = {
  // 编辑保存name
  SAVE: (state, hero) => {
    state.heroes.filter(function (d) {
      if (d.id === hero.id) {
        d.name = hero.name
      }
    })
  },
  ADD: (state, newHero) => {
    // state.heroes.unshift(newHero)
    state.heroes.push(newHero)
  },
  DELETE_HERO: (state, hero) => {
    state.heroes.filter(function (d, i) {
      if (d.id === hero.id) {
        state.heroes.splice(i, 1)
      }
    })
  }
}

const actions = {
  save ({commit}, hero) {
    commit('SAVE', hero)
  },
  add ({commit}, newHero) {
    commit('ADD', newHero)
  },
  delete_hero ({commit}, hero) {
    commit('DELETE_HERO', hero)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
