import Vue from "vue";


var vm = new Vue({
  el: "#app",
  data: {
    name:"张三",
    age:18
  },
  methods: {
    modify(){
      this.name = "张小三"
    }
  }
});
