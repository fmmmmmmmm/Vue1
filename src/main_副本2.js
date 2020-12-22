//引入Vue模块，引入之后就可以new一个Vue实例了
import Vue from "vue";


var vm = new Vue({
  el: "#app",
  data: {
    msg: "猥琐发育，别浪~~！",
    timer: null,
  },
  methods: {
    lang() {
      //箭头函数的this：声明箭头函数时所在作用域的this
      if (!this.timer) {
        this.timer = setInterval(() => {
          var start = this.msg.substring(0, 1);
          var end = this.msg.substr(1);
          this.msg = end + start;
        }, 200);

        // this.timer = setInterval(function() {
        //   var start = this.msg.substring(0, 1);
        //   var end = this.msg.substr(1);
        //   this.msg = end + start;
        // }.bind(this), 200);
      }
    },
    weisuo() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
});
