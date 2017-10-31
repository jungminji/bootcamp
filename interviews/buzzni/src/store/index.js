import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    surveyData: null,
    surveyActionData: null,
    selected: {
      gender: null,
      age: [],
      question: null
    }
  },
  mutations: {
    SURVEYDATA (state, payload) {
      state.surveyData = payload
    },
    SURVEYACTIONDATA (state, payload) {
      state.surveyActionData = payload
    },
    SELECTGENDER (state, payload) {
      state.selected.gender = payload
    },
    SELECTQUESTION (state, payload) {
      state.selected.question = payload
    }
  },
  actions: {
    updateSurveyData ({commit}, payload) {
      commit('SURVEYDATA', payload);
    },
    updateSurveyActionData ({commit}, payload) {
      commit('SURVEYACTIONDATA', payload);
    },
    selectGender ({commit}, payload) {
      commit('SELECTGENDER', payload)
    },
    selectQuestion ({commit} ,payload) {
      commit('SELECTQUESTION', payload)
    }
  },
  getters: {
    getGender: state => state.surveyData.gender,
    getAge: state => state.surveyData.age,
    getQuestionLength: state => state.surveyData.questions.length
  }
});

export default store;