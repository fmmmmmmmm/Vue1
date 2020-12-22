import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";

var vm = new Vue({
  el: "#app",
  data: {
    id: "",
    name: "",
    //搜索关键字
    keywords: "",
    list: [
      { id: 10, name: "奔驰", ctime: new Date() },
      { id: 20, name: "宝马", ctime: new Date() },
    ],
  },
  methods: {
    add() {
      if (this.id && this.name) {
        var brand = {
          id: this.id,
          name: this.name,
          ctime: new Date(),
        };
        this.list.push(brand);
        this.id = this.name = "";
      }
    },
    del(id) {
      //根据id查找当前元素在数组的位置
      var index = this.list.findIndex((item) => {
        if (item.id === id) {
          return true;
        }
      });
      //从index位置开始删除1个元素
      this.list.splice(index, 1);
    },
    //search方法依赖于list和keywords，只要list和keywords有任何一个改变，search方法就会重新执行
    search(){
      return this.list.filter(item=>{
        if(item.name.indexOf(this.keywords)!=-1){
          return true;
        }
      })
    }
  },
});
