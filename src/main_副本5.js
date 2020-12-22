import Vue from "vue";

var vm = new Vue({
  el: "#app",
  data: {
    list: [
      { id: 1, name: "zs1" },
      { id: 2, name: "zs2" },
      { id: 3, name: "zs3" },
      { id: 4, name: "zs4" },
    ],
    user: {
      id: "001号",
      name: "托尼·屎大颗",
      gender: "男",
    },
  },
  methods: {},
});
