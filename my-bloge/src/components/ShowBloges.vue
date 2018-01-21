<template>
  <div id="show-bloges" v-them:column="'narrow'">
    <!-- 自定义指令传入参数的是 区分字符串和具体的值 -->
    <h1>博客总览</h1>
    <input type="text" v-model="seash" placeholder="搜索博客" class="seash">
    <div v-for="bloge in filterBloges" class="sing-blog">
      <!-- 自定义指令 -->
    <router-link v-bind:to="'/blog/'+bloge.id" >
      <h2 v-rainbow>{{bloge.title | uppercase}}</h2>

    </router-link>
      <article>
        <!-- body 属性没有了 -->
        <!-- {{bloge.body | snppit}} -->
          {{bloge.content | snppit}}
      </article>
    </div>
  </div>

</template>

<script>
export default {
  name: 'show-bloges',
  data(){
    return{
      bloges:[],
      seash: ""

    }

  },
  created : function(){
    /* 请求本地文件的时候文件只能放在  static 文件夹下面*/
    /*请求真实 的数据库*/
    this.$http.get("https://wd6927739674grumzc.wilddogio.com/posts.json")
    .then(function(data){

       //console.log(data);
      //console.log(data.json());
      return data.json()

      //this.bloges = data.body.slice(0,10);
     // console.log(this.bloges)

    })
    .then(function(data){
      var blogsArray = [];
      for (let key in data) {
       //console.log(key);
       //console.log(data[key]);
       data[key].id= key;
       /*添加数组*/
        blogsArray.push(data[key]);
      }

     //console.log( blogsArray);
     this.bloges = blogsArray ;
     console.log(this.bloges);
    })
   




  },
  computed :{
    filterBloges: function(){
         /*箭头函数 指向*/
       return this.bloges.filter((bloge) =>{
          return bloge.title.match(this.seash);
          /*  注意这两个方法的使用*/

       })
    }
  },
  /*本地局部api 过滤*/
  filters :{
    "uppercase" : function(value){
      return value.toUpperCase();
  
    
    }
    /*自定义方法的形式*/
    /*uppercase(value){
         return value.toUpperCase();
      
    
    }*/
  
 },
 /*指令的本地*/
 directives: {
  /*属性的书写*/
  "rainbow" : {
    bind(el,binding,vnode){
    //console.log(Math.random().toString(16));
    el.style.color ="#" +Math.random().toString(16).slice(2,8);

  }
  }
 }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-bloges{
  max-width:800px;
  margin: 20px auto;
}
.sing-blog{
  margin: 20px 0;
  padding: 20px;
  box-sizing: border-box;
background: #eee;
border: 1px dotten #aaa;
}
#show-bloges a{
 text-decoration: none;
  color: #444;
}
.seash{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

</style>
