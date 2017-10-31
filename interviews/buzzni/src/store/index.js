import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    surveyData: null,
    surveyActionData: null,
  },
  mutations: {
    SURVEYDATA (state, payload) {
      state.surveyData = payload
    },
    SURVEYACTIONDATA (state, payload) {
      state.surveyActionData = payload
    }
  },
  actions: {
    updateSurveyData ({commit}, payload) {
      commit('SURVEYDATA', payload);
    },
    updateSurveyActionData ({commit}, payload) {
      commit('SURVEYACTIONDATA', payload);
    }
  },
  getters: {
    getGender: state => state.surveyData.gender,
    getAge: state => state.surveyData.age,
    getQuestionLength: state => state.surveyData.questions.length
  }
});

export default store;