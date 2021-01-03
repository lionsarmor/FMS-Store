import Vue from "vue";

export const store = Vue.observable({
  mugs: 0,
  shirts: 0,
  shipping_details: '',
});

export const mutations = {
    setMugCount(mugs) {
      store.mugs = mugs;
    },
    setShirtCount(shirts) {
      store.shirts = shirts;
    },
  };