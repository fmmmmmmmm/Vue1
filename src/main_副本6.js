import Vue from "vue";

var vm = new Vue({
  el: "#app",
  data: {
    id: "",
    name: "",
    list: [
      { id: 1, name: "李斯" },
      { id: 2, name: "嬴政" },
      { id: 3, name: "赵高" },
      { id: 4, name: "韩非" },
      { id: 5, name: "荀子" },
    ],
  },
  methods: {
    save() {
      var obj = {
        id: this.id,
        name: this.name,
      };
      this.list.unshift(obj)
      this.id = this.name = "";
    },
  },
});
