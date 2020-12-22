import Vue from "vue";


var vm = new Vue({
  el: "#app",
  data: {

  },
  methods: {
    clickParent(){
      console.log("parent")
    },
    clickInner(){
      console.log("inner")
    },
    aClick(){
      console.log("aClick")
    },
    clickBox(){
      console.log("box")
    },
    buttonClick(){
      console.log("button")
    }
  }
});
