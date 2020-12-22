//引入Vue模块，引入之后就可以new一个Vue实例了
import Vue from 'vue'


//如果我们导入的是node核心包、node_modules中的包，在打包的时候不需要加路径
//如果我们导入的是自己写的模块，需要加路径  import './main.css'


//import Vue from 'vue'导包原理：
//1.会从当前目录下面去找node_modules，找vue.js vue.json vue.node
//2.如果当前路径下面没有node_modules，会从当前路径的上一层路径中去找node_modules，找vue.js vue.json vue.node
//3.会从当前路径的上一层路径中的node_modules，找vue文件夹
//4.从vue文件夹中找package.json，从package.json中找main字段，使用main字段对应的文件      dist/vue.runtime.common.js
//5.从vue文件夹中找package.json，从package.json中找main字段，如果package.json中没有main字段，会使用当前vue文件夹中的index.js作为一个备选项
//6.从vue文件夹中找package.json，从package.json中找main字段，如果package.json中没有main字段，如果package.json中没有main也没有index.js，继续去找上一层的node_modules
//7.如果一直找到根目录都没有，就会报错 can't resolve xx 


//Vue的核心思想：
//1. 数据驱动(数据一变，页面就会变)
//2. 组件化(后面再说)
//3. vuex(后面再说)


//MVC和MVVM是软件架构的一种思想,MVC主要将软件分为三层,分别是Model层、View层和Controller层,Model层主要负责数据的，View层主要负责页面展示的，Controller主要负责业务逻辑
//Vue是一个MVVM的框架，MVVM主要将软件分为三层，分别是Model层、View层和ViewModel层，其中ViewModel是一个同步Model和View的桥梁，Model的变化会自动同步到View，View的变化也会自动同步到Model



//创建Vue实例  就相当于MVVM中的ViewModel
var vm = new Vue({
  //el:"#app"是设定当前vm实例控制的页面范围
  el:"#app",
  //data放组件数据的地方   就相当于MVVM中的Model
  data:{
    msg:"hello,world",
    number:100,
    ok:true,
    html1:"<span style='color:red'>测试文本1</span>",
    title:"这是要绑定的信息"
  },
  //methods里面放组件的方法
  methods:{
    modify(){
      console.log("modify执行了",this)  //this就是当前的vue实例
      this.msg = "修改了"
    },
    clickMe(event,msg){
      console.log("点我",event.target,msg)
    }
  }
})
